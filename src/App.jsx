import Description from "./components/Description";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="react-slick"></div>
        <Description />
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
