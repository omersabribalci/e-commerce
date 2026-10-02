import { SquarePen, Trash } from "lucide-react";

const PaymentCard = ({
  card,
  selected,
  isFormOpen,
  deleting,
  onSelect,
  onEdit,
  onDelete,
}) => {
  const month = String(card.expire_month).padStart(2, "0");

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 rounded-md border p-4 ${
        selected ? "border-primary bg-primary/5" : "border-gray-light-2"
      }`}
    >
      <label className="flex min-w-0 cursor-pointer items-center gap-3">
        <input
          type="radio"
          name="saved-card"
          checked={selected}
          onChange={onSelect}
          className="size-4 shrink-0 accent-primary"
        />
        <span className="min-w-0 text-paragraph text-text">
          <span className="block font-semibold">{card.name_on_card}</span>
          <span className="text-text-secondary">
            •••• {card.lastFour} · {month}/{card.expire_year}
          </span>
        </span>
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={isFormOpen}
          onClick={onEdit}
          className="flex cursor-pointer items-center gap-1 text-btn font-semibold text-primary hover:underline disabled:cursor-not-allowed"
        >
          <SquarePen size={16} /> Edit
        </button>
        <button
          type="button"
          disabled={isFormOpen || deleting}
          onClick={onDelete}
          className="flex cursor-pointer items-center gap-1 text-btn font-semibold text-danger hover:underline disabled:cursor-not-allowed"
        >
          <Trash size={16} /> Delete
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
