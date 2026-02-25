

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function HomePage() {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {<p>Here there be dragons</p>}
            </main>

            <Footer />
        </div>
    );
}