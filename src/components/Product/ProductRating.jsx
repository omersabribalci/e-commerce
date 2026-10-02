import { Star } from "lucide-react";

const ProductRating = ({ rating, sellCount }) => {
  const filledStars = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));

  return (
    <div className="flex flex-wrap items-center gap-2 text-small text-text-secondary">
      <span className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            strokeWidth={0.3}
            className={`h-4 w-4 ${index < filledStars ? "fill-[#F3CD03]" : "fill-bg-light"}`}
          />
        ))}
      </span>
      {rating != null && <span>({rating})</span>}
      {sellCount != null && (
        <span>{Number(sellCount).toLocaleString("en-US")} sold</span>
      )}
    </div>
  );
};

export default ProductRating;
