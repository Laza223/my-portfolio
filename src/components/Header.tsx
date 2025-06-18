export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-lg bg-[linear-gradient(0deg,_rgba(255,255,255,0),_rgba(0,0,0,1))] h-16">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
          <div className="flex flex-col items-center justify-center">
            <a className="flex flex-col items-center justify-center" href="#home"><span 
              className="text-2xl italic font-medium"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontVariationSettings: '"slnt" -10' 
              }}
            >
              Lazaro Feijoo
            </span>
            <span 
              className="font-light text-xs tracking-widest"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                animation: "pulseOpacity 2s infinite ease-in-out",
                opacity: 0.3
              }}
            >
              DEVELOPER
            </span>
            </a>
          </div>
          
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#home" className="hover:scale-110 hover:text-shadow-[0_0_15px_#fff,0_0_25px_#fff] inline-block px-2 transition-all duration-300">Inicio</a></li>
            <li><a href="#projects" className="hover:scale-110 hover:text-shadow-[0_0_15px_#fff,0_0_25px_#fff] inline-block px-2 transition-all duration-300">Proyectos</a></li>
            <li><a href="#about" className="hover:scale-110 hover:text-shadow-[0_0_15px_#fff,0_0_25px_#fff] inline-block px-2 transition-all duration-300">Sobre mí</a></li>
            <li><a href="#contact" className="hover:scale-110 hover:text-shadow-[0_0_15px_#fff,0_0_25px_#fff] inline-block px-2 transition-all duration-300">Contacto</a></li>
          </ul>
        </nav>
      </div>
      <style>{`
        @keyframes pulseOpacity {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0 }
        }
      `}</style>
    </header>
  );
}