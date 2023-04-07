import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div style={{zIndex:'-2'}}>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
