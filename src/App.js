import './App.css';
import { Routes, Route} from 'react-router-dom'
import Profile from './components/profile/profile';
import Home from './components/home/home';
import Header from './components/header/header';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>      
        <>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </>
      </Routes>
    </div>
  );
}

export default App;
