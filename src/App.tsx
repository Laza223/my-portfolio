import Body from './components/Body'
import Header from './components/Header'
import "./styles/index.css"

function App() {
  return (
    <>
      <div className="[background-image:url('../public/images/hero.webp')] bg-cover bg-center bg-no-repeat min-h-screen">
        <Header />
        <Body />
      </div>
    </>
  )
}

export default App