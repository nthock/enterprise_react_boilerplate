import { branch, renderComponent } from 'recompose';
import { Loader } from '../shared';

export const displayLoadingState = branch(
  props => (props.data && props.data.loading),
  renderComponent(Loader),
);
