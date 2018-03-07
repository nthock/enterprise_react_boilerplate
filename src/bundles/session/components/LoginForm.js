import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const LoginForm = (props) => {
  const { handleSave, formData, setFormData } = props;

  return (
    <div className="login-form">
      <Form>
        <FormItem>
          <Input
            prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
            placeholder="Email"
            name="Email"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
            name="Password"
            type="password"
            placeholder="Password"
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
        </FormItem>
        <FormItem>
          <Button onClick={(e) => handleSave()} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <a className="login-form-forgot" href="">Forgot password?</a>
        </FormItem>
      </Form>
    </div>
  );

}

export default LoginForm;
