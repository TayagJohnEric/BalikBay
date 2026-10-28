
import UserLayout from '../../Layouts/UserLayout.jsx'
import {
    Search,
    MapPin,
    CalendarDays,
    SlidersHorizontal,
    ChevronLeft,
    ChevronRight,
    Package,
} from 'lucide-react'

const reports = [
    {
        id: 1,
        title: 'Black Leather Wallet',
        category: 'Wallets & Money',
        description:
            'A black leather wallet containing personal cards. Last seen near the public market.',
        location: 'Public Market',
        date: 'October 25, 2026',
        type: 'Lost',
        status: 'Open',
        image:
            'https://placehold.co/600x400/FBF8F3/57534e?text=Black+Wallet',
        alt: 'Black leather wallet',
    },
    {
        id: 2,
        title: 'Gray School Backpack',
        category: 'Bags',
        description:
            'A gray backpack found near a waiting shed. The owner may identify its contents.',
        location: 'Near the Waiting Shed',
        date: 'October 24, 2026',
        type: 'Found',
        status: 'Open',
        image:
            'https://placehold.co/600x400/FBF8F3/57534e?text=Found+Backpack',
        alt: 'Gray school backpack',
    },
]

const categories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'wallets', label: 'Wallets & Money' },
    { value: 'bags', label: 'Bags' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'documents', label: 'IDs & Documents' },
    { value: 'other', label: 'Other' },
]

const tabs = ['All Items', 'Lost Items', 'Found Items']

const display = "font-['Bricolage_Grotesque',ui-sans-serif,sans-serif]";

export default function Index() {
    return (
        <UserLayout>
            <div className="min-h-screen overflow-x-hidden bg-page text-stone-900 antialiased">
                <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:py-10">

                    {/* Page heading */}
                    <section>
                        <p className="mb-2 text-sm font-semibold text-orange-700">
                            COMMUNITY LISTINGS
                        </p>

                        <h1 className= {`font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-stone-900 sm:text-5xl ${display}`}>
                            Lost & Found Items
                        </h1>

                        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
                            Help reunite lost belongings with their owners.
                            Browse reports from your community and see what
                            items have been reported.
                        </p>
                    </section>

                    {/* Search */}
                    <section className="space-y-4">
                        <label
                            htmlFor="item-search"
                            className="text-sm font-semibold text-stone-900"
                        >
                            Search reports
                        </label>

                        <div className="flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-500 focus-within:border-orange-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange-600">
                            <Search
                                className="h-4 w-4 shrink-0"
                                aria-hidden="true"
                            />

                            <input
                                id="item-search"
                                type="search"
                                placeholder="Search lost or found items..."
                                className="w-full border-0 bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-500"
                            />
                        </div>

                        {/* Tabs */}
                        <div
                            className="flex gap-2 overflow-x-auto pb-1"
                            aria-label="Report categories"
                        >
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    type="button"
                                    className={`shrink-0 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                                        index === 0
                                            ? 'bg-orange-600 text-white'
                                            : 'border border-stone-300 bg-white text-stone-700 hover:border-stone-900'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Filters */}
                    <section className="rounded-xl border border-stone-300 bg-white p-4 sm:p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <SlidersHorizontal
                                className="h-5 w-5 text-stone-700"
                                aria-hidden="true"
                            />

                            <h2 className="text-base font-semibold text-stone-900">
                                Filter reports
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label
                                    htmlFor="category-filter"
                                    className="text-sm font-semibold text-stone-900"
                                >
                                    Category
                                </label>

                                <select
                                    id="category-filter"
                                    defaultValue=""
                                    className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 focus:border-orange-600 focus:outline-2 focus:outline-offset-2 focus:outline-orange-600"
                                >
                                    <option value="">All Categories</option>

                                    {categories.map((category) => (
                                        <option
                                            key={category.value}
                                            value={category.value}
                                        >
                                            {category.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="date-filter"
                                    className="text-sm font-semibold text-stone-900"
                                >
                                    Date reported
                                </label>

                                <input
                                    id="date-filter"
                                    type="date"
                                    className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 focus:border-orange-600 focus:outline-2 focus:outline-offset-2 focus:outline-orange-600"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Results heading */}
                    <section className="space-y-5">
                        <div className="flex flex-wrap items-end justify-between gap-3">
                            <div>
                                <h2 className="font-display text-2xl font-bold text-stone-900">
                                    Recent reports
                                </h2>

                                <p className="mt-2 text-sm text-stone-600">
                                    Browse recently reported lost and found items.
                                </p>
                            </div>

                            <span className="rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-700">
                                {reports.length} reports
                            </span>
                        </div>

                        {/* Listing cards */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {reports.map((report) => (
                                <article
                                    key={report.id}
                                    className={`relative flex flex-col rounded-xl border bg-white p-4 pt-6 shadow-sm ${
                                        report.type === 'Lost'
                                            ? 'border-orange-300'
                                            : 'border-stone-300'
                                    }`}
                                >
                                    {/* Decorative listing tag hole */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-stone-300 bg-page"
                                    />

                                    {/* Item image */}
                                    <div className="relative mt-1 aspect-[3/2] overflow-hidden rounded-lg bg-stone-100">
                                        <img
                                            src={report.image}
                                            alt={report.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />

                                        <span
                                            className={`absolute left-3 top-3 inline-block rounded-md px-2 py-0.5 text-xs font-semibold ${
                                                report.type === 'Lost'
                                                    ? 'bg-orange-600 text-white'
                                                    : 'bg-stone-900 text-white'
                                            }`}
                                        >
                                            {report.type}
                                        </span>

                                        <span className="absolute right-3 top-3 inline-block rounded-md border border-stone-200 bg-white px-2 py-0.5 text-xs font-semibold text-stone-700">
                                            {report.status}
                                        </span>
                                    </div>

                                    {/* Item details */}
                                    <div className="flex flex-1 flex-col gap-4 pt-4">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-orange-700">
                                                {report.category}
                                            </p>

                                            <h3 className="mt-1 text-lg font-semibold text-stone-900">
                                                {report.title}
                                            </h3>

                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">
                                                {report.description}
                                            </p>
                                        </div>

                                        <dl className="space-y-2 border-t border-stone-200 pt-3">
                                            <div className="flex items-center gap-2 text-sm text-stone-600">
                                                <MapPin
                                                    className="h-4 w-4 shrink-0"
                                                    aria-hidden="true"
                                                />
                                                <dt className="sr-only">
                                                    Location
                                                </dt>
                                                <dd>{report.location}</dd>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-stone-600">
                                                <CalendarDays
                                                    className="h-4 w-4 shrink-0"
                                                    aria-hidden="true"
                                                />
                                                <dt className="sr-only">
                                                    Date reported
                                                </dt>
                                                <dd>{report.date}</dd>
                                            </div>
                                        </dl>

                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition-colors hover:border-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                        >
                                            <Package
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                            View details
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination placeholder */}
                        <nav
                            aria-label="Pagination"
                            className="flex flex-wrap items-center justify-center gap-2 pt-4"
                        >
                            <button
                                type="button"
                                disabled
                                className="inline-flex items-center gap-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-500 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <ChevronLeft
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                                Previous
                            </button>

                            <button
                                type="button"
                                aria-current="page"
                                className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                1
                            </button>

                            <button
                                type="button"
                                className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                2
                            </button>

                            <button
                                type="button"
                                className="inline-flex items-center gap-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-900 transition-colors hover:border-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Next
                                <ChevronRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </button>
                        </nav>
                    </section>
                </div>
            </div>
        </UserLayout>
    )
}
