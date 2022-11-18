import './App.css';
import { Auth } from './components/modules/auth/Auth';
import { AuthPage } from './components/modules/auth/AuthPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/login/ru" element={<AuthPage />} />
        <Route path="/register/ru" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
