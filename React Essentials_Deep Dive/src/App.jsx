import Header from "./components/Header.jsx";
import CoreConcepts from "./components/coreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Input from "./components/Input.jsx";

function App() {

  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
