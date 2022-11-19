import './App.css';
import { Auth } from './components/modules/auth/Auth';
import { AuthPage } from './components/modules/auth/AuthPage';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/UnicornTestTask" replace />} />
        <Route path="/UnicornTestTask" element={<Auth />} />
        <Route path="/UnicornTestTask/login/ru" element={<AuthPage />} />
        <Route path="/UnicornTestTask/register/ru" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
