export const formatErrors = (errors) => {
  const formattedErrors = {};
  errors.map(error => formattedErrors[error.key] = error.value);
  return formattedErrors;
};
