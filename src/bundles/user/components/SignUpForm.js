import React from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";
import enhance from "../composers/SignUpFormComposer";

const FormItem = Form.Item;

const SignUpForm = props => {
  const { handleSave, formData, setFormData, formErrors } = props;
  return (
    <div className="signup-form">
      <Form>
        <FormItem
          validateStatus={formErrors.name && "error"}
          hasFeedback
          help={formErrors.name}
        >
          <Input
            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
            placeholder="Name"
            name="Name"
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </FormItem>
        <FormItem
          validateStatus={formErrors.email && "error"}
          hasFeedback
          help={formErrors.email}
        >
          <Input
            prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
            placeholder="Email"
            name="Email"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </FormItem>
        <FormItem
          validateStatus={formErrors.password && "error"}
          hasFeedback
          help={formErrors.password}
        >
          <Input
            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
            name="Password"
            type="password"
            placeholder="Password"
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </FormItem>
        <FormItem
          validateStatus={formErrors.password_confirmation && "error"}
          hasFeedback
          help={formErrors.password_confirmation}
        >
          <Input
            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
            name="Password Confirmation"
            type="password"
            placeholder="Password Confirmation"
            onChange={e =>
              setFormData({
                ...formData,
                password_confirmation: e.target.value
              })
            }
          />
        </FormItem>
        <FormItem>
          <Button
            onClick={() => handleSave()}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
          <div className="form-footer">
            <a href="/">Have an account? Login here</a>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

SignUpForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    password_confirmation: PropTypes.string
  }).isRequired,
  formErrors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    password_confirmation: PropTypes.string
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default enhance(SignUpForm);
