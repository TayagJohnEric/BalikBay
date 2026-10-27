// resources/js/Pages/Home.jsx
// Single-file BalikBay landing page (Laravel + Inertia + React + Tailwind + lucide-react)
import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
  Menu, X, Undo2, MapPin, Clock, Search, SearchX, PackageCheck, Link2,
  Backpack, KeyRound, Wallet, Smartphone, Camera, ShieldQuestion,
  SearchCheck, HandHelping, Users, ShieldCheck,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Settings: change these to match your app                            */
/* ------------------------------------------------------------------ */

const links = {
  login: '/login',
  register: '/register',
  listings: '/listings',        // TODO: connect to your listings page
  reportLost: '/report/lost',   // TODO: connect to your "lost item" form
  reportFound: '/report/found', // TODO: connect to your "found item" form
};

const display = "font-['Bricolage_Grotesque',ui-sans-serif,sans-serif]";

const btn = {
  base: 'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600',
  primary: 'bg-orange-600 text-white hover:bg-orange-700',
  dark: 'bg-stone-900 text-white hover:bg-stone-700',
  outline: 'border border-stone-300 bg-white text-stone-900 hover:border-stone-900',
};

const navItems = [
  { label: 'Why BalikBay', href: '#benefits' },
  { label: 'How it works', href: '#features' },
  { label: 'Community', href: '#community' },
];

const benefits = [
  { Icon: SearchCheck, title: 'Find what you lost', text: 'Describe your item once and let neighbors who pass by the same places keep an eye out for it.' },
  { Icon: HandHelping, title: 'Return what you found', text: 'Found a wallet or a set of keys? List it in a minute so its owner has somewhere to look.' },
  { Icon: Users, title: 'Recover things together', text: 'Every listing makes it more likely that someone, somewhere, connects the dots.' },
  { Icon: ShieldCheck, title: 'Hand over with confidence', text: 'Ask the owner for details only they would know before you arrange a return.' },
];

// Fill these in ONLY with real data. The Community section adapts automatically.
// stats example:        { value: '128', label: 'items returned' }
// testimonials example: { quote: '...', name: 'Real user name', detail: 'Barangay / city' }
const stats = [];
const testimonials = [];

/* ------------------------------------------------------------------ */
/* Small reusable pieces                                               */
/* ------------------------------------------------------------------ */

function Logo() {
  return (
    <span className={`flex items-center gap-2 text-xl font-extrabold text-stone-900 ${display}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-600 text-white">
        <Undo2 className="h-5 w-5" aria-hidden="true" />
      </span>
      BalikBay
    </span>
  );
}

// A listing styled like a claim tag. Used in the hero and the previews.
function ListingCard({ kind, title, place, when, Icon, className = '' }) {
  const isLost = kind === 'lost';
  return (
    <article className={`relative rounded-xl border bg-white p-4 pt-6 shadow-sm ${isLost ? 'border-orange-300' : 'border-stone-300'} ${className}`}>
      <span aria-hidden="true" className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-stone-300 bg-[#FBF8F3]" />
      <div className="flex items-start gap-3">
        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg ${isLost ? 'bg-orange-100 text-orange-700' : 'bg-stone-100 text-stone-700'}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-semibold ${isLost ? 'bg-orange-600 text-white' : 'bg-stone-900 text-white'}`}>
            {isLost ? 'Lost' : 'Found'}
          </span>
          <h3 className="mt-1 truncate text-base font-semibold text-stone-900">{title}</h3>
        </div>
      </div>
      <dl className="mt-3 space-y-1 text-sm text-stone-600">
        <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" /><dt className="sr-only">Location</dt><dd>{place}</dd></div>
        <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /><dt className="sr-only">When</dt><dd>{when}</dd></div>
      </dl>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu only

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#FBF8F3]/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="BalikBay home"><Logo /></a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}><a href={item.href} className="text-sm font-medium text-stone-600 hover:text-orange-700">{item.label}</a></li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Link href={links.login} className="px-3 py-2 text-sm font-semibold text-stone-900 hover:text-orange-700">Log in</Link>
          <Link href={links.register} className={`${btn.base} ${btn.primary} py-2`}>Get started</Link>
        </div>

        <button type="button" className="rounded-lg p-2 text-stone-900 md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-stone-200 bg-[#FBF8F3] px-4 pb-4 md:hidden">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-stone-800">{item.label}</a></li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Link href={links.login} className={`${btn.base} ${btn.outline} flex-1`}>Log in</Link>
            <Link href={links.register} className={`${btn.base} ${btn.primary} flex-1`}>Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2">
      <div>
        <h1 className={`text-4xl font-extrabold leading-[1.05] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl ${display}`}>
          Lost it? Someone nearby may have found it.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
          BalikBay is a community lost-and-found board. Post what you lost, list what you found, and arrange a safe return once the owner can show the item is theirs.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={links.reportLost} className={`${btn.base} ${btn.primary}`}><SearchX className="h-4 w-4" aria-hidden="true" />Report a lost item</Link>
          <Link href={links.reportFound} className={`${btn.base} ${btn.dark}`}><PackageCheck className="h-4 w-4" aria-hidden="true" />Report a found item</Link>
        </div>
        <p className="mt-4 text-sm text-stone-500">
          Just looking? <Link href={links.listings} className="font-semibold text-orange-700 underline underline-offset-2">Browse listings</Link>
        </p>
      </div>

      {/* Illustrative preview: a lost report and a found report that line up */}
      <div className="relative mx-auto w-full max-w-md" role="img" aria-label="Example of a lost backpack report matched with a found backpack report">
        <ListingCard kind="lost" title="Navy backpack, keychain on zipper" place="Near the terminal, Balanga" when="Lost Saturday morning" Icon={Backpack} className="-rotate-2" />
        <div className="relative z-10 mx-auto -my-1 flex w-fit items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-3 py-1.5 text-sm font-semibold text-orange-800">
          <Link2 className="h-4 w-4" aria-hidden="true" /> Looks like a match
        </div>
        <ListingCard kind="found" title="Navy backpack with a brass keychain" place="Handed in at the barangay hall" when="Found Saturday noon" Icon={KeyRound} className="rotate-1 sm:ml-8" />
        <p className="mt-4 text-center text-xs text-stone-500">Illustrative example, not a real listing.</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Benefits                                                            */
/* ------------------------------------------------------------------ */

function Benefits() {
  return (
    <section id="benefits" className="border-y border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className={`text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl ${display}`}>Lost items rarely stay lost when people can talk to each other.</h2>
          <p className="mt-4 max-w-md text-stone-600">Most lost things end up with someone who has no idea who to give them to. BalikBay gives both sides one shared place to look.</p>
        </div>
        <ul className="divide-y divide-stone-200 lg:col-span-3">
          {benefits.map(({ Icon, title, text }) => (
            <li key={title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-orange-600 text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
                <p className="mt-1 text-stone-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features / product previews (illustrative only)                     */
/* ------------------------------------------------------------------ */

function BrowseMock() {
  const chips = ['All', 'Bags', 'Phones', 'Keys', 'Wallets'];
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-500">
        <Search className="h-4 w-4" aria-hidden="true" /> Black wallet, Balanga
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <span key={c} className={`rounded-md px-3 py-1 text-sm font-medium ${i === 3 ? 'bg-orange-600 text-white' : 'border border-stone-300 bg-white text-stone-700'}`}>{c}</span>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <ListingCard kind="found" title="Black leather wallet" place="Public market" when="Found Friday" Icon={Wallet} />
        <ListingCard kind="lost" title="Phone with green case" place="Jeepney stop" when="Lost Thursday" Icon={Smartphone} />
      </div>
    </div>
  );
}

function DetailMock() {
  return (
    <div className="rounded-xl border border-stone-300 bg-white p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-14 w-14 place-items-center rounded-lg bg-stone-100 text-stone-700"><KeyRound className="h-7 w-7" aria-hidden="true" /></div>
        <div>
          <span className="rounded-md bg-stone-900 px-2 py-0.5 text-xs font-semibold text-white">Found</span>
          <h3 className="mt-1 text-lg font-semibold text-stone-900">Set of 3 keys on a red lanyard</h3>
          <p className="flex items-center gap-1 text-sm text-stone-600"><MapPin className="h-4 w-4" aria-hidden="true" />Outside the church plaza</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-stone-600">Category: Keys. Left on a bench Sunday afternoon and kept safe by the finder.</p>
      <div className="mt-4 rounded-lg border border-orange-300 bg-orange-50 p-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-orange-900"><ShieldQuestion className="h-4 w-4" aria-hidden="true" />Prove it’s yours</p>
        <p className="mt-1 text-sm text-orange-900/80">What is attached to the lanyard besides the keys?</p>
      </div>
    </div>
  );
}

function ReportMock() {
  const field = 'rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-500';
  return (
    <div className="space-y-3 rounded-xl border border-stone-300 bg-white p-5">
      <p className="text-sm font-semibold text-stone-900">New lost item report</p>
      <div className={field}>Item name: Gray umbrella</div>
      <div className={field}>Where did you lose it? Ferry terminal</div>
      <div className="flex items-center gap-2 rounded-lg border border-dashed border-stone-300 px-3 py-4 text-sm text-stone-500"><Camera className="h-4 w-4" aria-hidden="true" />Add a photo</div>
      <div className="rounded-lg bg-orange-600 px-3 py-2.5 text-center text-sm font-semibold text-white">Post report</div>
    </div>
  );
}

const featureRows = [
  { title: 'Search before you scroll', text: 'Filter by category, keyword and place to see only the reports that could be your item.', Mock: BrowseMock },
  { title: 'See the details that matter', text: 'Every listing carries a description, a category, a reported location and a photo when one is available. Finders can keep back one detail for the owner to confirm.', Mock: DetailMock },
  { title: 'Report in a few minutes', text: 'Lost something or found something? Fill in a short form and your report joins the board.', Mock: ReportMock },
];

function Showcase() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className={`max-w-2xl text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl ${display}`}>How BalikBay works</h2>
      <p className="mt-3 max-w-2xl text-stone-600">A quick look at the experience we are building. Screens below are illustrative previews with sample data.</p>

      <div className="mt-12 space-y-16 md:space-y-20">
        {featureRows.map(({ title, text, Mock }, i) => (
          <div key={title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <div className={i % 2 ? 'md:order-2' : ''}>
              <h3 className={`text-2xl font-bold text-stone-900 ${display}`}>{title}</h3>
              <p className="mt-3 max-w-md text-stone-600">{text}</p>
            </div>
            <div className={`rounded-2xl bg-stone-100 p-4 sm:p-6 ${i % 2 ? 'md:order-1' : ''}`} role="img" aria-label={`Illustrative preview: ${title}`}>
              <Mock />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-stone-500">Messaging between finders and owners is described here as the intended flow. Connect it to your real workflow before launch.</p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Community (honest social proof)                                     */
/* ------------------------------------------------------------------ */

function Community() {
  return (
    <section id="community" className="border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className={`max-w-2xl text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl ${display}`}>Built on neighbors looking out for neighbors.</h2>
        <p className="mt-4 max-w-2xl text-stone-600">
          Returning something takes only a few minutes of one person’s day and can make a big difference to someone else’s. BalikBay is new, so the first reports are the ones that start the habit in your community.
        </p>

        {stats.length > 0 && (
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="border-l-4 border-orange-600 pl-4">
                <dd className={`text-3xl font-extrabold text-stone-900 ${display}`}>{s.value}</dd>
                <dt className="text-sm text-stone-600">{s.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {testimonials.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-l-4 border-orange-600 pl-4">
                <blockquote className="text-stone-800">{t.quote}</blockquote>
                <figcaption className="mt-2 text-sm text-stone-600">{t.name}, {t.detail}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final call to action                                                */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="bg-orange-600">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24">
        <h2 className={`text-3xl font-extrabold tracking-tight text-white sm:text-5xl ${display}`}>Help something find its way back today.</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-orange-50">Whether you lost something or picked something up, your report is the first step.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={links.reportLost} className={`${btn.base} bg-white text-orange-700 hover:bg-orange-50 focus-visible:outline-white`}>Report a lost item</Link>
          <Link href={links.reportFound} className={`${btn.base} bg-stone-900 text-white hover:bg-stone-800 focus-visible:outline-white`}>Report a found item</Link>
          <Link href={links.listings} className={`${btn.base} border border-white/70 text-white hover:bg-white/10 focus-visible:outline-white`}>Explore listings</Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const footerColumns = [
  { heading: 'On this page', items: [
    { label: 'Why BalikBay', href: '#benefits' },
    { label: 'How it works', href: '#features' },
    { label: 'Community', href: '#community' },
  ] },
  { heading: 'Platform', items: [
    { label: 'Browse listings', href: links.listings, inertia: true },
    { label: 'Report an item', href: links.reportLost, inertia: true },
    { label: 'Log in', href: links.login, inertia: true },
    { label: 'Register', href: links.register, inertia: true },
  ] },
];

// Privacy Policy, Terms and contact links are left out on purpose.
// Add them here once those pages and real contact details exist.
function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#FBF8F3]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-stone-600">A community lost-and-found platform that helps belongings find their way back to their owners.</p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="text-sm font-semibold text-stone-900">{col.heading}</h2>
            <ul className="mt-3 space-y-2">
              {col.items.map((item) => (
                <li key={item.label}>
                  {item.inertia
                    ? <Link href={item.href} className="text-sm text-stone-600 hover:text-orange-700">{item.label}</Link>
                    : <a href={item.href} className="text-sm text-stone-600 hover:text-orange-700">{item.label}</a>}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="border-t border-stone-200 px-4 py-5 text-center text-sm text-stone-500">© {new Date().getFullYear()} BalikBay. All rights reserved.</p>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Head title="BalikBay: Community Lost & Found">
        <meta name="description" content="Report lost items, post found items and coordinate safe returns with your community." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-stone-900 antialiased">
        <Navbar />
        <main>
          <Hero />
          <Benefits />
          <Showcase />
          <Community />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}