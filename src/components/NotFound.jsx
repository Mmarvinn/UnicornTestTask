import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

import notFoundImg from '../images/404-error.svg';

export const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/UnicornTestTask/login');
  };

  return (
    <div className="page-404">
      <h1>{t('404 not found')}</h1>
      <div className="w-100" style={{ margin: '100px 0' }}>
        <img
          style={{ width: '620px', height: '270px' }}
          src={notFoundImg}
          alt="404 page"
        />
        <h2
          style={{
            marginTop: '-45px',
            marginLeft: '-505px',
          }}
        >
          {t('error')}
        </h2>
      </div>

      <Stack direction="row" spacing={10}>
        <Box>
          <Button
            onClick={handleClick}
            fullWidth
            type="button"
            sx={{
              mt: '40px',
              textTransform: 'none',
              backgroundColor: 'var(--green-main)',
              width: 200,
              height: 36,
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#089f7799',
              },
            }}
            variant="contained"
          >
            {t('go back')}
          </Button>
        </Box>
        <Box>
          <Button
            onClick={goHome}
            fullWidth
            type="button"
            sx={{
              mt: '40px',
              textTransform: 'none',
              backgroundColor: 'var(--green-main)',
              width: 200,
              height: 36,
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#089f7799',
              },
            }}
            variant="contained"
          >
            {t('go home')}
          </Button>
        </Box>
      </Stack>
    </div>
  );
};
