import { pure, compose, withState, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import { addAdminMutation } from '../graphql';
import { formatErrors } from '../../../helpers/form';
import { Notification } from '../../../shared';

const AdminFormComposer = compose(
  graphql(addAdminMutation),
  withState('formData', 'setFormData', { id: '', name: '', email: '', password: '', password_confirmation: '' }),
  withState('formErrors', 'setErrors', { id: '', name: '', email: '', password: '', password_confirmation: '' }),
  withHandlers({
    handleSave: props => () => {
      const { formData, formErrors, setErrors, mutate, Dialog } = props;
      mutate({
        variables: formData,
        update: (store, { data: { addAdmin } }) => {
          if (addAdmin.errors.length <= 0) {
            // const data = store.readQuery({ query: adminListQuery });
            // data.admins.push(addAdmin);
            // store.writeQuery({ query: adminListQuery, data });
          } else {
            setErrors(Object.assign({ name: '' }, formatErrors(addAdmin.errors)));
            Notification('error', addAdmin.errors[0].key, addAdmin.errors[0].value);
            Dialog.close();
          }
        }
      })
        .then(({ data: { addAdmin } }) => {
          if (addAdmin.errors.length === 0) {
            Notification('success', 'Admin Invited', `We have invited ${addAdmin.name} to be an admin`);
            Dialog.close();
          }
        });
    },
    handleClose: props => () => {
      props.Dialog.close();
    }
  }),
  pure
)

export default AdminFormComposer;
