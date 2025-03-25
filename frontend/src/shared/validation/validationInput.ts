const validateEmail = ({ value, placeholder } : {value: string, placeholder: string}) => {
  if (!value.match(/@/g)) {
    throw new Error(`${placeholder} has contain ' @ ' symbol`);
  }
};

const validatePassword = ({ value, placeholder } : {value: string, placeholder: string}) => {
  if (value.length < 8) {
    throw new Error(`${placeholder} has to be minimum 8 characters`);
  }
};

export const validateInput = (input:HTMLInputElement) => {
  if (!input.value) {
    throw new Error("One of your inputs is empty!");
  }
  switch (input.type) {
    case "email":
      validateEmail(input);
    case "password":
      validatePassword(input);
    default:
      return;
  }
};