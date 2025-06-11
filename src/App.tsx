import Header from './components/Header'
import "./styles/index.css"

function App() {
  return (
    <>
    <title>Lazaro Feijoo - Portfolio</title>
    <div className="[background-image:url('../public/images/bg-web.webp')] bg-cover bg-center bg-no-repeat min-h-screen">
      <Header />

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Bienvenido a mi portfolio</h1>
        </section>
      </main>
      </div>
    </>
  )
}

export default App