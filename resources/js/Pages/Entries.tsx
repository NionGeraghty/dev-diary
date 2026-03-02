

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

interface EntriesProps {
    entries: Entry[];
}

export default function Entries({ entries }: EntriesProps) {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 px-8 py-8">
                <h1 className="text-3xl font-bold mb-6">All Entries</h1>
                
                {entries.length === 0 ? (
                    <p>No entries yet. Create your first one!</p>
                ) : (
                    <div className="space-y-4">
                        {entries.map(entry => (
                            <div key={entry.id} className="bg-white/70 backdrop-blur-sm p-6 rounded-lg">
                                <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
                                <p className="text-gray-700 mb-2">{entry.body}</p>
                                <p className="text-sm text-gray-600">Hours: {entry.hours_coded}</p>
                                {entry.tags && <p className="text-sm text-blue-600">{entry.tags}</p>}
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}