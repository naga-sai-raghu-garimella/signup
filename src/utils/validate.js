//Validation
export const checkValidateEmail = (email) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) return "Email Id is not valid";
  return "";
};

export const checkValidatePassword = (password) => {
  const isPasswordValid =
    /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(password);
  if (!isPasswordValid)
    return "Password should have atleast 1 capital letter, 1 numeric, 1 special character";
  return "";
};
