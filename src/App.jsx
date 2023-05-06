import Contacts from "./components/Contacts";
import Description from "./components/Description";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
