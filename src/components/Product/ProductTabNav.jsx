const ProductTabNav = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-8 p-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`cursor-pointer text-link font-semibold transition-colors ${
            activeTab === tab.id
              ? "text-primary"
              : "text-text-secondary hover:text-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProductTabNav;
