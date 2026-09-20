import { useState } from "react";
import ProductTabNav from "./ProductTabNav";
import DescriptionContent from "./DescriptionContent";
import AdditionalInfoContent from "./AdditionalInfoContent";
import ReviewsContent from "./ReviewsContent";
import Container from "../ui/Container";

const ProductInfoTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "info", label: "Additional Information" },
    { id: "reviews", label: `Reviews (${product?.reviewsCount || 0})` },
  ];
  return (
    <Container>
      <ProductTabNav
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <hr className="text-muted hidden lg:block h-0.5" />
      <div className="tab-content">
        {activeTab === "description" && (
          <DescriptionContent product={product} />
        )}
        {activeTab === "info" && <AdditionalInfoContent product={product} />}
        {activeTab === "reviews" && <ReviewsContent product={product} />}
      </div>
    </Container>
  );
};

export default ProductInfoTabs;
