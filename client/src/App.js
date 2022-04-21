import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<AllAuthors/>} path="/" />
          <Route element={<NewAuthor/>} path="/new" />
          <Route element={<OneAuthor/>} path="/author/:id" />
          <Route element={<EditAuthor/>} path="/author/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
