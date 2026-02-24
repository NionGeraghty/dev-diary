

export default function HomePage() {
    return (
        <div className="bg-blue-100 min-h-screen">
            <header className="flex items-center py-4 px-8">
                <a href="/" className="text-4xl font-bold mr-auto">Dev Diary</a>
                <div className="flex gap-6 text-2xl">
                    <a href="/entries/create" className="hover:text-blue-600">New Entry</a>
                    <a href="/entries" className="hover:text-blue-600">View Entries</a>
                    <a href="/stats" className="hover:text-blue-600">Stats</a>
                </div>
            </header>
        </div>
    );
}