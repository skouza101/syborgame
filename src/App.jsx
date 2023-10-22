import Footer from "./components/Footer"
import GameLebrary from "./components/GameLebrary"
import Header from "./components/Header"
import MostPopular from "./components/MostPopular"
import Welcome from "./components/Welcome"


const App = () => {
  return (
    <>
    <Header />
    <div className="flex flex-col gap-14 bg-zinc-800 w-full rounded-2xl p-16">
      <Welcome />
      <MostPopular />
      <GameLebrary />
    </div>
    <Footer />
    </>
  )
}

export default App