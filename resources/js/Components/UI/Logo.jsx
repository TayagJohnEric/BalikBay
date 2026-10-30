import { Undo2 } from 'lucide-react';

/* Logo from the design tokens: orange icon box + display-font name.
   - showName:      false = icon box only (collapsed sidebar)
   - nameClassName: extra classes for the name, e.g. 'hidden sm:inline' */
export default function Logo({ name = 'Your App', showName = true, nameClassName = '' }) {
    return (
        <span className="font-display flex items-center gap-2 text-xl font-extrabold text-stone-900">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-600 text-white">
                <Undo2 className="h-5 w-5" aria-hidden="true" />
            </span>
            {showName && <span className={`truncate ${nameClassName}`}>{name}</span>}
        </span>
    );
}