import { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ShowModal } from '../../ShowModal';

export const LoginForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [toggleRememberMe, setToggleRememberMe] = useState(false);
  const [toggleEmailBackgroundColor, setToggleEmailBackgroundColor] =
    useState(true);
  const [togglePassBackgroundColor, setTogglePassBackgroundColor] =
    useState(true);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [values, setValues] = useState({
    password: '',
    email: '',
    showPassword: false,
  });

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

  const passwordTextFieldStyle = {
    backgroundColor: togglePassBackgroundColor ? '#27272F' : '#1e1f28',
    color: '#FFFFFF',
    fontFamily: 'Nekst-Regular',
    fontSize: '14px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFFFFF26',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFFFFF76',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--green-main)',
    },
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email === 'error@test') {
      setEmailError(true);
      setEmailErrorText('Пользователь с данным e-mail не найден');
    }

    if (values.email.length === 0) {
      setEmailError(true);
      setEmailErrorText('Ваш e-mail не может быть пустым');
    }

    if (values.password === 'error@test') {
      setPasswordError(true);
      setPasswordErrorText(
        'Неверный пароль, попробуйте снова или выберите «Забыли пароль»'
      );
    }

    if (values.password.length === 0) {
      setPasswordError(true);
      setPasswordErrorText('Ваш пароль не может быть пустым');
    }

    if (
      values.email.length !== 0 &&
      values.password.length !== 0 &&
      values.email !== 'error@test' &&
      values.password !== 'error@test'
    ) {
      setValues((prevState) => {
        return {
          ...prevState,
          password: '',
          email: '',
          showPassword: false,
        };
      });
      setEmailError(false);
      setPasswordError(false);
      alert('Submitted');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Box
        sx={{
          mt: '50px',
          width: '100%',
        }}
      >
        <TextField
          sx={emailTextFieldStyle}
          error={emailError}
          fullWidth
          label="ВАШ E-MAIL"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          onPointerDown={() => setToggleEmailBackgroundColor(false)}
          onKeyUp={() => {
            if (values.email.length !== 0) setEmailError(false);
          }}
        />
        {emailError && (
          <FormHelperText error={true} sx={{ fontFamily: 'Nekst-Regular' }}>
            {emailErrorText}
          </FormHelperText>
        )}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        <div style={{ m: 'dense', width: '100%' }}>
          <FormControl
            error={passwordError}
            sx={{ mt: '40px', width: '100%' }}
            variant="outlined"
          >
            <InputLabel
              sx={{
                color: '#FFFFFF80',
                fontSize: '14px',
                '&.Mui-focused': {
                  color: '#FFFFFF80',
                },
              }}
              htmlFor="outlined-adornment-password"
            >
              ПАРОЛЬ
            </InputLabel>
            <OutlinedInput
              sx={passwordTextFieldStyle}
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              onPointerDown={() => setTogglePassBackgroundColor(false)}
              onKeyUp={() => {
                if (values.email.length !== 0) setPasswordError(false);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOff sx={{ color: '#FFFFFF80' }} />
                    ) : (
                      <Visibility sx={{ color: '#FFFFFF80' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {passwordError && (
            <FormHelperText
              error={true}
              id="my-helper-text"
              sx={{ fontFamily: 'Nekst-Regular' }}
            >
              {passwordErrorText}
            </FormHelperText>
          )}
        </div>
      </Box>
      <div className="login-form--remember-me-and-forgot-pass-wrapper">
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={toggleRememberMe}
                onClick={() => setToggleRememberMe((prevState) => !prevState)}
                sx={{
                  color: '#FFFFFF26',
                  '&.Mui-checked': {
                    color: 'var(--green-main)',
                  },
                }}
              />
            }
            label="Запомнить меня"
          />
        </div>
        <Link
          onClick={() => setOpenModal(true)}
          style={{ color: 'var(--green-main)' }}
        >
          Забыли пароль?
        </Link>
      </div>
      <Box>
        <Button
          fullWidth
          type="submit"
          sx={{
            mt: '40px',
            textTransform: 'none',
            backgroundColor: 'var(--green-main)',
            width: '100%',
            height: 62,
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#089f7799',
            },
          }}
          variant="contained"
        >
          ВОЙТИ
        </Button>
      </Box>
      <ShowModal open={openModal} onClose={() => setOpenModal(false)} />
    </form>
  );
};
