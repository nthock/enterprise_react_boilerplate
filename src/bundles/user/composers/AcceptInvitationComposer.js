import { compose, withState, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import { acceptInviteMutation } from '../graphql';
import { formatErrors } from '../../../helpers/form';
import { signIn } from '../../../helpers/auth';

const AcceptInvitationComposer = compose(
  graphql(acceptInviteMutation),
  withState('formData', 'setFormData', props => {
    const invitation_token = new URL(window.location.href).searchParams.get('token')
    return { invitation_token, password: '', password_confirmation: '' }
  }),
  withState('formErrors', 'setFormErrors', { password: '', password_confirmation: '' } ),
  withHandlers({
    handleSave: props => () => {
      const { mutate, formData, setFormErrors, history } = props;
      console.log('handleSave', props);
      mutate({
        variables: formData,
        update: (store, { data: { acceptInvite } }) => {
          if (acceptInvite.errors.length === 0) {
            console.log(acceptInvite);
            signIn(acceptInvite);
            history.push('/dashboard');
          } else {
            setFormErrors(formatErrors(acceptInvite.errors));
          }
        }
      });
    }
  })
);

export default AcceptInvitationComposer;
