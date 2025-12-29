import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Body() {
    return (
        <main>
            <section
                id='initial-section'
                className='min-h-screen flex items-center justify-center'
            >
                <div className='w-full flex flex-col md:flex-row items-center justify-around px-4'>
                    <div className='flex flex-col items-start text-center md:text-left'>
                        <h2 className='text-2xl text-[#ffffff71] font-serif'>
                            Hola, soy
                        </h2>

                        <h1 className='text-7xl font-bold text-white'>
                            Lázaro <br /> Feijoo
                        </h1>

                        <h3
                            className='text-[#2ecbbf] italic text-2xl mt-4'
                            style={{
                                fontFamily: '"Cormorant Garamond", serif',
                            }}
                        >
                            FullStack Developer
                        </h3>

                        <p
                            className='text-white text-base mt-4 max-w-md'
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Transformando ideas en realidad a través de código
                            limpio y soluciones innovadoras
                        </p>

                        <div className='flex items-center gap-4 mt-8'>
                            <button className='flex items-center gap-2 px-6 py-2 rounded-full border border-white text-white bg-transparent transition duration-300 hover:shadow-[0_0_15px_#1aaa93] cursor-pointer'>
                                Descargar CV
                            </button>

                            <a
                                href='https://github.com/tu-usuario'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-white transition duration-300 hover:scale-125 text-2xl'
                            >
                                <FaGithub />
                            </a>

                            <a
                                href='https://linkedin.com/in/tu-usuario'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-white transition duration-300 hover:scale-125 text-2xl'
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div>
                        <img
                            src=''
                            alt='Hero Image'
                            className='w-96 h-96 object-cover rounded-full shadow-lg'
                        />
                    </div>
                </div>
            </section>

            <section id='about-me' className='py-20 '>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='flex flex-col md:flex-row gap-12 items-center'>
                        <div className='w-full md:w-1/3 flex justify-center'>
                            <div className='relative group w-64 h-64'>
                                <img
                                    src='../public/images/foto-about-me.png'
                                    alt='Lázaro Feijoo'
                                    className='w-full h-full object-cover rounded-full shadow-lg drop-shadow-[0_0_15px_#2ecbbf]'
                                />
                            </div>
                        </div>

                        <div className='w-full md:w-2/3'>
                            <h2 className='text-3xl font-bold text-white mb-6'>
                                <span className='text-[#2ecbbf]'>/</span> ¿Quién
                                soy?
                            </h2>

                            <div className='space-y-6'>
                                <p className='text-[#ccd6f6] leading-relaxed'>
                                    Soy{' '}
                                    <span className='text-[#2ecbbf]'>
                                        Lázaro Feijoo
                                    </span>
                                    , un apasionado desarrollador FullStack con
                                    más de X años de experiencia creando
                                    soluciones digitales innovadoras. Mi enfoque
                                    combina el arte del diseño con la precisión
                                    de la ingeniería de software.
                                </p>

                                <p className='text-[#ccd6f6] leading-relaxed'>
                                    Especializado en el ecosistema JavaScript,
                                    tengo experiencia trabajando con{' '}
                                    <span className='text-[#2ecbbf]'>
                                        React
                                    </span>
                                    ,{' '}
                                    <span className='text-[#2ecbbf]'>
                                        Node.js
                                    </span>{' '}
                                    y{' '}
                                    <span className='text-[#2ecbbf]'>
                                        bases de datos
                                    </span>{' '}
                                    modernas. Disfruto transformando ideas
                                    complejas en interfaces intuitivas y
                                    funcionales.
                                </p>

                                <p className='text-[#ccd6f6] leading-relaxed'>
                                    Cuando no estoy codificando, me encontrarás
                                    explorando nuevas tecnologías, contribuyendo
                                    a proyectos open source o disfrutando de una
                                    buena taza de café mientras aprendo algo
                                    nuevo.
                                </p>
                            </div>

                            <div className='mt-10'>
                                <h3 className='text-xl text-white mb-4'>
                                    Tecnologías que domino:
                                </h3>
                                <div className='flex flex-wrap gap-3'>
                                    {[
                                        'JavaScript',
                                        'TypeScript',
                                        'React',
                                        'Node.js',
                                        'Express',
                                        'MongoDB',
                                        'PostgreSQL',
                                        'Git',
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className='px-4 py-2 text-[#2ecbbf] rounded-md text-sm font-mono'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='skills' className='py-20'>
                <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-transparent border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm transition hover:scale-105 hover:shadow-lg'>
                        <div className='w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border border-white/10'></div>
                        <h3 className='text-white text-lg font-semibold uppercase tracking-wide'>
                            FullStack Developer
                        </h3>
                        <p className='text-sm text-white/80 mt-2 leading-relaxed'>
                            Desarrollo de aplicaciones web completas, del
                            frontend al backend, utilizando tecnologías modernas
                            y buenas prácticas de desarrollo.
                        </p>
                    </div>

                    <div className='bg-transparent border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm transition hover:scale-105 hover:shadow-lg'>
                        <div className='w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border border-white/10'></div>
                        <h3 className='text-white text-lg font-semibold uppercase tracking-wide'>
                            Tecnologías
                        </h3>
                        <p className='text-sm text-white/80 mt-2 leading-relaxed'>
                            Stack de herramientas y lenguajes de desarrollo
                            orientados a la eficiencia, rendimiento y
                            escalabilidad en soluciones digitales.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
