export const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  {
    id: 2,
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Create your password",
    rules: {
      required: "Password is required",
    },
  },
];
