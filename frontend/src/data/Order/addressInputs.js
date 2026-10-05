export const addressInputs = [
  {
    id: 1,
    name: "title",
    type: "text",
    label: "Title *",
    placeholder: "Enter an address label",
    rules: {
      required: "Address label is required",
      maxLength: 30,
    },
  },
  {
    id: 2,
    name: "name",
    type: "text",
    label: "Name *",
    placeholder: "Enter your name",
    rules: {
      required: "Name is required",
      minLength: 3,
      maxLength: 20,
    },
  },
  {
    id: 3,
    name: "surname",
    type: "text",
    label: "Surname *",
    placeholder: "Enter your surname",
    rules: {
      required: "Surname is required",
      minLength: 3,
      maxLength: 20,
    },
  },
  {
    id: 4,
    name: "phone",
    type: "tel",
    label: "Phone *",
    placeholder: "Enter your phone number",
    rules: {
      required: "Phone number is required",
      minLength: 11,
      maxLength: 11,
    },
  },
  {
    id: 5,
    name: "district",
    type: "text",
    label: "District *",
    placeholder: "Enter your district",
    rules: {
      required: "District is required",
      maxLength: 30,
    },
  },
  {
    id: 6,
    name: "neighborhood",
    type: "text",
    label: "Neighborhood *",
    placeholder: "Enter your neighborhood",
    rules: {
      required: "Neighborhood is required",
      maxLength: 30,
    },
  },
  {
    id: 7,
    name: "address",
    type: "text",
    label: "Address *",
    placeholder: "Enter your address",
    rules: {
      required: "Address is required",
      maxLength: 30,
    },
  },
];
