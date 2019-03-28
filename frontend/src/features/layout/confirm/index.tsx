import React, { FC, SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '../modal';

interface Props {
  open: boolean;
  onConfirm: (event: SyntheticEvent<{}, Event>) => void;
  onClose: (event: SyntheticEvent<{}, Event>) => void;
}

const Confirm: FC<Props> = ({ onConfirm, onClose, open }) => (
  <Modal onClose={onClose} open={open}>
    <Button onClick={onConfirm}>Confirm</Button>
    <Button onClick={onClose}>Cancel</Button>
  </Modal>
);

export default Confirm;
