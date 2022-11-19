import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';

import closeIcon from '../images/close-icon.svg';
import { ShowNotificationModal } from './ShowNotificationModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 460,
  height: 360,
  bgcolor: '#1e1f28',
  boxShadow: 24,
  p: 4,
  borderRadius: '4px',
};

export const ForgotPasswordModal = ({ onClose, open }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [toggleEmailBackgroundColor, setToggleEmailBackgroundColor] =
    useState(true);
  const [openNotification, setOpenNotification] = useState(false);

  const emailTextFieldStyle = {
    '& label.Mui-focused': {
      color: '#FFFFFF80',
    },
    '& label': {
      color: '#FFFFFF80',
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: toggleEmailBackgroundColor ? '#27272F' : '#1e1f28',
      color: '#FFFFFF',
      fontFamily: 'Nekst-Regular',
      fontSize: '14px',
      '& fieldset': {
        borderColor: '#FFFFFF26',
      },
      '&:hover fieldset': {
        borderColor: '#FFFFFF76',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--green-main)',
      },
    },
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (email === 'error@test') {
      setEmailError(true);
      setEmailErrorText(t('user-with-given-e-mail-was-not-found'));
    }

    if (email.length === 0) {
      setEmailError(true);
      setEmailErrorText(t('e-mail-empty'));
    }

    if (email.length !== 0 && email !== 'error@test') {
      setEmail('');
      setEmailError(false);
      setOpenNotification(true);
      onClose();
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <button
              onClick={onClose}
              className="close-btn"
              style={{ top: '20px', right: '20px' }}
            >
              <img style={{ width: '18px' }} src={closeIcon} alt="close icon" />
            </button>
            <div className="forgot-password-head-wrapper">
              <h2
                style={{
                  textAlign: 'center',
                  color: 'var(--green-main)',
                  lineHeight: '1.6',
                }}
              >
                {t('forgot-password')}
              </h2>
              <span style={{ color: '#FFFFFF80', marginTop: '10px' }}>
                {t('two easy steps')}
              </span>
            </div>

            <TextField
              sx={emailTextFieldStyle}
              error={emailError}
              fullWidth
              label={t('your-e-mail')}
              type="email"
              value={email}
              onChange={handleChange}
              onPointerDown={() => setToggleEmailBackgroundColor(false)}
              onKeyUp={() => {
                if (email.length !== 0) setEmailError(false);
              }}
            />
            {emailError && (
              <FormHelperText error={true} sx={{ fontFamily: 'Nekst-Regular' }}>
                {emailErrorText}
              </FormHelperText>
            )}
            <Button
              fullWidth
              type="submit"
              sx={{
                mt: '40px',
                textTransform: 'none',
                backgroundColor: 'var(--green-main)',
                width: '100%',
                height: 48,
                fontSize: '18px',
                '&:hover': {
                  backgroundColor: '#089f7799',
                },
              }}
              variant="contained"
            >
              {t('reset password')}
            </Button>
          </Box>
        </form>
      </Modal>
      <ShowNotificationModal
        open={openNotification}
        onClose={() => setOpenNotification(false)}
      />
    </>
  );
};
