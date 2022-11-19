import './App.css';
import { AuthPage } from './components/modules/auth/AuthPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={<Navigate to="/UnicornTestTask/login" replace />}
        />
        <Route path="/UnicornTestTask/login" element={<AuthPage />} />
        <Route path="/UnicornTestTask/register" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
