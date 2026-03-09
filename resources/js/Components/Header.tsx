import {router, usePage} from '@inertiajs/react';

export default function Header() {
    const { authenticated } = usePage().props;
    console.log('authenticated:', authenticated);
    
    const handleLogout = () => {
        router.post('/logout');
    };
    
    return (
        <header className="flex items-center py-4 px-8">
            <a href="/" className="text-4xl font-bold mr-auto">Dev Diary</a>
            <div className="flex gap-6 text-2xl items-center">
                <a href="/new-entry" className="hover:text-blue-600">New Entry</a>
                <a href="/entries" className="hover:text-blue-600">View Entries</a>
                <a href="/stats" className="hover:text-blue-600">Stats</a>
                
                {authenticated ? (
                    <button 
                        onClick={handleLogout}
                        className="px-4 py-2 border-2 border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"
                    >
                        Logout
                    </button>
                ) : (
                    <a 
                        href="/login"
                        className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
                    >
                        Login
                    </a>
                )}
            </div>
        </header>
    );
}