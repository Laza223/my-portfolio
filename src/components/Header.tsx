export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">Lazaro Feijoo</div>
        <ul className="flex gap-6 text-sm text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition-colors">Inicio</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors">Proyectos</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">Sobre mí</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
