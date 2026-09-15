const vietnameseNumber = new Intl.NumberFormat("vi-VN");

export const formatNumber = (value: number) => vietnameseNumber.format(value);
export const formatCurrency = (value: number) => `${formatNumber(value)} VNĐ`;
export const formatPrice = (price: number | null) =>
  price === null ? "Chưa công bố" : `${formatNumber(price)} triệu`;
