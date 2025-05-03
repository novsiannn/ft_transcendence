const validateEmail = (input: HTMLInputElement) => {
  const { value, type }: { value: string; type: string } = input;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(value)) {
    input.className = "w-full p-2 border rounded border-red-500";
    throw new Error(`Invalid ${type}.\nEnter a valid email address.`);
  }
};

const validatePassword = (input: HTMLInputElement) => {
  const { value, placeholder }: { value: string; placeholder: string } = input;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(value)) {
    input.className = "w-full p-2 border rounded border-red-500";
    throw new Error(
      `${placeholder} must have 8+ chars, 1 uppercase, 1 lowercase, 1 number, no spaces and 1 special char.`
    );
  }
};

export const validateUsername = (input: HTMLInputElement) => {
  const { value, placeholder } = input;
  const usernameRegex = /^[a-zA-Zа-яА-Я0-9]([a-zA-Zа-яА-Я0-9_-]{1,14})[a-zA-Zа-яА-Я0-9]$/;

  if (!usernameRegex.test(value)) {
    input.className = "w-full p-2 border rounded border-red-500";
    throw new Error(
      `${placeholder} must be 3-16 chars long, use letters, numbers, "_" or "-".`
    );
  }
};

export const validateInput = (input: HTMLInputElement) => {
  if (!input.value) {
    input.className = "w-full p-2 border rounded border-red-500";
    throw new Error("One of your inputs is empty!");
  }

  switch (input.type) {
    case "text":
      validateUsername(input);
      break;
    case "email":
      validateEmail(input);
      break;
    case "password":
      validatePassword(input);
      break;
    default:
      return;
  }
};
