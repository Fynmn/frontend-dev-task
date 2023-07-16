import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
