import { useState } from 'react';
import { LayoutDashboard, Search, PlusCircle, FileText, ClipboardCheck, Bell } from 'lucide-react';
import TopNavbar from '@/Components/Layout/TopNavbar';
import Sidebar from '@/Components/Layout/Sidebar';
import BottomNavbar from '@/Components/Layout/BottomNavbar';

/* ------------------------------------------------------------------
   CUSTOMIZE HERE (per project)
   ------------------------------------------------------------------ */
const APP_NAME = 'Your App';

// Sidebar links (desktop icon rail).
// TODO: replace these hrefs with your real routes.
const SIDEBAR_ITEMS = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Browse Reports', href: '/search', icon: Search },
    { label: 'Create Reports', href: '/create', icon: PlusCircle },
    { label: 'My Reports', href: '/reports', icon: FileText },
    { label: 'Notifications', href: '/notification', icon: Bell },
    { label: 'Claims', href: '/claims', icon: ClipboardCheck },
];

// Bottom bar links (mobile + tablet). 4 is comfortable, 5 is the maximum.
const BOTTOM_NAV_ITEMS = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Search', href: '/search', icon: Search },
    { label: 'Create', href: '/create', icon: PlusCircle },
    { label: 'Claims', href: '/claims', icon: ClipboardCheck },
];

/* ------------------------------------------------------------------
     Sidebar    (lg and up; icon rail when collapsed, labels when expanded)
     BottomNav  (below lg)
     TopNavbar  (all sizes)
     {children} (page content)
   ------------------------------------------------------------------ */
export default function MainLayout({ children }) {
    // true = icon rail (default). Change to useState(false) to start expanded.
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => setIsCollapsed((value) => !value);

    return (
        <div className="min-h-screen overflow-x-clip bg-[#FBF8F3]/95 text-stone-900 antialiased">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-stone-900 focus:outline-2 focus:outline-offset-2 focus:outline-orange-600"
            >
                Skip to content
            </a>

            <Sidebar
                appName={APP_NAME}
                navItems={SIDEBAR_ITEMS}
                isCollapsed={isCollapsed}
                onToggleCollapse={toggleCollapse}
            />

            {/* lg and up: left padding equals the sidebar width */}
            <div
                className={`transition-[padding] duration-200 ease-out ${
                    isCollapsed ? 'lg:pl-16' : 'lg:pl-64'
                }`}
            >
                <TopNavbar appName={APP_NAME} />

                {/* pb-28 on mobile keeps the end of the page clear of the bottom bar (h-16 + safe area) */}
                <main
                    id="main-content"
                    className="mx-auto max-w-6xl px-4 py-6 pb-28 sm:px-6 sm:py-8 sm:pb-28 lg:pb-10"
                >
                    {children}
                </main>
            </div>

            <BottomNavbar navItems={BOTTOM_NAV_ITEMS} />
        </div>
    );
}