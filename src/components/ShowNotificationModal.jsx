import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import closeIcon from '../images/close-icon.svg';

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

export const ShowNotificationModal = ({ onClose, open }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <button
            onClick={onClose}
            className="close-btn"
            style={{ top: '20px', right: '20px' }}
          >
            <img style={{ width: '18px' }} src={closeIcon} alt="close icon" />
          </button>
          <h2
            style={{
              textAlign: 'center',
              margin: '90px 0',
              color: 'var(--green-main)',
              lineHeight: '1.6',
            }}
          >
            {t('we-sand-you-letter')}
          </h2>
        </Box>
      </Modal>
    </div>
  );
};
