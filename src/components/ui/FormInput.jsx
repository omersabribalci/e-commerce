import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormInput = ({
  name,
  type,
  label,
  placeholder,
  register,
  rules,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#9794AA]" htmlFor={name}>
        {label}
      </label>

      <div className="relative">
        <input
          autoComplete="true"
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          className={`w-full text-[#686677] border border-[#CBCAD7] outline-0 focus:outline-1 focus:outline-[#686677] rounded-md p-2 ${isPassword ? "pr-10" : ""}`}
          placeholder={placeholder}
          {...register(name, rules)}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((isVisible) => !isVisible)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9794AA]"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
