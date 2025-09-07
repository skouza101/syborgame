import Footer from "./components/Footer"
import GameLibrary from "./components/GameLibrary"
import Header from "./components/Header"
import MostPopular from "./components/MostPopular"
import Welcome from "./components/Welcome"
import Layout from "./components/Container";

const App = () => {
  return (
    <Layout>
      <Welcome />
      <MostPopular />
      <GameLibrary />
    </Layout>
  )
}

export default App
