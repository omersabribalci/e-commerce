import { Link, useHistory } from "react-router-dom";
import bg from "../assets/login/login-bg.png";
import { loginInputs } from "../data/Login/login.js";
import FormInput from "../components/ui/FormInput";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/clientActions.js";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    shouldUnregister: true,
    mode: "onBlur",
  });

  const onSubmit = async (formData) => {
    try {
      await dispatch(login(formData));
      toast.success("Welcome!");
      history.push("/");
    } catch (err) {
      toast.error("Login failed!");
      setError(err.response?.data?.message || "Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen md:grid md:grid-cols-2">
      <div
        className="hidden bg-cover bg-center md:sticky md:top-0 md:block md:h-screen md:self-start rounded-r-4xl"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="grid min-h-screen place-items-center bg-bg-light px-6 py-9 sm:px-10 lg:px-12 xl:px-16">
        <div className="flex w-full max-w-lg flex-col gap-8 rounded-4xl shadow-2xl shadow-purple-300 p-4">
          <h1 className="text-center text-text text-h3 font-bold">
            Welcome Back!
          </h1>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-6">
              {loginInputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  register={register}
                  error={errors[input.name]}
                />
              ))}
              <div className="flex flex-row gap-2 text-[#9794AA]">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  {...register("rememberMe")}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
            </div>

            <button
              type="submit"
              // disabled={isSubmitting}
              className="bg-[#6938EF] rounded-[40px] p-4 text-h5 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#531bf0] flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                  aria-hidden="true"
                />
              )}

              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            {error && (
              <span className="font-bold mx-auto text-sm text-red-500">
                {error}
              </span>
            )}
            <div className="flex flex-row mx-auto gap-2 justify-center items-center">
              <span className="text-paragraph">Don’t have an account?</span>
              <Link
                to="signup"
                className="underline text-link text-[#6938EF] font-semibold"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
