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

interface StatsProps {
    entries: Entry[];
    totalHours: number;
    streak: number;
}

export default function Stats({ entries, totalHours, streak }: StatsProps) {
    // Calculate tags frequency
    const tagCounts: Record<string, number> = {};
    entries.forEach(entry => {
        if (entry.tags) {
            entry.tags.split(',').forEach(tag => {
                const trimmedTag = tag.trim();
                tagCounts[trimmedTag] = (tagCounts[trimmedTag] || 0) + 1;
            });
        }
    });

    const topTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    // Calculate hours by day (last 7 days)
    const last7Days = [...Array(7)].map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return date.toISOString().split('T')[0];
    });

    const hoursByDay = last7Days.map(date => {
        const dayEntries = entries.filter(entry => 
            entry.created_at.split('T')[0] === date
        );
        const hours = dayEntries.reduce((sum, e) => sum + Number(e.hours_coded), 0);
        return { date, hours };
    });

    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 px-8 py-8">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Stats</h1>

                {/* Overview Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
                        <p className="text-4xl font-bold text-blue-600">{entries.length}</p>
                        <p className="text-gray-600">Total Entries</p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
                        <p className="text-4xl font-bold text-blue-600">{totalHours.toFixed(1)}</p>
                        <p className="text-gray-600">Total Hours</p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
                        <p className="text-4xl font-bold text-blue-600">{streak} 🔥</p>
                        <p className="text-gray-600">Day Streak</p>
                    </div>
                </div>

                {/* Hours by Day */}
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Hours Coded (Last 7 Days)</h2>
                    <div className="space-y-2">
                        {hoursByDay.map(({ date, hours }) => {
                            const dayName = new Date(date).toLocaleDateString('en-UK', { weekday: 'short', month: 'short', day: 'numeric' });
                            const barWidth = Math.min((hours / 8) * 100, 100); // Scale to 8 hours max
                            
                            return (
                                <div key={date} className="flex items-center gap-4">
                                    <span className="text-sm text-gray-600 w-24">{dayName}</span>
                                    <div className="flex-1 bg-gray-200 rounded h-8 relative">
                                        <div 
                                            className="bg-blue-500 h-full rounded transition-all"
                                            style={{ width: `${barWidth}%` }}
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                                            {hours.toFixed(1)}h
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Top Tags */}
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Most Used Technologies</h2>
                    {topTags.length === 0 ? (
                        <p className="text-gray-500">No tags yet. Add tags to your entries!</p>
                    ) : (
                        <div className="space-y-3">
                            {topTags.map(([tag, count]) => (
                                <div key={tag} className="flex items-center justify-between">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                    <span className="text-2xl font-bold text-blue-600">{count}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}