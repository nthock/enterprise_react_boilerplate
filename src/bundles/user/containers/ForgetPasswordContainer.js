import React from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";
import enhance from "../composers/ForgotPasswordComposer";
import "../../../css/sessions.css";

const FormItem = Form.Item;
const ForgetPasswordContainer = ({
  formData,
  setFormData,
  formErrors,
  handleSave,
  submit
}) => (
  <div className="sign-up">
    <h1 className="title">Forgot Pasword?</h1>
    <div className="signup-form">
      {submit ? (
        <div>
          <p>
            We have sent the reset password email to you. Please check your
            mailbox
          </p>
        </div>
      ) : (
        <div>
          <p>Please key in your email that you signed up below</p>
          <Form>
            <FormItem
              validateStatus={formErrors.email && "error"}
              hasFeedback
              help={formErrors.email}
            >
              <Input
                prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
                placeholder="Email"
                name="Email"
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
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
                Send Reset Password Instructions
              </Button>
            </FormItem>
          </Form>
        </div>
      )}
    </div>
  </div>
);

ForgetPasswordContainer.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  formErrors: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  submit: PropTypes.bool.isRequired
};

export default enhance(ForgetPasswordContainer);
