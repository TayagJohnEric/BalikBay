import { Link, usePage } from '@inertiajs/react';
import { Undo2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const FOCUS =
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600';

// Dark tooltip, shown only while the sidebar is collapsed.
const TOOLTIP =
    'pointer-events-none absolute left-full top-1/2 z-40 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-stone-900 px-2 py-0.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100';

/* ------------------------------------------------------------------
   DESKTOP SIDEBAR (lg and up). Below lg the BottomNavbar is shown.
   Collapsed (w-16) = the icon rail with tooltips.
   Expanded  (w-64) = same buttons with labels.
   Props (from MainLayout):
   - appName:          name shown next to the logo when expanded
   - navItems:         { label, href, icon }
   - isCollapsed:      true = icon rail
   - onToggleCollapse: flips isCollapsed
   ------------------------------------------------------------------ */
export default function Sidebar({ appName, navItems, isCollapsed, onToggleCollapse }) {
    const { url } = usePage();
    const currentPath = url.split('?')[0];
    const isActive = (href) => currentPath === href || currentPath.startsWith(href + '/');

    return (
        <aside
            className={`fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-stone-200 bg-white py-4 transition-[width] duration-200 ease-out lg:flex ${
                isCollapsed ? 'w-16 items-center' : 'w-64'
            }`}
        >
            {/* Logo */}
            <Link
                href="/dashboard"
                aria-label={`${appName} home`}
                className={`flex items-center gap-2 rounded-lg ${FOCUS} ${isCollapsed ? '' : 'mx-4'}`}
            >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-600 text-white">
                    <Undo2 className="h-5 w-5" aria-hidden="true" />
                </span>
                {!isCollapsed && (
                    <span className="font-display truncate text-xl font-extrabold text-stone-900">
                        {appName}
                    </span>
                )}
            </Link>

            <div className={`my-4 h-px bg-stone-200 ${isCollapsed ? 'w-8' : 'mx-4'}`} />

            {/* Navigation */}
            <nav aria-label="Main navigation" className={isCollapsed ? '' : 'px-3'}>
                <ul className={`flex flex-col gap-2 ${isCollapsed ? 'items-center' : ''}`}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);

                        return (
                            <li key={item.href} className="group relative">
                                <Link
                                    href={item.href}
                                    aria-current={active ? 'page' : undefined}
                                    aria-label={item.label}
                                    className={`relative h-11 rounded-lg text-sm font-semibold transition-colors ${FOCUS} ${
                                        isCollapsed
                                            ? 'grid w-11 place-items-center'
                                            : 'flex w-full items-center gap-3 px-3'
                                    } ${
                                        active
                                            ? 'bg-orange-600 text-white'
                                            : 'text-stone-600 hover:bg-stone-100 hover:text-orange-700'
                                    }`}
                                >
                                    <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                                    {!isCollapsed && <span className="truncate">{item.label}</span>}

                                </Link>

                                {isCollapsed && (
                                    <span aria-hidden="true" className={TOOLTIP}>
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Collapse toggle */}
            <div className={`mt-auto ${isCollapsed ? '' : 'w-full px-3'}`}>
                <div className={`mb-4 h-px bg-stone-200 ${isCollapsed ? 'w-8' : 'w-full'}`} />
                <div className="group relative">
                    <button
                        type="button"
                        onClick={onToggleCollapse}
                        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        aria-expanded={!isCollapsed}
                        className={`h-11 rounded-lg text-sm font-semibold text-stone-600 transition-colors hover:bg-stone-100 hover:text-orange-700 ${FOCUS} ${
                            isCollapsed
                                ? 'grid w-11 place-items-center'
                                : 'flex w-full items-center gap-3 px-3'
                        }`}
                    >
                        {isCollapsed ? (
                            <PanelLeftOpen className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <>
                                <PanelLeftClose className="h-5 w-5 shrink-0" aria-hidden="true" />
                                <span>Collapse</span>
                            </>
                        )}
                    </button>
                    {isCollapsed && (
                        <span aria-hidden="true" className={TOOLTIP}>
                            Expand
                        </span>
                    )}
                </div>
            </div>
        </aside>
    );
}