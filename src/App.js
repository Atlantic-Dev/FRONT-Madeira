import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import Register from './components/register/Register';
import List from './components/list/List';
import Dashboard from './components/dashboard/Dashboard';
import Account from './components/account/Account';
import ChangePassword from './components/dashboard/ChangePassword/ChangePassword';

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
