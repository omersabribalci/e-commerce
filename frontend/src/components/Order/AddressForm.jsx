import { useForm } from "react-hook-form";
import { addressInputs } from "../../data/Order/addressInputs";
import AddressFormInput from "./AddressFormInput";
import { turkishCities } from "../../data/Order/turkishCities";
import ButtonMd from "../ui/ButtonMd";
import { useDispatch } from "react-redux";
import {
  addNewAddress,
  updateAddress,
} from "../../store/actions/clientActions";
import { toast } from "react-toastify";

const AddressForm = ({ setIsFormOpen, editingAddress }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: editingAddress
      ? {
          city: editingAddress.city,
          title: editingAddress.title,
          name: editingAddress.name,
          surname: editingAddress.surname,
          phone: editingAddress.phone,
          district: editingAddress.district,
          neighborhood: editingAddress.neighborhood,
          address: editingAddress.address,
        }
      : {
          title: "",
          name: "",
          surname: "",
          phone: "",
          city: "",
          district: "",
          neighborhood: "",
          address: "",
        },
  });

  const onSubmit = async (formData) => {
    try {
      if (editingAddress) {
        await dispatch(updateAddress({ ...formData, id: editingAddress.id }));
        toast.success("Address updated successfully!");
      } else {
        await dispatch(addNewAddress(formData));
        toast.success("New address addedsuccessfully!");
      }
      setIsFormOpen(false);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 p-4 md:grid-cols-2 md:grid rounded-md shadow-2xl shadow-mauve-300"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="text-gray-700">
          City *
        </label>
        <select
          defaultValue=""
          name="city"
          id="city"
          className="w-full text-[#686677] border border-[#CBCAD7] outline-0 focus:outline-1 focus:outline-[#686677] rounded-md p-2"
          {...register("city", { required: "City is required" })}
        >
          <option value="" disabled hidden>
            Choose city
          </option>
          {turkishCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors["city"] && (
          <p className="text-sm text-red-500">{errors["city"].message}</p>
        )}
      </div>
      {addressInputs.map((input) => (
        <AddressFormInput
          key={input.id}
          register={register}
          {...input}
          error={errors[input.name]}
        />
      ))}
      <ButtonMd
        disabled={isSubmitting}
        className="md:col-span-2 mx-auto text-h5"
      >
        Save
      </ButtonMd>
    </form>
  );
};

export default AddressForm;
