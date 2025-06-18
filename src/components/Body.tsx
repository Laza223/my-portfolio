import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Body() {
    return (
        <main>
            <section id="home" className="min-h-screen flex items-center justify-center">
                <div className="w-full flex flex-col md:flex-row items-center justify-around px-4">
                    <div className="flex flex-col items-start text-center md:text-left">
                        <h2 className="text-2xl text-white font-semibold">Hola, soy</h2>

                        <h1 className="text-7xl font-bold text-white">
                            Lázaro <br /> Feijoo
                        </h1>

                        <h3 className="text-[#2ecbbf] italic text-2xl mt-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                            FullStack Developer
                        </h3>

                        <p className="text-white text-base mt-4 max-w-md" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Transformando ideas en realidad a través de código limpio y soluciones innovadoras
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white text-white bg-transparent transition duration-300 hover:shadow-[0_0_15px_#1aaa93] cursor-pointer">
                                Descargar CV
                            </button>
                            
                            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" 
                               className="text-white hover:text-white transition duration-300 hover:scale-125 text-2xl">
                                <FaGithub />
                            </a>
                            
                            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" 
                               className="text-white hover:text-white transition duration-300 hover:scale-125 text-2xl">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div>
                        <img src="" alt="Hero Image" className="w-96 h-96 object-cover rounded-full shadow-lg" />
                    </div>
                </div>
            </section>
        </main>
    );
}