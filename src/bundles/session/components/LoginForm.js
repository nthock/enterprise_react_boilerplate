import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
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
          <div className="form-footer">
            <Link to='/forget_password'>Forgot password?</Link><br />
            <a href="/signup">Do not have account? Sign up here</a>
          </div>
        </FormItem>
      </Form>
    </div>
  );

}

export default LoginForm;
