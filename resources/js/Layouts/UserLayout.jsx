import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';


/**
 * The landing page and the shared layout in one file.
 * - With no children, <main> shows the BalikBay landing sections.
 * - With children, <main> shows them instead, so other pages can reuse the layout:
 *     <MainLayout title="Browse listings"> ...content... </MainLayout>
 */
export default function UserLayout({
  children,
  title = 'BalikBay: Community Lost & Found',
  description = 'Report lost items, post found items and coordinate safe returns with your community.',
}) {
  return (
    <>
      <Head title={title}>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-stone-900 antialiased">
        <Navbar />

        <main id="top">
          {children}
        </main>
      </div>
    </>
  );
}