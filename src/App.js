import './App.css';
import { AuthPage } from './components/modules/auth/AuthPage';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/UnicornTestTask/login" element={<AuthPage />} />
        <Route path="/UnicornTestTask/register" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
