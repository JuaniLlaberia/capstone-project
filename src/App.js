import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Footer from  './components/Footer'
import BookTable from './components/BookTable';
import Login from './components/Login';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />}/>
        <Route path='/reservations' element={<BookTable />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
