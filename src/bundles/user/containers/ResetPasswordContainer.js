import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import enhance from '../composers/ResetPasswordComposer';
import '../../../css/sessions.css';

const FormItem = Form.Item;
const ResetPasswordContainer = ({ history, formData, setFormData, formErrors, handleSave }) => {
  return (
    <div className="sign-up">
      <h1 className="title">Reset Password</h1>
      <div className="signup-form">
        { formErrors.invalid_user &&
          <p className="error-message">{formErrors.invalid_user}</p>
        }
        <Form>
          <FormItem
            validateStatus={formErrors.password && 'error'}
            hasFeedback
            help={formErrors.password}
          >
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              name="Password"
              type="password"
              placeholder="Password"
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </FormItem>
          <FormItem
            validateStatus={formErrors.password_confirmation && 'error'}
            hasFeedback
            help={formErrors.password_confirmation}
          >
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              name="Password Confirmation"
              type="password"
              placeholder="Password Confirmation"
              onChange={e => setFormData({ ...formData, password_confirmation: e.target.value })}
            />
          </FormItem>
          <FormItem>
            <Button onClick={(e) => handleSave()} type="primary" htmlType="submit" className="login-form-button">
              Reset Password
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}

export default enhance(ResetPasswordContainer);
