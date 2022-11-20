import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem('i18nextLng') || 'en'
  );
  const [open, setOpen] = useState(false);

  const menuItemStyle = {
    color: 'white',
    backgroundColor: '#1e1f28',
    opacity: '1',
    '&.MuiMenuItem-root.Mui-selected': {
      backgroundColor: '#1e1f28',
    },
    '&:hover': { backgroundColor: '#1e1f28' },
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
    setOpen(false);
  };

  const allLanguages = {
    en: 'EN',
    de: 'DE',
    tr: 'TR',
    es: 'ES',
    ua: 'UA',
  };

  useEffect(() => {
    if (!Object.keys(allLanguages).includes(language)) {
      setLanguage('en');
      i18n.changeLanguage('en');
    }
  }, []);

  return (
    <Select
      variant="standard"
      disableUnderline
      sx={{
        color: 'var(--green-main)',
        '& .MuiSelect-icon': {
          display: 'none',
        },
      }}
      value={language}
      onChange={handleChange}
      open={open}
      onPointerEnter={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {Object.keys(allLanguages).map((lng) => (
        <MenuItem
          value={lng}
          onClick={() => i18n.changeLanguage(lng)}
          sx={menuItemStyle}
          style={language === lng ? { color: 'var(--green-main)' } : {}}
          key={lng}
        >
          {allLanguages[lng]}
        </MenuItem>
      ))}
    </Select>
  );
};
