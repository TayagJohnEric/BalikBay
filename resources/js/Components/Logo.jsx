import { Undo2 } from 'lucide-react';

/**
 * BalikBay logo. Pass `compact` to hide the wordmark below the sm breakpoint
 * (useful in crowded mobile headers).
 */
export default function Logo({ compact = false }) {
    return (
        <span className="font-display flex items-center gap-2 text-xl font-extrabold text-stone-900">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-600 text-white">
                <Undo2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className={compact ? 'hidden sm:inline' : undefined}>BalikBay</span>
        </span>
    );
}