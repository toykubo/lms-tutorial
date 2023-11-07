// export const formatPrice = (price: number) => {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD"
//   }).format(price)
// }

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY"
  }).format(price)
} // => "¥1,000"