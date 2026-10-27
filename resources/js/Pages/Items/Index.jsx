import UserLayout from '../../Layouts/UserLayout.jsx'
import { Search, MapPin, CalendarDays, SlidersHorizontal } from 'lucide-react'

export default function Index() {
    return (
        <UserLayout>
            {/* Container: centers the page and adds side spacing.
                If UserLayout already has a container, remove max-w-7xl and px-* */}
            <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

                {/* Page Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Lost & Found Items
                    </h1>
                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                        Help reunite lost belongings with their owners.
                    </p>
                </div>

                {/* Search Input */}
                <div className="relative">
                    <Search
                        size={20}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search lost or found items..."
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                </div>

                {/* Tabs (scrollable on small screens) */}
                <div className="flex overflow-x-auto border-b border-gray-200">
                    <button
                        type="button"
                        className="whitespace-nowrap border-b-2 border-orange-500 px-4 py-3 text-sm font-semibold text-orange-600"
                    >
                        All Items
                    </button>

                    <button
                        type="button"
                        className="whitespace-nowrap border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 transition hover:text-orange-600"
                    >
                        Lost Items
                    </button>

                    <button
                        type="button"
                        className="whitespace-nowrap border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 transition hover:text-orange-600"
                    >
                        Found Items
                    </button>
                </div>

                {/* Filters: stacked on phone, in one row on desktop */}
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                        <SlidersHorizontal size={18} />
                        <span>Filters</span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-xl lg:flex-1">
                        {/* Category Filter */}
                        <select
                            defaultValue=""
                            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                        >
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="wallets">Wallets & Money</option>
                            <option value="bags">Bags</option>
                            <option value="clothing">Clothing</option>
                            <option value="documents">IDs & Documents</option>
                            <option value="other">Other</option>
                        </select>

                        {/* Date Filter */}
                        <input
                            type="date"
                            aria-label="Filter by date"
                            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                        />
                    </div>
                </div>

                {/* Results Heading */}
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            Recent Reports
                        </h2>
                        <p className="mt-0.5 text-sm text-gray-500">
                            Browse recently reported lost and found items.
                        </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                        2 reports
                    </span>
                </div>

                {/* Item Cards: 1 column on phone, 2 on tablet, 3 on desktop */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

                    {/* Card 1 */}
                    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="relative aspect-[3/2] bg-gray-100">
                            <img
                                src="https://placehold.co/600x400/f3f4f6/9ca3af?text=Black+Wallet"
                                alt="Black leather wallet"
                                className="h-full w-full object-cover"
                            />

                            <span className="absolute left-3 top-3 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                                Lost
                            </span>

                            <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700">
                                Open
                            </span>
                        </div>

                        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
                            <div className="flex-1">
                                <p className="text-xs font-medium text-orange-600">
                                    Wallets & Money
                                </p>
                                <h3 className="mt-1 text-base font-semibold text-gray-900">
                                    Black Leather Wallet
                                </h3>
                                <p className="mt-1.5 line-clamp-2 text-sm text-gray-500">
                                    A black leather wallet containing personal
                                    cards. Last seen near the public market.
                                </p>
                            </div>

                            <div className="space-y-2 border-t border-gray-100 pt-3">
                                <p className="flex items-center gap-2 text-sm text-gray-500">
                                    <MapPin size={16} className="shrink-0" />
                                    Public Market
                                </p>
                                <p className="flex items-center gap-2 text-sm text-gray-500">
                                    <CalendarDays size={16} className="shrink-0" />
                                    October 25, 2026
                                </p>
                            </div>

                            <button
                                type="button"
                                className="w-full rounded-lg border border-orange-500 px-4 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
                            >
                                View Details
                            </button>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="relative aspect-[3/2] bg-gray-100">
                            <img
                                src="https://placehold.co/600x400/f3f4f6/9ca3af?text=Found+Backpack"
                                alt="Gray backpack"
                                className="h-full w-full object-cover"
                            />

                            <span className="absolute left-3 top-3 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                Found
                            </span>

                            <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700">
                                Open
                            </span>
                        </div>

                        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
                            <div className="flex-1">
                                <p className="text-xs font-medium text-orange-600">
                                    Bags
                                </p>
                                <h3 className="mt-1 text-base font-semibold text-gray-900">
                                    Gray School Backpack
                                </h3>
                                <p className="mt-1.5 line-clamp-2 text-sm text-gray-500">
                                    A gray backpack found near a waiting shed.
                                    The owner may identify its contents.
                                </p>
                            </div>

                            <div className="space-y-2 border-t border-gray-100 pt-3">
                                <p className="flex items-center gap-2 text-sm text-gray-500">
                                    <MapPin size={16} className="shrink-0" />
                                    Near the Waiting Shed
                                </p>
                                <p className="flex items-center gap-2 text-sm text-gray-500">
                                    <CalendarDays size={16} className="shrink-0" />
                                    October 24, 2026
                                </p>
                            </div>

                            <button
                                type="button"
                                className="w-full rounded-lg border border-orange-500 px-4 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
                            >
                                View Details
                            </button>
                        </div>
                    </article>

                </div>

                {/* Pagination Placeholder */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                    <button
                        type="button"
                        disabled
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-400"
                    >
                        Previous
                    </button>

                    <button
                        type="button"
                        className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white"
                    >
                        1
                    </button>

                    <button
                        type="button"
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
                    >
                        2
                    </button>

                    <button
                        type="button"
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>

            </div>
        </UserLayout>
    )
}