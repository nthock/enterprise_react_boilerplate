import React from 'react';
import { Button, Form, Input, Icon } from 'antd';
import enhance from '../composers/AdminFormComposer';

const FormItem = Form.Item;

const AdminForm = (props) => {
  const { formData, setFormData, formErrors, handleSave, handleClose } = props;

  return (
    <Form layout="vertical">
      <FormItem
        label="Name"
        validateStatus={formErrors.name && 'error'}
        hasFeedback
        help={formErrors.name}
      >
        <Input
          prefix={<Icon type="user" style={{ fontSize: 13 }} />}
          placeholder="Name"
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
      </FormItem>
      <FormItem
        label="Email"
        validateStatus={formErrors.email && 'error'}
        hasFeedback
        help={formErrors.email}
      >
        <Input
          prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
          placeholder="Email"
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
      </FormItem>
      <div className="dialog-form-btn-grp">
        <Button size="large" onClick={handleClose}>Cancel</Button>
        <Button type="primary" className="save-btn" size="large" onClick={handleSave}>Create Admin</Button>
      </div>
    </Form>
  );
}

export default enhance(AdminForm);
