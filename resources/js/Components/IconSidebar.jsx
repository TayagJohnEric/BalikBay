
import {
    LayoutDashboard,
    Search,
    PlusCircle,
    FileText,
    Bell,
    ClipboardCheck,
    Undo2,
} from 'lucide-react'

export default function IconSidebar() {
    const items = [
        { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { key: 'browse', label: 'Browse Reports', icon: Search },
        { key: 'create', label: 'Create Reports', icon: PlusCircle },
        { key: 'mine', label: 'My Reports', icon: FileText },
        { key: 'notifications', label: 'Notifications', icon: Bell },
        { key: 'claims', label: 'Claims', icon: ClipboardCheck },
    ]

    const activeKey = 'dashboard'

    return (
        <aside className="sticky top-0 flex h-screen w-16 shrink-0 flex-col items-center border-r border-stone-200 bg-white py-4">

            {/* Logo */}
            <a
                href="#"
                aria-label="BalikBay home"
                className="grid h-8 w-8 place-items-center rounded-lg bg-orange-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
                <Undo2 className="h-5 w-5" aria-hidden="true" />
            </a>

            <div className="my-4 h-px w-8 bg-stone-200" />

            {/* Navigation */}
            <nav aria-label="Main">
                <ul className="flex flex-col items-center gap-2">
                    {items.map((item) => {
                        const Icon = item.icon
                        const active = item.key === activeKey

                        return (
                            <li key={item.key} className="group relative">
                                <a
                                    href="#"
                                    aria-current={active ? 'page' : undefined}
                                    aria-label={item.label}
                                    className={`relative grid h-11 w-11 place-items-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                                        active
                                            ? 'bg-orange-600 text-white'
                                            : 'text-stone-600 hover:bg-stone-100 hover:text-orange-700'
                                    }`}
                                >
                                    <Icon className="h-5 w-5" aria-hidden="true" />

                                </a>

                                {/* Hover tooltip */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute left-full top-1/2 z-40 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-stone-900 px-2 py-0.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                                >
                                    {item.label}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}
