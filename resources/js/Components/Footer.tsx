

export default function Footer() {

  return (
    <footer className="mt-auto">
        <div className="py-6 bg-[#7EB1C2] text-white/80">
        <div className="mx-auto max-w-[1200px] px-2">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2>Dev Diary</h2>
                <nav className="sm:pt-0 pt-4">
                    <h2 className="uppercase tracking-widest mb-2">Navigate</h2> 
                    <ul className="text-sm">
                        <li><a href="/">Home</a></li>
                        <li><a href="/stats">Stats</a></li> 
                    </ul>
                </nav>
            </div>
        </div>
        </div>
        <div className="bg-[#08688e] text-white/50 text-sm py-2">
            <div className="mx-auto max-w-[1200px] px-2">
                <p>© Copyright {new Date().getFullYear()} Níon Ross Geraghty</p>
            </div>
        </div>
        </footer>
  )
}