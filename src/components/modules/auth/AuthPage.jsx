import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import BackArrow from '../../../images/backArrow.svg';
import { LoginForm } from './LoginForm';

export const AuthPage = () => {
  const location = useLocation();

  return (
    <div className="auth-page">
      <div className="auth-page--header">
        <div>
          <Link
            to="/UnicornTestTask"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--green-main)',
            }}
          >
            <img
              src={BackArrow}
              alt="back arrow icon"
              style={{ paddingRight: '10px' }}
            />
            НАЗАД
          </Link>
        </div>
        <div>
          <ul className="auth-page--languages-list">
            <li>
              <Link
                to=""
                style={
                  location.pathname.endsWith('/ru')
                    ? {
                        color: 'var(--green-main)',
                      }
                    : {}
                }
              >
                RU
              </Link>
            </li>
            <li>
              <Link to="">EN</Link>
            </li>
            <li>
              <Link to="">DE</Link>
            </li>
            <li>
              <Link to="">TR</Link>
            </li>
            <li>
              <Link to="">ES</Link>
            </li>
            <li>
              <Link to="">UA</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-0-auto" style={{ width: '460px' }}>
        <div className="auth-page--tab-links">
          <div
            className="tab-links--register-wrapper"
            style={
              location.pathname.includes('register')
                ? {
                    borderBottom: '2px solid var(--green-main)',
                  }
                : {}
            }
          >
            <Link to="/UnicornTestTask/register/ru">РЕГИСТРАЦИЯ</Link>
          </div>
          <div
            className="tab-links--login-wrapper"
            style={
              location.pathname.includes('login')
                ? {
                    borderBottom: '2px solid var(--green-main)',
                  }
                : {}
            }
          >
            <Link to="/UnicornTestTask/login/ru">АВТОРИЗАЦИЯ</Link>
          </div>
        </div>
        {location.pathname.includes('login/ru') && <LoginForm />}
        {location.pathname.includes('register/ru') && (
          <h2 style={{ margin: '50px 0' }}>COMING SOON...</h2>
        )}
      </div>
    </div>
  );
};
