import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserManagement from "./Pages/UserManagement/UserManagement";
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserManagement />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
