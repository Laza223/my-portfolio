import Body from './components/Body';
import Header from './components/Header';
import "./styles/index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Primer fondo (parte superior) */}
      <div 
        className="flex-1 w-full" // Ocupa el resto del espacio disponible
        style={{
          backgroundImage: "url('/images/bg-web.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Body />
      </div>
      {/* Segundo fondo (resto de la página) */}
      <div 
        className="flex-1 w-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
      </div>

    </div>
  );
}

export default App;