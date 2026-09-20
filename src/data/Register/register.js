export const registerInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your full name",
    rules: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Name must be max 30 characters",
      },
    },
  },
  {
    id: 2,
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
    id: 3,
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Create your password",
    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
      validate: (value) => {
        const strongRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
        return (
          strongRegex.test(value) ||
          "Password must contain upper, lower, and special chars"
        );
      },
    },
  },
  {
    id: 4,
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    rules: {
      required: "Password confirmation is required",
      validate: (value, formValues) =>
        value === formValues.password || "Passwords do not match",
      deps: ["password"],
    },
  },
];

export const registerInputsWithStoreRole = [
  ...registerInputs,
  {
    id: 5,
    name: "store.name",
    type: "text",
    label: "Store Name",
    placeholder: "Enter your store name",
    rules: {
      required: "Store name is required",
      minLength: {
        value: 3,
        message: "Store name must be at least 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Store name must be max 30 characters",
      },
    },
  },
  {
    id: 6,
    name: "store.phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    rules: {
      required: "Phone number is required",
      pattern: {
        value: /^(?:\+90|0090|0)?5\d{9}$/,
        message: "Enter a valid Türkiye mobile phone number",
      },
    },
  },
  {
    id: 7,
    name: "store.tax_no",
    type: "text",
    label: "Tax No",
    placeholder: "T1234V123456",
    rules: {
      required: "Store tax ID is required",
      pattern: {
        value: /^T\d{4}V\d{6}$/,
        message: "Tax ID must match TXXXXVXXXXXX",
      },
    },
  },
  {
    id: 8,
    name: "store.bank_account",
    type: "text",
    label: "Bank Account",
    placeholder: "TR000000000000000000000000",
    rules: {
      required: "Bank account is required",
      pattern: {
        value: /^TR\d{24}$/,
        message: "IBAN must start with TR and contain 26 characters",
      },
    },
  },
];
