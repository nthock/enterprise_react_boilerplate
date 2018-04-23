import { graphql } from "react-apollo";

const getData = (query) => Component => {
  return graphql(query);
}

export default getData;
