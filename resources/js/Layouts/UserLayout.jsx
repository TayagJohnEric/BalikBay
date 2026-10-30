import { useState, useEffect, useCallback } from 'react';
import { Head } from '@inertiajs/react';
import Authnavbar from '../Components/Authnavbar';
import IconSidebar from '../Components/IconSidebar';

export default function UserLayout({
  children,
  title = 'BalikBay: Community Lost & Found',
  description = 'Report lost items, post found items and coordinate safe returns with your community.',
  activeKey = 'dashboard',
  showSidebar = true,
}) {
  const [desktopOpen, setDesktopOpen] = useState(true);   // desktop: expanded / collapsed
  const [mobileOpen, setMobileOpen] = useState(false);    // mobile: drawer open / closed

  const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

  // One handler for the toggle button: picks the right state for the screen size
  const toggleSidebar = useCallback(() => {
    if (isDesktop()) setDesktopOpen((v) => !v);
    else setMobileOpen((v) => !v);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Close the drawer with Escape, and lock page scroll while it's open
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close the drawer if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <Head title={title}>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex min-h-screen bg-[#FBF8F3] text-stone-900 antialiased">
        {showSidebar && (
          <>
            {/* Desktop: collapses by animating its width to 0 */}
            <div
              className={`sticky top-0 z-40 hidden h-screen shrink-0 md:grid transition-[grid-template-columns,visibility] duration-300 ease-in-out ${
                desktopOpen ? 'grid-cols-[1fr]' : 'invisible grid-cols-[0fr]'
              }`}
            >
              <div className="min-w-0 overflow-hidden">
                <IconSidebar activeKey={activeKey} className="flex h-full" />
              </div>
            </div>

            {/* Mobile: slide-out drawer + backdrop */}
            <div className="md:hidden">
              <div
                onClick={closeMobile}
                aria-hidden="true"
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
                  mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              />
              <div
                // Any click on a navigation link inside the drawer closes it
                onClick={(e) => e.target.closest('a') && closeMobile()}
                className={`fixed inset-y-0 left-0 z-50 transition-[transform,visibility] duration-300 ease-in-out ${
                  mobileOpen ? 'translate-x-0' : 'invisible -translate-x-full'
                }`}
              >
                <IconSidebar activeKey={activeKey} className="flex h-full" />
              </div>
            </div>
          </>
        )}

        <div className="min-w-0 flex-1">
          <Authnavbar
            showSidebarToggle={showSidebar}
            sidebarOpen={desktopOpen}
            mobileSidebarOpen={mobileOpen}
            onToggleSidebar={toggleSidebar}
          />

          <main id="top" className="overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}