import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Header, Footer } from "./containers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HomeView />
      <DetailView />
      <Footer />
    </div>
  );
}

export default App;
