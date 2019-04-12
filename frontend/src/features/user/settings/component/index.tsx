import React, {FC, MouseEvent,} from 'react';
import Button from '@material-ui/core/Button/Button';
import PageWrapper from '../../../../decorators/PageWrapper';

interface Props {
  openModal: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Component: FC<Props> = ({ openModal }) => (
  <div>
    <p>settings</p>
    <Button onClick={openModal}>Delete account</Button>
  </div>
);

export default PageWrapper(Component);
