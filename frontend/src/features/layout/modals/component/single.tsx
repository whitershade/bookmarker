import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

interface Props {
  config: {
    id: string;
    onClose: Function;
    onConfirm?: Function;
    type: string;
    content?: any;
    text: string;
  };
  onClose: Function;
  zIndex: number;
};

class Modal extends Component<Props> {
  state = {
    isClosing: false,
  };

  onClose = () => {
    if (this.props.config.onClose) this.props.config.onClose();

    this.setState({ isClosing: true });

    setTimeout(() => {
      this.props.onClose(this.props.config.id);
    }, 300);
  };

  onConfirm = () => {
    if (this.props.config.onConfirm) {
      this.props.config.onConfirm();
      this.onClose();
    }
  };

  render() {
    const { zIndex } = this.props;
    const { type } = this.props.config;
    if (type === 'confirmation') {
      const { text } = this.props.config;
      return (
        <div
          className={`${styles.modalWrapper} ${this.state.isClosing ? styles.closing : styles.opening}`}
          style={{ zIndex: (zIndex + 1) * 10 }}
          onClick={this.onClose}
        >
          <div
            className={styles.modal}
            onClick={e => e.stopPropagation()}
          >
            <div className="text">{text}</div>
            <div className="buttons">
              <Button onClick={this.onConfirm}>
                Confirm
              </Button>
              <Button onClick={this.onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Modal;
