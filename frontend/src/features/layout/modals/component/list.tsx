import React, { FC } from 'react';
import Modal from './single';

interface Props {
  closeModal: Function;
  modals: any[];
}

const Component: FC<Props> = ({ modals, closeModal }) => (
  <div>
    {modals.map(
      (modalConfig, i) => (
        <Modal
          config={modalConfig}
          key={i}
          zIndex={i}
          onClose={(config:any) => closeModal(config)}
        />
      ),
    )}
  </div>
);

export default Component;
