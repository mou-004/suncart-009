export async function getAllProducts() {
  const res = await fetch("https://sun-cart-009.vercel.app/data.json");
  const products = await res.json();
  return products;
}
