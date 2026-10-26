
export default function Home() {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
                <h1 className="text-3xl font-bold text-emerald-600">
                    Hello from React!
                </h1>

                <p className="mt-3 text-slate-600">
                    Laravel, Inertia, React, and Tailwind are working.
                </p>

                <button className="mt-6 rounded-lg bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700">
                    Test Button
                </button>
            </div>
        </div>
    );
}
