import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useState } from "react";

export default function NewEntry() {
    const [titleText, setTitleText] = useState("");
    const [contentText, setContentText] = useState("");

    const handleClick = () => {
        // Handle saving the entry here
        if (titleText === "" || contentText === "") {
            alert("Please fill in both the title and content fields.");
            return;
        }

        console.log("Title:", titleText);
        console.log("Content:", contentText);
    };

    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center py-8 px-4">
    <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">New Entry</h1>
        
        <input 
            type="text" 
            value={titleText} 
            onChange={(e) => setTitleText(e.target.value)} 
            placeholder="Title" 
            className="w-full p-3 mb-4 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white" 
        />
        
        <textarea 
            value={contentText} 
            onChange={(e) => setContentText(e.target.value)} 
            placeholder="What did you work on today?" 
            className="w-full p-3 mb-4 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg h-64 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white"
            onKeyDown={(e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                    handleClick();
                }
            }}>
        </textarea>
        
        <button 
            onClick={handleClick} 
            className="w-full px-6 py-3 bg-blue-400 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
        >
            Save Entry
        </button>
    </div>
</main>

            <Footer />
        </div>
    );
}