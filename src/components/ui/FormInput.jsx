const FormInput = ({ name, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#9794AA] " htmlFor={label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className="text-[#686677] border border-[#CBCAD7] outline-0 focus:outline-1 focus:outline-[#686677] rounded-md p-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
