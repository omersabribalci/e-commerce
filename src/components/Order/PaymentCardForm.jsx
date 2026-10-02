import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addNewCard, updateCard } from "../../store/actions/clientActions";
import ButtonMd from "../ui/ButtonMd";

const PaymentCardForm = ({ editingCard, setIsFormOpen, onSaved }) => {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      card_no: "",
      expire_month: editingCard?.expire_month ?? "",
      expire_year: editingCard?.expire_year ?? "",
      name_on_card: editingCard?.name_on_card ?? "",
    },
  });

  const onSubmit = async (formData) => {
    const cardData = {
      card_no: formData.card_no.replace(/\s/g, ""),
      expire_month: Number(formData.expire_month),
      expire_year: Number(formData.expire_year),
      name_on_card: formData.name_on_card.trim(),
    };

    try {
      if (editingCard) {
        await dispatch(updateCard({ ...cardData, id: editingCard.id }));
        toast.success("Card updated successfully!");
      } else {
        await dispatch(addNewCard(cardData));
        toast.success("Card added successfully!");
      }
      onSaved();
      setIsFormOpen(false);
    } catch {
      toast.error("Card could not be saved.");
    }
  };

  const inputClassName =
    "w-full rounded-md border border-gray-light-2 p-2 text-text outline-none focus:border-primary";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-5 grid gap-4 rounded-md border border-gray-light-2 p-4 sm:grid-cols-2"
    >
      <div className="sm:col-span-2">
        <label htmlFor="card_no" className="mb-1 block text-paragraph text-text">
          Card Number *
        </label>
        <input
          id="card_no"
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          placeholder={editingCard ? "Re-enter card number" : "1234 1234 1234 1234"}
          className={inputClassName}
          {...register("card_no", {
            required: "Card number is required",
            validate: (value) =>
              /^\d{13,19}$/.test(value.replace(/\s/g, "")) ||
              "Enter 13 to 19 digits",
          })}
        />
        {errors.card_no && (
          <p className="mt-1 text-sm text-danger">{errors.card_no.message}</p>
        )}
        {editingCard && (
          <p className="mt-1 text-small text-text-secondary">
            Re-enter the full card number to save changes.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="expire_month" className="mb-1 block text-paragraph text-text">
          Expiry Month *
        </label>
        <input
          id="expire_month"
          type="number"
          min="1"
          max="12"
          placeholder="MM"
          className={inputClassName}
          {...register("expire_month", {
            required: "Expiry month is required",
            min: { value: 1, message: "Use a month from 1 to 12" },
            max: { value: 12, message: "Use a month from 1 to 12" },
          })}
        />
        {errors.expire_month && (
          <p className="mt-1 text-sm text-danger">{errors.expire_month.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="expire_year" className="mb-1 block text-paragraph text-text">
          Expiry Year *
        </label>
        <input
          id="expire_year"
          type="number"
          min={currentYear}
          placeholder="YYYY"
          className={inputClassName}
          {...register("expire_year", {
            required: "Expiry year is required",
            min: { value: currentYear, message: "Card has expired" },
          })}
        />
        {errors.expire_year && (
          <p className="mt-1 text-sm text-danger">{errors.expire_year.message}</p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="name_on_card" className="mb-1 block text-paragraph text-text">
          Name on Card *
        </label>
        <input
          id="name_on_card"
          type="text"
          autoComplete="cc-name"
          placeholder="Name as shown on card"
          className={inputClassName}
          {...register("name_on_card", {
            required: "Name on card is required",
            validate: (value) =>
              value.trim().length > 0 || "Name on card is required",
          })}
        />
        {errors.name_on_card && (
          <p className="mt-1 text-sm text-danger">{errors.name_on_card.message}</p>
        )}
      </div>

      <ButtonMd type="submit" disabled={isSubmitting} className="sm:col-span-2 mx-auto">
        Save
      </ButtonMd>
    </form>
  );
};

export default PaymentCardForm;
