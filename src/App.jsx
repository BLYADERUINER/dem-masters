import Description from "./components/Description";
import Header from "./components/Header";
import SimpleSlider from "./components/SimpleSlider";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="react-slick"></div>
        <Description />
        <SimpleSlider />
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
