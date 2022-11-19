import { Link } from 'react-router-dom';

export const Auth = () => {
  return (
    <div className="link-authorization-wrapper">
      <Link to="/UnicornTestTask/login/ru" className="link-authorization">
        АВТОРИЗАЦИЯ
      </Link>
    </div>
  );
};
