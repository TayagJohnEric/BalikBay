import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../Components/Logo';

const navItems = [
    { label: 'Why BalikBay', href: '#benefits' },
    { label: 'How it works', href: '#features' },
    { label: 'Community', href: '#community' },
];

const focus =
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600';

const btn = {
    base: `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${focus}`,
    primary: 'bg-orange-600 text-white hover:bg-orange-700',
    outline: 'border border-stone-300 bg-white text-stone-900 hover:border-stone-900',
    text: `px-3 py-2 text-sm font-semibold text-stone-900 hover:text-orange-700 ${focus}`,
};

export default function GuestNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#FBF8F3]/95 backdrop-blur">
            <nav
                aria-label="Main"
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
            >
                <a href="#top" aria-label="BalikBay home" className={`rounded-lg ${focus}`}>
                    <Logo />
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="text-sm font-medium text-stone-600 hover:text-orange-700"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop actions */}
                <div className="hidden items-center gap-2 md:flex">
                    <a href="/login" className={btn.text}>
                        Log in
                    </a>
                    <a href="/register" className={`${btn.base} ${btn.primary} py-2`}>
                        Get started
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    className={`rounded-lg p-2 text-stone-900 md:hidden ${focus}`}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </nav>

            {/* Mobile panel */}
            {open && (
                <div
                    id="mobile-menu"
                    className="border-t border-stone-200 bg-[#FBF8F3] px-4 pb-4 md:hidden"
                >
                    <ul className="py-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-3 text-base font-medium text-stone-800"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-2">
                        <a href="/login" className={`${btn.base} ${btn.outline} flex-1`}>
                            Log in
                        </a>
                        <a href="/register" className={`${btn.base} ${btn.primary} flex-1`}>
                            Get started
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}