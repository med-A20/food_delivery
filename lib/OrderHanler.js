export default async function OrderHandler({
  name,
  phone,
  adresse,
  totalAmount,
  paymentMethode,
  uniqueId
}) {
  console.log("order", paymentMethode);
  const response = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      key : uniqueId,
      name: name,
      phone: phone,
      adresse: adresse,
      total: parseFloat(totalAmount),
      methode: paymentMethode,
    }),
  });
  const id = await response.json();
  return id;
}
