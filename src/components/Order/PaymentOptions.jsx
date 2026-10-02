import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteCard, getCreditCards } from "../../store/actions/clientActions";
import { setPayment } from "../../store/actions/shoppingCartActions";
import PaymentCard from "./PaymentCard";
import PaymentCardForm from "./PaymentCardForm";

const PaymentOptions = () => {
  const dispatch = useDispatch();
  const creditCards = useSelector((state) => state.client.creditCards);
  const payment = useSelector((state) => state.shoppingCart.payment);
  const [cardsStatus, setCardsStatus] = useState("loading");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    dispatch(getCreditCards())
      .then(() => setCardsStatus("loaded"))
      .catch(() => {
        setCardsStatus("error");
        toast.error("Cards could not be loaded.");
      });
  }, [dispatch]);

  useEffect(() => {
    if (cardsStatus !== "loaded") return;

    const selectedExists = creditCards.some((card) => card.id === payment.cardId);
    const cardId = selectedExists ? payment.cardId : (creditCards[0]?.id ?? null);

    if (cardId !== payment.cardId) {
      dispatch(setPayment({ ...payment, cardId }));
    }
  }, [cardsStatus, creditCards, payment, dispatch]);

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await dispatch(deleteCard(id));
      toast.success("Card deleted successfully!");
    } catch {
      toast.error("Card could not be deleted.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section className="rounded-md border border-gray-light-2 bg-bg-light p-5">
      <h2 className="border-b border-gray-light-2 pb-4 text-h4 font-bold text-text">
        Payment Options
      </h2>

      <button
        type="button"
        onClick={() => {
          setEditingCard(null);
          setIsFormOpen(!isFormOpen);
        }}
        className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-primary/50 bg-primary/5 px-4 py-4 text-paragraph font-semibold text-primary hover:bg-primary/10"
      >
        {isFormOpen ? <X size={18} /> : <Plus size={18} />}
        {isFormOpen ? "Cancel" : "Add New Card"}
      </button>

      {isFormOpen && (
        <PaymentCardForm
          key={editingCard?.id ?? "new"}
          editingCard={editingCard}
          setIsFormOpen={setIsFormOpen}
          onSaved={() => setCardsStatus("loaded")}
        />
      )}

      {cardsStatus === "loading" && (
        <p className="mt-5 text-paragraph text-text-secondary">Loading saved cards...</p>
      )}
      {cardsStatus === "error" && (
        <p className="mt-5 text-paragraph text-text-secondary">Saved cards are unavailable.</p>
      )}
      {cardsStatus === "loaded" && creditCards.length === 0 && (
        <p className="mt-5 text-paragraph text-text-secondary">No saved cards yet.</p>
      )}
      {cardsStatus === "loaded" && creditCards.length > 0 && (
        <div className="mt-5 flex flex-col gap-3">
          {creditCards.map((card) => (
            <PaymentCard
              key={card.id}
              card={card}
              selected={card.id === payment.cardId}
              isFormOpen={isFormOpen}
              deleting={deletingId === card.id}
              onSelect={() => dispatch(setPayment({ ...payment, cardId: card.id }))}
              onEdit={() => {
                setEditingCard(card);
                setIsFormOpen(true);
              }}
              onDelete={() => handleDelete(card.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PaymentOptions;
