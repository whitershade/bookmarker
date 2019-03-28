import React, { FC, SyntheticEvent } from 'react';
import Dialog from '@material-ui/core/Dialog';

interface Props {
  open: boolean;
  onClose: (event: SyntheticEvent<{}, Event>) => void;
  children: any;
}

const Modal: FC<Props> = ({ open, onClose, children }) => (
  <Dialog onClose={onClose} open={open}>
    { children }
  </Dialog>
);

export default Modal;
