import Header from "./Componentes/Header";
import Main   from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import Carusell from "./Componentes/Carusell";
import Container from "./Componentes/Container";

function App() {
  return (
    <div className="flex flex-col space-y-8">
      <Header/>
      <Carusell/>
      <Main/>
      <Container/>
      <Footer/>
    </div>
  )  
}

export default App;
