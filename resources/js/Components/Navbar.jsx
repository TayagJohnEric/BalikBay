
import { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react'
import { Menu, X, PackageSearch } from 'lucide-react';

const navItems = [
    { label: 'Why BalikBay', href: '#benefits' },
    { label: 'How it works', href: '#features' },
    { label: 'Community', href: '#community' },
];

const btn = {
    base: 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
    primary: 'bg-orange-600 text-white hover:bg-orange-700',
    outline: 'border border-stone-300 text-stone-900 hover:bg-stone-100',
};

const links = {
    login: '/login',
    register: '/register',
};

function Logo() {
    return (
        <div className="flex items-center gap-2">
            <PackageSearch className="h-7 w-7 text-orange-600" />
            <span className="text-lg font-bold text-stone-900">
                BalikBay
            </span>
        </div>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { auth } = usePage().props
   
     const user = auth?.user;

    

    return (
        <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#FBF8F3]/95 backdrop-blur">
            <nav
                aria-label="Main"
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
            >
                <a href="#top" aria-label="BalikBay home">
                    <Logo />
                </a>

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

               <div className="hidden items-center gap-2 md:flex">
                    {user ? (
                        <>
                            <button
                                type="button"
                                onClick={() => router.post('/logout')}
                                className="px-3 py-2 text-sm font-semibold text-stone-900 hover:text-orange-700"
                            >
                                Log out
                            </button>
                            <p>Welcome, {auth.user.name}!</p>
                        </>
                    ) : (
                        <>
                            <Link
                                href={links.login}
                                className="px-3 py-2 text-sm font-semibold text-stone-900 hover:text-orange-700"
                            >
                                Log in
                            </Link>

                            <Link
                                href={links.register}
                                className={`${btn.base} ${btn.primary}`}
                            >
                                Get started
                            </Link>
                        </>
                    )}
                </div>

                <button
                    type="button"
                    className="rounded-lg p-2 text-stone-900 md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>

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
                        <Link
                            href={links.login}
                            className={`${btn.base} ${btn.outline} flex-1`}
                        >
                            Log in
                        </Link>

                        <Link
                            href={links.register}
                            className={`${btn.base} ${btn.primary} flex-1`}
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
