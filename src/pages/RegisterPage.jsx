import FormInput from "../components/ui/FormInput";
import bg from "../assets/register/register-bg.jpg";
import { useForm, useWatch } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import {
  registerInputs,
  registerInputsWithStoreRole,
} from "../data/Register/register";
import { useEffect, useState } from "react";
import api from "../services/axiosInstance";
import { LoaderCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../store/actions/clientActions";
import { toast } from "react-toastify";

// todo spinner and email activation message check !!

const RegisterPage = () => {
  const roles = useSelector((state) => state.client.roles);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const helper = async () => {
      try {
        if (roles.length > 0) {
          setLoading(false);
          return;
        }
        setLoading(true);
        await dispatch(getRoles());
      } catch (err) {
        setError(err.response?.data?.message || "Fetching Error");
      } finally {
        setLoading(false);
      }
    };
    helper();
  }, [roles.length, dispatch]);

  const { register, handleSubmit, control, formState, getFieldState } = useForm(
    {
      shouldUnregister: true,
      defaultValues: {
        role_id: 3,
      },
      mode: "onBlur",
    },
  );

  const { isSubmitting } = formState;

  const onSubmit = async (formData) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...rest } = formData;
      const res = await api.post("/signup", rest);
      toast.success("Successfull!");
      history.push("/login", {
        successMessage: res.message,
      });
    } catch (err) {
      setError(err.response?.data?.message || "Register Error");
    }
  };

  const roleId = useWatch({
    control,
    name: "role_id",
  });

  const inputs = roleId === 2 ? registerInputsWithStoreRole : registerInputs;

  // todo Loading ve error component yap

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen md:grid md:grid-cols-2">
      <div
        className="hidden bg-cover bg-center md:sticky md:top-0 md:block md:h-screen md:self-start rounded-r-4xl"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="grid min-h-screen place-items-center bg-bg-light px-6 py-9 sm:px-10 lg:px-12 xl:px-16">
        <div className="flex w-full max-w-lg flex-col gap-8 rounded-4xl shadow-2xl shadow-purple-300 p-4">
          <h1 className="text-center text-text text-h3 font-bold">
            Create an account
          </h1>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <select
              {...register("role_id", {
                required: true,
                valueAsNumber: true,
              })}
              className="outline-[#686677] focus:outline-1 text-[#9794AA] rounded-md p-2 border-[#CBCAD7] border"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  register={register}
                  error={getFieldState(input.name, formState).error}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6938EF] rounded-[40px] p-4 text-h5 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#531bf0] flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                  aria-hidden="true"
                />
              )}

              {isSubmitting ? "Creating account..." : "Create an account"}
            </button>

            {error && (
              <span className="font-bold mx-auto text-sm text-red-500">
                {error}
              </span>
            )}
            <div className="flex flex-row mx-auto gap-2 justify-center items-center">
              <span className="text-paragraph">Already have an account?</span>
              <Link
                to="/login"
                className="underline text-link text-[#6938EF] font-semibold"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
