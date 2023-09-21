export const formValidation = (errors, errorKey) => {
    
    return errors[errorKey] ? (
      <span color='red'>{errors[errorKey].message}</span>
    ) : (
      ''
    );
  };