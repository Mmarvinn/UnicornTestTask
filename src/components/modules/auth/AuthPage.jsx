import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackArrow from '../../../images/backArrow.svg';
import { LoginForm } from './LoginForm';
import { LanguageSelect } from '../../LanguageSelect';

export const AuthPage = () => {
  const { t } = useTranslation();
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
              textTransform: 'uppercase',
            }}
          >
            <img
              src={BackArrow}
              alt="back arrow icon"
              style={{ paddingRight: '10px' }}
            />
            {t('back')}
          </Link>
        </div>
        <div>
          <LanguageSelect />
        </div>
      </div>
      <div style={{ width: '460px', margin: '100px auto' }}>
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
            <Link
              to="/UnicornTestTask/register"
              style={{ textTransform: 'uppercase' }}
            >
              {t('registration')}
            </Link>
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
            <Link
              to="/UnicornTestTask/login"
              style={{ textTransform: 'uppercase' }}
            >
              {t('authorization')}
            </Link>
          </div>
        </div>
        {location.pathname.includes('login') && <LoginForm />}
        {location.pathname.includes('register') && (
          <h2 style={{ margin: '50px 0' }}>{t('coming-soon')}</h2>
        )}
      </div>
    </div>
  );
};
