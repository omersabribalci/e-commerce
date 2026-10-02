import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const formatSlug = (slug) =>
  slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

const BreadCrumb = () => {
  const { gender, categoryName, categoryId, productNameSlug, productId } =
    useParams();
  const { categories, product } = useSelector((state) => state.product);
  const category = categories.find((item) => String(item.id) === categoryId);
  const categoryLabel = category?.title ?? formatSlug(categoryName ?? "");
  const genderLabel = gender === "kadin" ? "Women's" : "Men's";
  const categoryPath = `/shop/${gender}/${categoryName}/${categoryId}`;

  const items = [
    { label: "Home", to: "/" },
    { label: "Shop", to: categoryId ? "/shop" : undefined },
  ];

  if (categoryId) {
    items.push({
      label: `${genderLabel} ${categoryLabel}`,
      to: productId ? categoryPath : undefined,
    });
  }

  if (productId) {
    items.push({
      label:
        String(product?.id) === productId
          ? product.name
          : formatSlug(productNameSlug),
    });
  }

  return (
    <nav>
      <ol className="flex flex-row items-center">
        {items.map(({ label, to }, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="text-muted font-bold text-h6" />
            )}
            {to ? (
              <Link to={to} className="text-link text-text font-bold">
                {label}
              </Link>
            ) : (
              <span className="text-muted font-bold text-h6">{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
