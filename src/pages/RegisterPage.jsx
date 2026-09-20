import FormInput from "../components/ui/FormInput";
import bg from "../assets/register/register-bg.png";

const RegisterPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen max-h-screen">
      {/* Foto */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-24 bg-bg-light">
        <div className="w-full max-w-sm flex flex-col gap-8">
          <h1 className="text-center text-text text-h3 font-bold">
            Create an account
          </h1>
          <form className="flex flex-col gap-6" action="">
            <select name="" id="">
              <option value="">role1</option>
            </select>
            <FormInput
              name={"name"}
              label={"Name"}
              placeholder={"Enter your full name"}
            />
            <FormInput
              name={"email"}
              label={"Email"}
              placeholder={"Enter your email"}
            />
            <FormInput
              name={"password"}
              label={"Password"}
              placeholder={"Create your password"}
            />
            <FormInput
              name={"c-password"}
              label={"Confirm Password"}
              placeholder={"Confirm your password"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
