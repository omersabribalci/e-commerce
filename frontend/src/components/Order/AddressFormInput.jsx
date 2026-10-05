const AddressFormInput = ({
  name,
  type,
  label,
  placeholder,
  rules,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full text-[#686677] border border-[#CBCAD7] outline-0 focus:outline-1 focus:outline-[#686677] rounded-md p-2"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default AddressFormInput;
