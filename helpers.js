export const isValidEmail = (value = "") => {
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return {
    isValid: filter.test(value),
    message: "Please enter valide email address"
  };
}

export const isValidInput = (value = '') => {
  const match = value.match(/([A-Za-z])/g);
  return {
    isValid: match && match[1],
    message: "Please enter atleast 2 characters"
  }
}