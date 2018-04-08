import { pure, compose, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import { adminListQuery, sendInviteMutation } from '../graphql';
import { displayLoadingState } from '../../../helpers/compose';
import { Notification } from '../../../shared';

const AdminListComposer = compose(
  graphql(adminListQuery),
  displayLoadingState,
  graphql(sendInviteMutation, { name: 'sendInviteMutate'} ),
  withHandlers({
    handleDelete: props => (id) => {
      console.log('handleDelete');
    },
    sendInvite: props => (id) => {
      const { sendInviteMutate } = props;
      sendInviteMutate({
        variables: { id }
      }).then(({ data: { sendInvite } }) => {
        if (sendInvite.errors.length <= 0) {
          Notification('success', 'Admin Invited', `We have send another invitation email to ${sendInvite.name}.`);
        }
      })
      console.log('send Invite')
    }
  }),
  pure
);

export default AdminListComposer;
