

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

interface Entry {
    id: number;
    title: string;
    body: string;
    hours_coded: number;
    tags: string | null;
    created_at: string;
    updated_at: string;
}

interface HomePageProps {
    entries: Entry[];
    streak: number;
}

export default function HomePage({ entries, streak }: HomePageProps) {

    const hasEntryToday = entries.some(entry => {
        const entryDate = new Date(entry.created_at).toDateString();
        const today = new Date().toDateString();
        return entryDate === today;
    });

    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center px-4">
                <div className="text-center max-w-2xl">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Welcome to Dev Diary
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Track your coding journey, one entry at a time
                    </p>

                    {/* Stats section */}
                    <div className="grid grid-cols-3 gap-4 mb-8 bg-white/50 backdrop-blur-sm rounded-lg p-6">
                        <div>
                            <p className="text-3xl font-bold text-blue-400">{entries.length}</p>
                            <p className="text-sm text-gray-600">Total Entries</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-400">{entries.reduce((total, entry) => total + entry.hours_coded, 0)}</p>
                            <p className="text-sm text-gray-600">Hours Coded</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-400">{streak}</p>
                            <p className="text-sm text-gray-600">Day Streak</p>
                            {!hasEntryToday && (
                                <p className="text-xs text-red-500 mt-1">⚠️ No entry today yet!</p>
                            )}
                        </div>
                    </div>

                    <a
                        href="/new-entry"
                        className="inline-block px-8 py-4 bg-blue-400 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                        {entries.length === 0 ? "Create Your First Entry" : "Add New Entry"}
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}