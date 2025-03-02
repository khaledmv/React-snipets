
import { Route, Routes } from 'react-router';
import './App.css';

import About from './pages/about.page';
import Home from './pages/home.page';
import Navbar from './components/navbar.comoponents';
import { SignIn } from './pages/sign-in.page';


function NotFound(){
  return(
    <div> Not Found 404 </div>
  );
}

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
       <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/sign-in" element={ <SignIn/> } />
          <Route path="/*" element={ <NotFound/> } />
        </Routes> 
       </main>
        <footer>
          Copyright 2025 
        </footer>
    </div>
   
  );
}

export default App;
