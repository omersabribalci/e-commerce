import { useState } from "react";
import OrderSummary from "../components/Order/OrderSummary";
import Container from "../components/ui/Container";
import PageContent from "../layouts/PageContent";
import AddressInfo from "../components/Order/AddressInfo";
import PaymentOptions from "../components/Order/PaymentOptions";

const CreateOrderPage = () => {
  const [activeTab, setActiveTab] = useState("address");

  const tabs = [
    { id: "address", label: "Address Information" },
    { id: "payment", label: "Payment Options" },
  ];
  return (
    <PageContent>
      <section>
        <Container className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col w-full flex-3/4 gap-4 rounded-md">
            <div className="flex flex-row justify-between">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md text-center border border-muted border-b-4 py-4 flex-1 cursor-pointer font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "text-primary border-b-primary"
                      : "text-text-secondary hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {activeTab === "address" && <AddressInfo />}
            {activeTab === "payment" && <PaymentOptions />}
          </div>
          <div className="flex-1/4">
            <OrderSummary
              action={
                <button className="mt-6 block w-full rounded-md bg-primary px-4 py-3 text-center text-btn font-bold text-text-light hover:bg-hover transition-colors duration-300">
                  Make a Payment
                </button>
              }
            />
          </div>
        </Container>
      </section>
    </PageContent>
  );
};

export default CreateOrderPage;
