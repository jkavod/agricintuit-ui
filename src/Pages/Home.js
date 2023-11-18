import { Hero, Body, Footer, Header } from "../UI";
import { Cookies, StaticButton } from "../Constants";

function App() {
  return (
    <div className="App">
      <div className="px-[20px]">
        <Header />
        <Hero />
        <Body />
      </div>
      <Footer />
      <StaticButton />
      <Cookies />
    </div>
  );
}

export default App;
