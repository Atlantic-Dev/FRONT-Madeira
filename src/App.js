import './App.css';
import { Routes, Route} from 'react-router-dom'
import Profile from './components/profile/profile';
import Home from './components/home/home';
import Header from './components/header/header';
import About from './components/about/about';
import Register from './components/register/register';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>      
        <>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
        </>
      </Routes>
    </div>
  );
}

export default App;
