import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Footer from  './components/Footer'
import BookTable from './components/BookTable';
import Login from './components/Login';
import { useReducer } from 'react';

///UNFINISHED SECTION. NOT SURE HOW TO DO IT.
const reducer = (state, { type }) => {
  switch(type) {

  }
};

const initializer =  () => ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

function App() {
  const [availableTimes, dispatch] = useReducer(reducer, [] ,initializer);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />}/>
        <Route path='/reservations' element={<BookTable times={availableTimes}/>} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
