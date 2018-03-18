import React from 'react';
import { Modal } from 'antd';

class Dialog extends React.Component {
  constructor() {
    super();
    this.state = { title: '', content: '', size: '', open: false };
  }

  open = (Component, { title, size }) => {
    this.setState({ open: true, content: Component, title, size });
  }

  close = () => {
    this.setState({ open: false, content: '', title: '', size: '' });
  }

  render() {
    const { title, content } = this.state;
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, { Dialog: this }),
    );

    return(
      <div>
        {childrenWithProps}
        <Modal
          title={title}
          visible={this.state.open}
          onOk={this.close}
          onCancel={this.close}
          okText="Ok"
          cancelText="Cancel"
          footer={null}
        >
          {content}
        </Modal>
      </div>
    )
  }
}

export default Dialog;
