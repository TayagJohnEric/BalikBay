import { useState, useEffect, useRef } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { Search, Bell, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import Logo from '@/Components/UI/Logo';

const FOCUS =
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600';
// Inside the dropdown the outline sits inside the item so overflow-hidden doesn't clip it.
const MENU_FOCUS =
    'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600';

// TODO: replace these hrefs with your real routes.
const PROFILE_LINKS = [
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Settings', href: '/settings', icon: Settings },
];

/* ------------------------------------------------------------------
   Props (from MainLayout):
   - appName:    shown with the logo on mobile/tablet (desktop has it in the sidebar)
   ------------------------------------------------------------------ */
export default function TopNavbar({ appName }) {
    // Assumes Inertia shares `auth.user` (Laravel Breeze does by default).
    const { auth } = usePage().props;
    const userName = auth?.user?.name ?? 'User';
    const userEmail = auth?.user?.email;
    const initial = userName.charAt(0).toUpperCase();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close the dropdown on outside click or Escape.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        const handleEscape = (event) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const menuItemClass = `flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 ${MENU_FOCUS}`;

    return (
        <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#FBF8F3]/95">
            <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
                {/* Logo: mobile/tablet only. Name hides on the smallest screens to leave room for search. */}
                <div className="shrink-0 lg:hidden">
                    <Link href="/dashboard" aria-label={`${appName} home`} className={`block rounded-lg ${FOCUS}`}>
                        <Logo name={appName} nameClassName="hidden sm:inline" />
                    </Link>
                </div>

                {/* Search (UI only). Wrap in a form and add onChange/onSubmit when ready. */}
                <div className="relative min-w-0 max-w-md flex-1">
                    <Search
                        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
                        aria-hidden="true"
                    />
                    <input
                        type="search"
                        placeholder="Search lost and found items"
                        aria-label="Search"
                        className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-9 pr-3 text-sm text-stone-900 placeholder:text-stone-500 focus:border-orange-600 focus:outline-2 focus:outline-offset-2 focus:outline-orange-600"
                    />
                </div>

                <div className="ml-auto flex items-center gap-1 sm:gap-2">
                    {/* Notifications: a link, so it also works on mobile where the bottom bar has no bell */}
                    <Link
                        href="/notification"
                        aria-label="Notifications"
                        className={`relative rounded-lg p-2 text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 ${FOCUS}`}
                    >
                        <Bell className="h-5 w-5" aria-hidden="true" />
                    </Link>

                    {/* Profile dropdown */}
                    <div className="relative" ref={menuRef}>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((open) => !open)}
                            aria-haspopup="menu"
                            aria-expanded={isMenuOpen}
                            aria-label="Open user menu"
                            className={`flex items-center gap-2 rounded-lg py-1 pl-1 pr-2 transition-colors hover:bg-stone-100 ${FOCUS}`}
                        >
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-600 text-sm font-semibold text-white">
                                {initial}
                            </span>
                            <span className="hidden max-w-[10rem] truncate text-sm font-semibold text-stone-900 sm:block">
                                {userName}
                            </span>
                            <ChevronDown
                                className={`h-4 w-4 text-stone-500 transition-transform ${
                                    isMenuOpen ? 'rotate-180' : ''
                                }`}
                                aria-hidden="true"
                            />
                        </button>

                        {isMenuOpen && (
                            // No shadow: per the tokens only listing cards get one.
                            <div
                                role="menu"
                                className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-stone-300 bg-white py-1"
                            >
                                <div className="border-b border-stone-200 px-3 py-2">
                                    <p className="truncate text-sm font-semibold text-stone-900">{userName}</p>
                                    {userEmail && (
                                        <p className="truncate text-sm text-stone-500">{userEmail}</p>
                                    )}
                                </div>

                                <div className="py-1">
                                    {PROFILE_LINKS.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                role="menuitem"
                                                onClick={() => setIsMenuOpen(false)}
                                                className={menuItemClass}
                                            >
                                                <Icon className="h-4 w-4" aria-hidden="true" />
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="border-t border-stone-200 pt-1">
                                    {/* Button, not Link: logout is an action */}
                                    <button
                                        type="button"
                                        role="menuitem"
                                        onClick={() => router.post('/logout')}
                                        className={menuItemClass}
                                    >
                                        <LogOut className="h-4 w-4" aria-hidden="true" />
                                        Log out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}