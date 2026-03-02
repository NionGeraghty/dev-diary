import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useForm } from "@inertiajs/react"; 

export default function NewEntry() {
    //const [titleText, setTitleText] = useState("");
    //const [contentText, setContentText] = useState("");
    //const [hoursCoded, setHoursCoded] = useState("");    

    const {data, setData, post, processing, errors} = useForm({
        title: "",
        body: "",
        hours_coded: "",
        tags: "",
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        post("/entries");
    };

    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center py-8 px-4">
    <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">New Entry</h1>
        
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={data.title} 
            onChange={(e) => setData("title", e.target.value)} 
            placeholder="Title" 
            className="w-full p-3 mb-4 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white" 
        />
        {errors.title && <p className="text-red-600 text-sm mb-2">{errors.title}</p>}

        <input 
            type="number" 
            value={data.hours_coded} 
            onChange={(e) => setData("hours_coded", e.target.value)} 
            placeholder="How many hours did you code today?" 
            className="w-full p-3 mb-4 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white" 
        />
        {errors.hours_coded && <p className="text-red-600 text-sm mb-2">{errors.hours_coded}</p>}
        
        <textarea 
            value={data.body} 
            onChange={(e) => setData("body", e.target.value)} 
            placeholder="What did you work on today?" 
            className="w-full p-3 mb-4 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg h-64 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white"
            onKeyDown={(e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                    e.preventDefault();
                    post("/entries");
                }
            }}>
        </textarea>
        {errors.body && <p className="text-red-600 text-sm mb-2">{errors.body}</p>}

        <input 
            type="text" 
            value={data.tags} 
            onChange={(e) => setData("tags", e.target.value)} 
            placeholder="Tags (comma separated)" 
            className="w-full p-3 mb-4 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white" 
        />
        {errors.tags && <p className="text-red-600 text-sm mb-2">{errors.tags}</p>}
        
        <button 
            type="submit"
            disabled={processing}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50"
        >
            {processing ? 'Saving...' : 'Save Entry'}
        </button>
        </form>
    </div>
</main>

            <Footer />
        </div>
    );
}