import { Link, usePage } from '@inertiajs/react';

// true  = icon + small label on every tab
// false = icons only (labels stay available to screen readers via aria-label)
const SHOW_LABELS = true;

const FOCUS =
    'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600';

/* ------------------------------------------------------------------
   MOBILE / TABLET BOTTOM NAVIGATION (below lg).
   Props (from MainLayout):
   - navItems: { label, href, icon, highlight? }
               highlight = true draws the icon in an orange box
               (the primary action, e.g. "Create Report")
   ------------------------------------------------------------------ */
export default function BottomNavbar({ navItems }) {
    const { url } = usePage();
    const currentPath = url.split('?')[0];
    const isActive = (href) => currentPath === href || currentPath.startsWith(href + '/');

    return (
        // pb-[env(safe-area-inset-bottom)] needs viewport-fit=cover in app.blade.php.
        <nav
            aria-label="Main navigation"
            className="fixed inset-x-0 bottom-0 z-30 border-t border-stone-200 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
        >
            <ul className="flex">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);

                    return (
                        <li key={item.href} className="flex-1">
                            <Link
                                href={item.href}
                                aria-label={item.label}
                                aria-current={active ? 'page' : undefined}
                                className={`relative flex h-16 flex-col items-center justify-center gap-1 transition-colors ${FOCUS} ${
                                    active ? 'text-orange-700' : 'text-stone-500 hover:text-stone-900'
                                }`}
                            >
                                {active && !item.highlight && (
                                    <span
                                        className="absolute left-1/3 right-1/3 top-0 h-0.5 rounded-full bg-orange-600"
                                        aria-hidden="true"
                                    />
                                )}

                                {item.highlight ? (
                                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-600 text-white">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                ) : (
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                )}

                                {SHOW_LABELS && (
                                    <span
                                        className={`max-w-full truncate px-1 text-[11px] leading-none ${
                                            active ? 'font-semibold' : 'font-medium'
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}