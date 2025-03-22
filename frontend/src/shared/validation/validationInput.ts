const validateEmail = (input: HTMLInputElement) => {
  if (!input.value.match(/@/g)) {
    throw new Error(`${input.placeholder} has contain ' @ ' symbol`);
  }
};

const validatePassword = (input: HTMLInputElement) => {
  if (input.value.length < 8) {
    throw new Error(`${input.placeholder} has to be minimum 8 characters`);
  }
};

export const validateInput = (input: HTMLInputElement) => {
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