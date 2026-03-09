import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        password: '',
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6">Dev Diary Login</h1>
                
                {errors.password && (
                    <p className="text-red-600 mb-4">{errors.password}</p>
                )}
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Enter password"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                    />
                    
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-700"
                    >
                        {processing ? 'Checking...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}