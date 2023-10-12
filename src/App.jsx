// import WIP from './components/WIP';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './screens/Home.jsx';
import About from './screens/About.jsx';
import Experience from './screens/Experience.jsx';
// import BlurMousePointer from './components/BlurMouseCursor.jsx'

function App() {
  return (
    <div className="App bg-slate-900">
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
        <About />
        <Experience />
      </main>

      {/* <BlurMousePointer /> */}
    </div>
  );
}

export default App;
