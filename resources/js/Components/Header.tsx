

export default function Header() {
    return (
        <header className="flex items-center py-4 px-8">
            <a href="/" className="text-4xl font-bold mr-auto">Dev Diary</a>
            <div className="flex gap-6 text-2xl">
                <a href="/new-entry" className="hover:text-blue-600">New Entry</a>
                <a href="/entries" className="hover:text-blue-600">View Entries</a>
                <a href="/stats" className="hover:text-blue-600">Stats</a>
            </div>
        </header>
    );
}