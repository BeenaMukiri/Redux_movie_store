import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import PageNotFound from './Components/PageNotFound/PageNotFound'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div class="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App