import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAddressList } from "../../store/actions/clientActions";
import { setAddress } from "../../store/actions/shoppingCartActions";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

const AddressInfo = () => {
  const [isSame, setIsSame] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressesLoaded, setAddressesLoaded] = useState(false);
  const addressList = useSelector((state) => state.client.addressList);
  const dispatch = useDispatch();
  const selectedAddresses = useSelector((state) => state.shoppingCart.address);

  useEffect(() => {
    dispatch(getAddressList())
      .then(() => setAddressesLoaded(true))
      .catch((error) => {
        console.error(error);
        toast.error("Addresses could not be loaded.");
      });
  }, [dispatch]);

  useEffect(() => {
    if (!addressesLoaded) return;

    const findAddress = (selected) =>
      addressList.find((address) => address.id === selected?.id) ??
      addressList[0] ??
      null;

    const shippingAddress = findAddress(selectedAddresses.shippingAddress);
    const invoiceAddress = findAddress(selectedAddresses.invoiceAddress);

    if (
      shippingAddress !== selectedAddresses.shippingAddress ||
      invoiceAddress !== selectedAddresses.invoiceAddress
    ) {
      dispatch(
        setAddress({
          ...selectedAddresses,
          shippingAddress,
          invoiceAddress,
        }),
      );
    }
  }, [dispatch, addressList, selectedAddresses, addressesLoaded]);

  return (
    <section className="rounded-md border border-gray-light-2 bg-bg-light p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-h4 font-bold text-text">Delivery Address</h2>
        <div className="flex items-center gap-2">
          <input
            className="shrink-0 accent-primary"
            name="same"
            id="same"
            type="checkbox"
            checked={isSame}
            onChange={(event) => setIsSame(event.target.checked)}
          />
          <label
            htmlFor="same"
            className="cursor-pointer text-paragraph text-text-secondary"
          >
            Send my invoice to the same address
          </label>
        </div>
      </div>
      <hr className="my-4 border-gray-light-2" />
      <button
        onClick={() => {
          setEditingAddress(null);
          setIsFormOpen(!isFormOpen);
        }}
        className="mb-5 flex flex-col w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-primary/50 bg-primary/5 px-4 py-4 text-paragraph font-semibold text-primary transition-colors hover:bg-primary/10"
      >
        {isFormOpen ? <X size={18} /> : <Plus size={18} />}
        {isFormOpen ? "Cancel" : "Add New Address"}
      </button>
      {isFormOpen && (
        <AddressForm
          setIsFormOpen={setIsFormOpen}
          editingAddress={editingAddress}
        />
      )}
      <div className="flex flex-col gap-6 lg:flex-row mt-4">
        <AddressCard
          title="Delivery Address"
          name="delivery"
          addressType="shippingAddress"
          addressList={addressList}
          selectedAddresses={selectedAddresses}
          dispatch={dispatch}
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          setEditingAddress={setEditingAddress}
        />
        {!isSame && (
          <AddressCard
            title="Invoice Address"
            name="invoice"
            addressType="invoiceAddress"
            addressList={addressList}
            selectedAddresses={selectedAddresses}
            dispatch={dispatch}
            isFormOpen={isFormOpen}
            setIsFormOpen={setIsFormOpen}
            setEditingAddress={setEditingAddress}
          />
        )}
      </div>
    </section>
  );
};

export default AddressInfo;
