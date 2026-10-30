import { useState, useRef, useEffect } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    User,
    Settings,
    LogOut,
    PanelLeftClose,
    PanelLeftOpen,
} from 'lucide-react';
import Logo from '../Components/Logo';
import { Link, usePage, router } from '@inertiajs/react'

const focus =
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600';

const iconBtn = `grid h-10 w-10 place-items-center rounded-lg text-stone-700 hover:bg-stone-100 ${focus}`;

const menuItems = [
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Settings', href: '/settings', icon: Settings },
];

const menuItemClass =
    'flex w-full items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-stone-900';

// Sidebar toggle: icon reflects the current sidebar state
function SidebarToggle({ isOpen, onClick, className = '' }) {
    const Icon = isOpen ? PanelLeftClose : PanelLeftOpen;
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
            aria-expanded={isOpen}
            className={`${iconBtn} ${className}`}
        >
            <Icon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}

export default function AuthNavbar({
    user = { name: 'Juan Dela Cruz' },
    // Optional sidebar wiring (same props UserLayout already passes)
    showSidebarToggle = false,
    sidebarOpen = true,
    mobileSidebarOpen = false,
    onToggleSidebar,
}) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const initials = user.name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

    // Close the dropdown on outside click or Escape
    useEffect(() => {
        if (!open) return;
        const onMouseDown = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#FBF8F3]/95 backdrop-blur">
            <nav
                aria-label="Main"
                className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6"
            >
                {/* Left: sidebar toggle + logo */}
                <div className="flex shrink-0 items-center gap-2">
                    {showSidebarToggle && (
                        <>
                            <SidebarToggle
                                isOpen={sidebarOpen}
                                onClick={onToggleSidebar}
                                className="hidden md:grid"
                            />
                            <SidebarToggle
                                isOpen={mobileSidebarOpen}
                                onClick={onToggleSidebar}
                                className="md:hidden"
                            />
                        </>
                    )}
                    <a href="/dashboard" aria-label="BalikBay dashboard" className={`rounded-lg ${focus}`}>
                        <Logo compact />
                    </a>
                </div>

                {/* Center: search (desktop) */}
                <div className="hidden min-w-0 flex-1 md:block">
                    <label className="mx-auto flex max-w-md items-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-500 focus-within:border-orange-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange-600">
                        <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span className="sr-only">Search listings</span>
                        <input
                            type="search"
                            placeholder="Search lost and found items"
                            className="w-full bg-transparent text-stone-900 placeholder:text-stone-500 focus:outline-none"
                        />
                    </label>
                </div>

                {/* Right: search (mobile), notifications, profile */}
                <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                    <button type="button" aria-label="Search" className={`${iconBtn} md:hidden`}>
                        <Search className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <button type="button" aria-label="Notifications" className={`${iconBtn} relative`}>
                        <Bell className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <div ref={menuRef} className="relative flex items-center gap-2 pl-1 sm:pl-2">
                        <span
                            aria-hidden="true"
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-100 text-sm font-semibold text-orange-700"
                        >
                            {initials}
                        </span>

                        <span className="hidden max-w-[10rem] truncate text-sm font-semibold text-stone-900 sm:inline">
                            {user.name}
                        </span>

                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="User menu"
                            aria-haspopup="menu"
                            aria-expanded={open}
                            className={`grid h-8 w-8 place-items-center rounded-lg text-stone-600 hover:bg-stone-100 ${focus}`}
                        >
                            <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                            />
                        </button>

                        {open && (
                            <div
                                role="menu"
                                className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-lg border border-stone-300 bg-white py-1"
                            >
                                {/* Name shown here on mobile, where it's hidden in the bar */}
                                <p className="truncate border-b border-stone-200 px-3 py-2 text-sm font-semibold text-stone-900 sm:hidden">
                                    {user.name}
                                </p>

                                {menuItems.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        role="menuitem"
                                        onClick={() => setOpen(false)}
                                        className={menuItemClass}
                                    >
                                        <Icon className="h-4 w-4" aria-hidden="true" />
                                        {label}
                                    </a>
                                ))}

                                <div className="my-1 border-t border-stone-200" />

                             <button
                                type="button"
                                onClick={() => router.post('/logout')}
                                className="px-3 py-2 text-sm font-semibold text-stone-900 hover:text-orange-700"
                            >
                                  <LogOut className="h-4 w-4" aria-hidden="true" />
                                Log out
                            </button>

                              
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}