
import UserLayout from '../Layouts/UserLayout.jsx'
import {
    FileSearch,
    PackageCheck,
    Clock3,
    CheckCircle2,
    MapPin,
    CalendarDays,
    ArrowRight,
    Plus,
    Search,
    Bell,
    Package,
    MessageCircle,
    Check,
} from 'lucide-react'

const stats = [
    {
        label: 'My Lost Reports',
        value: '04',
        description: 'Items you reported missing',
        icon: FileSearch,
        style: 'bg-orange-100 text-orange-700',
    },
    {
        label: 'My Found Reports',
        value: '08',
        description: 'Items you reported found',
        icon: PackageCheck,
        style: 'bg-stone-100 text-stone-700',
    },
    {
        label: 'Pending Claims',
        value: '02',
        description: 'Waiting for review',
        icon: Clock3,
        style: 'bg-stone-100 text-stone-700',
    },
    {
        label: 'Resolved',
        value: '06',
        description: 'Successfully resolved',
        icon: CheckCircle2,
        style: 'bg-stone-100 text-stone-700',
    },
]

const reports = [
    {
        title: 'Black Leather Wallet',
        type: 'Lost',
        location: 'San Simon Public Market',
        date: 'Oct 26, 2026',
        status: 'Searching',
    },
    {
        title: 'Blue Water Bottle',
        type: 'Found',
        location: 'Barangay Hall',
        date: 'Oct 25, 2026',
        status: 'Claim Pending',
    },
    {
        title: 'Student ID Card',
        type: 'Lost',
        location: 'Near the Town Plaza',
        date: 'Oct 23, 2026',
        status: 'Resolved',
    },
]

const notifications = [
    {
        title: 'New claim received',
        description: 'Someone submitted a claim for your found item.',
        time: '2 hours ago',
        icon: MessageCircle,
    },
    {
        title: 'Report status updated',
        description: 'Your Student ID Card report was resolved.',
        time: 'Yesterday',
        icon: CheckCircle2,
    },
    {
        title: 'New community report',
        description: 'A new item was reported near your area.',
        time: '2 days ago',
        icon: Bell,
    },
]

const statusStyles = {
    Lost: 'bg-orange-600 text-white',
    Found: 'bg-stone-900 text-white',
    Searching: 'bg-orange-50 text-orange-800',
    'Claim Pending': 'bg-stone-100 text-stone-700',
    Resolved: 'bg-stone-100 text-stone-700',
}

const display = "font-['Bricolage_Grotesque',ui-sans-serif,sans-serif]";

export default function Dashboard() {
    return (
        <UserLayout>
            <div className="min-h-screen overflow-x-hidden bg-page text-stone-900 antialiased">
                <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:py-10">

                    {/* Page heading */}
                    <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="mb-2 text-sm font-medium text-orange-700">
                                YOUR COMMUNITY OVERVIEW
                            </p>
                          <h1 className={`font-display text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl ${display}`}>
                                Dashboard
                            </h1>
                            <p className="mt-3 text-stone-600">
                                Keep track of your reports and help items find their way home.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                <Plus className="h-4 w-4" aria-hidden="true" />
                                Report Lost
                            </button>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                <Plus className="h-4 w-4" aria-hidden="true" />
                                Report Found
                            </button>
                        </div>
                    </section>

                    {/* Summary cards */}
                    <section>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-stone-900">
                                Your activity
                            </h2>
                            <span className="text-sm text-stone-500">
                                All reports
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {stats.map((stat) => {
                                const Icon = stat.icon

                                return (
                                    <article
                                        key={stat.label}
                                        className="rounded-xl border border-stone-300 bg-white p-5"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <p className="text-sm font-medium text-stone-600">
                                                    {stat.label}
                                                </p>
                                                <p className="mt-3 font-display text-3xl font-extrabold text-stone-900">
                                                    {stat.value}
                                                </p>
                                            </div>

                                            <div className={`grid h-11 w-11 place-items-center rounded-lg ${stat.style}`}>
                                                <Icon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                        </div>

                                        <p className="mt-3 text-sm text-stone-500">
                                            {stat.description}
                                        </p>
                                    </article>
                                )
                            })}
                        </div>
                    </section>

                    {/* Main content */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                        {/* Recent reports */}
                        <section className="min-w-0 lg:col-span-2">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div>
                                    <h2 className="text-xl font-bold text-stone-900">
                                        Recent reports
                                    </h2>
                                    <p className="mt-1 text-sm text-stone-500">
                                        A quick look at your latest activity.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-orange-700 hover:text-orange-800"
                                >
                                    View all
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-stone-300 bg-white">
                                <div className="divide-y divide-stone-200">
                                    {reports.map((report) => (
                                        <article
                                            key={report.title}
                                            className="flex flex-col gap-3 p-4 transition-colors hover:bg-stone-100 sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <div className="flex min-w-0 items-start gap-3">
                                                <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
                                                    report.type === 'Lost'
                                                        ? 'bg-orange-100 text-orange-700'
                                                        : 'bg-stone-100 text-stone-700'
                                                }`}>
                                                    <Package className="h-5 w-5" aria-hidden="true" />
                                                </div>

                                                <div className="min-w-0">
                                                    <h3 className="truncate text-base font-semibold text-stone-900">
                                                        {report.title}
                                                    </h3>

                                                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone-500">
                                                        <span className="inline-flex items-center gap-1">
                                                            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                                                            {report.location}
                                                        </span>

                                                        <span className="inline-flex items-center gap-1">
                                                            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                                                            {report.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                                                <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyles[report.type]}`}>
                                                    {report.type}
                                                </span>

                                                <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyles[report.status]}`}>
                                                    {report.status}
                                                </span>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                <div className="border-t border-stone-200 p-4 text-center">
                                    <button
                                        type="button"
                                        className="text-sm font-semibold text-stone-700 hover:text-orange-700"
                                    >
                                        See all reports
                                        <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Recent notifications */}
                        <section className="min-w-0">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold text-stone-900">
                                    Notifications
                                </h2>
                                <p className="mt-1 text-sm text-stone-500">
                                    Recent updates from BalikBay.
                                </p>
                            </div>

                            <div className="rounded-xl border border-stone-300 bg-white p-4">
                                <div className="divide-y divide-stone-200">
                                    {notifications.map((notification) => {
                                        const Icon = notification.icon

                                        return (
                                            <article
                                                key={notification.title}
                                                className="flex gap-3 py-4 first:pt-1 last:pb-1"
                                            >
                                                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-stone-100 text-stone-700">
                                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                                </div>

                                                <div className="min-w-0">
                                                    <h3 className="text-sm font-semibold text-stone-900">
                                                        {notification.title}
                                                    </h3>

                                                    <p className="mt-1 text-sm leading-relaxed text-stone-600">
                                                        {notification.description}
                                                    </p>

                                                    <p className="mt-2 text-xs text-stone-500">
                                                        {notification.time}
                                                    </p>
                                                </div>
                                            </article>
                                        )
                                    })}
                                </div>

                                <button
                                    type="button"
                                    className="mt-4 w-full border-t border-stone-200 pt-4 text-center text-sm font-semibold text-stone-700 hover:text-orange-700"
                                >
                                    View all notifications
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Quick actions */}
                    <section className="rounded-2xl bg-stone-100 p-5 sm:p-6">
                        <div className="mb-5">
                            <h2 className="text-xl font-bold text-stone-900">
                                How can we help?
                            </h2>
                            <p className="mt-1 text-sm text-stone-600">
                                Every report brings a missing item one step closer to home.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <article className="flex flex-col justify-between gap-5 rounded-xl border border-orange-300 bg-white p-5">
                                <div>
                                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-orange-100 text-orange-700">
                                        <Search className="h-6 w-6" aria-hidden="true" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-stone-900">
                                        Lost something?
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                                        Tell the community what went missing and where you last saw it.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Report a lost item
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </button>
                            </article>

                            <article className="flex flex-col justify-between gap-5 rounded-xl border border-stone-300 bg-white p-5">
                                <div>
                                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-stone-100 text-stone-700">
                                        <PackageCheck className="h-6 w-6" aria-hidden="true" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-stone-900">
                                        Found something?
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                                        Help reunite an item with its owner by sharing the details.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Report a found item
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </button>
                            </article>
                        </div>
                    </section>

                    {/* Community reminder */}
                    <div className="flex items-start gap-3 rounded-lg border border-orange-300 bg-orange-50 p-4">
                        <div className="mt-0.5 text-orange-700">
                            <Check className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-orange-900">
                                A little kindness goes a long way.
                            </h3>
                            <p className="mt-1 text-sm text-orange-900/80">
                                Keep personal details private and verify ownership before returning an item.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </UserLayout>
    )
}
