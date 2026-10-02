import { Smartphone, SquarePen, Trash, User } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { setAddress } from "../../store/actions/shoppingCartActions";
import { deleteAddress } from "../../store/actions/clientActions";

const AddressCard = ({
  title,
  name,
  addressType,
  addressList,
  selectedAddresses,
  dispatch,
  isFormOpen,
  setIsFormOpen,
  setEditingAddress,
}) => {
  const [deletingId, setDeletingId] = useState(null);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4">
      <h5 className="text-h5 font-semibold text-text">{title}</h5>
      {addressList.map((address) => (
        <div key={address.id} className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2 cursor-pointer">
              <input
                className="size-4 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-muted bg-white checked:border-primary checked:bg-primary checked:shadow-[inset_0_0_0_3px_white]"
                id={`${name}-${address.id}`}
                type="radio"
                name={name}
                value={address.id}
                checked={address.id === selectedAddresses[addressType]?.id}
                onChange={() =>
                  dispatch(
                    setAddress({
                      ...selectedAddresses,
                      [addressType]: address,
                    }),
                  )
                }
              />
              <label
                className="cursor-pointer font-semibold text-text"
                htmlFor={`${name}-${address.id}`}
              >
                {address?.title}
              </label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <button
                disabled={isFormOpen}
                onClick={() => {
                  setEditingAddress(address);
                  setIsFormOpen(true);
                }}
                className="shrink-0 cursor-pointer text-btn font-semibold text-primary hover:underline disabled:cursor-not-allowed flex flex-row gap-1 items-center"
              >
                <SquarePen size={16} /> Edit
              </button>
              <button
                disabled={deletingId === address.id}
                onClick={async () => {
                  setDeletingId(address.id);
                  try {
                    await dispatch(deleteAddress(address.id));
                    toast.success("Address deleted successfully!");
                  } catch (error) {
                    console.error(error);
                    toast.error("Address could not be deleted!");
                  } finally {
                    setDeletingId(null);
                  }
                }}
                className="shrink-0 cursor-pointer text-btn font-semibold text-danger hover:underline disabled:cursor-not-allowed flex flex-row gap-1 items-center"
              >
                <Trash size={16} /> Delete
              </button>
            </div>
          </div>
          <div
            onClick={() =>
              dispatch(
                setAddress({
                  ...selectedAddresses,
                  [addressType]: address,
                }),
              )
            }
            className={`flex cursor-pointer flex-col gap-2 rounded-md border p-4 transition-colors ${address.id === selectedAddresses[addressType]?.id ? "border-primary bg-primary/5" : "border-gray-light-2 hover:border-primary/50 hover:bg-gray-light-1"}`}
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-paragraph text-text">
              <User size={18} className="shrink-0 text-primary" />
              <p className="font-medium">
                {address.name} {address.surname}
              </p>
              <Smartphone size={18} className="shrink-0 text-primary" />
              <span>{address.phone}</span>
            </div>
            <p className="wrap-break-word text-paragraph text-text">
              {address.address}
            </p>
            <span className="wrap-break-word text-small text-text-secondary">
              {address.neighborhood} Mah. / {address.district} / {address.city}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressCard;
