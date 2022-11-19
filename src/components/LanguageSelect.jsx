import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));
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

  return (
    <FormControl size="small">
      <Select
        variant="standard"
        disableUnderline
        sx={{
          border: 'none',
          color: 'var(--green-main)',
          '& .MuiSelect-icon': {
            display: 'none',
          },
        }}
        value={language}
        onChange={handleChange}
        open={open}
        onPointerOver={() => setOpen(true)}
        // onPointerOut={() => setOpen(false)}
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
    </FormControl>
  );
};
