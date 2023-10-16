// import WIP from './components/WIP';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './screens/Home.jsx';
import About from './screens/About.jsx';
import Experience from './screens/Experience.jsx';
import Projects from './screens/Projects.jsx';
import Contact from './screens/Contact.jsx';
import DarkModeToggle from './components/DarkModeToggle.jsx'
// import BlurMousePointer from './components/BlurMouseCursor.jsx'

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <DarkModeToggle />
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer>
        <Contact />
      </footer>

      {/* <BlurMousePointer /> */}
    </div>
  );
}

export default App;
