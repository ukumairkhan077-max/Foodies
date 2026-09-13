export function formatPrice(value) {
  return `Rs. ${Number(value).toLocaleString("en-PK")}`;
}