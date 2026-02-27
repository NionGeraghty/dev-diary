

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function HomePage() {
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
                    
                    {/* Stats section - you'll make this dynamic later */}
                    <div className="grid grid-cols-3 gap-4 mb-8 bg-white/50 backdrop-blur-sm rounded-lg p-6">
                        <div>
                            <p className="text-3xl font-bold text-blue-400">0</p>
                            <p className="text-sm text-gray-600">Total Entries</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-400">0</p>
                            <p className="text-sm text-gray-600">Hours Coded</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-400">0</p>
                            <p className="text-sm text-gray-600">Day Streak</p>
                        </div>
                    </div>

                    <a 
                        href="/entries/create" 
                        className="inline-block px-8 py-4 bg-blue-400 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                        Create Your First Entry
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}