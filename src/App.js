import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Register from './components/Register/Register';
import List from './components/List/List';
import Dashboard from './components/Dashboard/Dashboard';
import Account from './components/Account/Account';
import ChangePassword from './components/Dashboard/ChangePassword/ChangePassword';

const App = () => {
  const navigate = useNavigate()

  let token = ''
  token = localStorage.getItem("token")

  return (
    <div className="App">
      <Header/>
      <Routes>    
      {
      token !== null
      ?
        <>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Navigate  to="/"/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/changePassword' element={<ChangePassword/>}/>
        </>
      :
        <>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile/:id' element={<Navigate to="/register"/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Navigate  to="/register"/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/account' element={<Account/>}/>
        </>
      }
      </Routes>
    </div>
  );
}

export default App;
