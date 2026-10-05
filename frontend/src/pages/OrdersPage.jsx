import { useEffect, useState } from "react";
import api from "../services/axiosInstance";
import Container from "../components/ui/Container";
import PageContent from "../layouts/PageContent";

const formatDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "-"
    : date.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
};

const formatPrice = (value) => {
  const amount = Number(value);
  return Number.isFinite(amount)
    ? `₺${amount.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : "-";
};

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await api.get("/order");
        const list = Array.isArray(response.data)
          ? response.data
          : response.data?.orders;
        if (!Array.isArray(list)) throw new Error("Unexpected order response");
        setOrders(list);
      } catch {
        setError("Your orders could not be loaded. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  return (
    <PageContent>
      <Container as="section" className="py-10">
        <h1 className="mb-6 text-h3 font-bold text-text">My Orders</h1>

        {loading && <p className="text-text-secondary">Loading orders...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && orders.length === 0 && (
          <p className="text-text-secondary">
            You have no previous orders yet.
          </p>
        )}

        {!loading && !error && orders.length > 0 && (
          <div className="overflow-x-auto rounded-md border border-gray-light-2 bg-bg-light">
            <table className="w-full min-w-200 table-fixed border-collapse text-left text-paragraph text-text">
              <thead className="bg-gray-light-1 font-semibold">
                <tr>
                  <th className="px-4 py-3">Order</th>
                  <th className="w-1/4 px-4 py-3">Date</th>
                  <th className="px-4 py-3">Items</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="w-1/4 px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const products = Array.isArray(order.products)
                    ? order.products
                    : [];
                  const itemCount = products.reduce(
                    (total, product) => total + Number(product.count || 0),
                    0,
                  );

                  return (
                    <tr
                      key={order.id}
                      className="border-t border-gray-light-2 align-top"
                    >
                      <td className="px-4 py-4 font-semibold">#{order.id}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {formatDate(order.order_date)}
                      </td>
                      <td className="px-4 py-4">{itemCount}</td>
                      <td className="px-4 py-4 whitespace-nowrap font-semibold">
                        {formatPrice(order.price)}
                      </td>
                      <td className="px-4 py-4">
                        <details>
                          <summary className="cursor-pointer font-semibold text-primary hover:text-hover">
                            View items
                          </summary>
                          <div className="mt-3 wrap-break-word rounded-md bg-gray-light-1 p-3">
                            {products.length === 0 ? (
                              <p className="text-text-secondary">
                                No item details available.
                              </p>
                            ) : (
                              <ul className="space-y-2">
                                {products.map((product, index) => (
                                  <li key={product.id ?? index}>
                                    {product.name ??
                                      product.product?.name ??
                                      `Product #${product.product_id}`}{" "}
                                    × {product.count}
                                    {product.detail && (
                                      <span className="block text-text-secondary">
                                        {product.detail}
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </details>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </PageContent>
  );
};

export default OrdersPage;
