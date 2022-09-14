import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Profile from './components/profile/profile';
import Home from './components/home/home';
import Header from './components/header/header';
import About from './components/about/about';
import Register from './components/register/register';
import List from './components/list/list';
import Dashboard from './components/dashboard/dashboard';
import Account from './components/account/account';
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
