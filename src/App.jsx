import Contacts from "./components/Contacts";
import Description from "./components/Description";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import SimpleSlider from "./components/SimpleSlider";

function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <SimpleSlider />
        <Reviews />
        <Contacts />
      </main>
      <footer>
        <p></p>
        <div></div>
      </footer>
    </>
  );
}

export default App;
