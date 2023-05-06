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
        <section className="examples"></section>
        <section className="contact"></section>
      </main>
      <footer>
        <p></p>
        <div></div>
      </footer>
    </>
  );
}

export default App;
