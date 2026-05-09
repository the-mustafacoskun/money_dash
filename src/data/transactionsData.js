import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",5);

const categoryPrefixes = {
  'Transfer': 'tr',
  'Income': 'in',
  'Shopping': 'sh',
  'Service': 'sv',
  'Food': 'fd',
  'Transport': 'tp',
  'Health': 'hl',
  'Bills': 'bl',
  'Entertainment': 'en',
  'Travel': 'tv',
  'Home': 'hm'
};



export const generateIdByCategory = (category) => {
  const prefix = categoryPrefixes[category] || 'gen'; // Tanımsız kategori gelirse 'gen' (general) kullan
  return `${prefix}_${nanoid()}`;
};


export const allTransactions = [
  { title: "Deposit from my Card", date: "28 Jan 2021", amount: "-$850", status: "negative", type: "card", color: "bg-yellow-100 text-yellow-600", category: "Transfer" },
  { title: "Deposit Paypal", date: "25 Jan 2021", amount: "+$2,500", status: "positive", type: "paypal", color: "bg-blue-100 text-blue-600", category: "Income" },
  { title: "Jemi Wilson", date: "21 Jan 2021", amount: "+$5,400", status: "positive", type: "transfer", color: "bg-green-100 text-green-600", category: "Transfer" },
  { title: "Amazon Online Store", date: "20 Jan 2021", amount: "-$120", status: "negative", type: "card", color: "bg-yellow-100 text-yellow-600", category: "Shopping" },
  { title: "Spotify Subscription", date: "19 Jan 2021", amount: "-$15", status: "negative", type: "card", color: "bg-red-100 text-red-600", category: "Service" },
  { title: "Netflix Monthly", date: "18 Jan 2021", amount: "-$12", status: "negative", type: "card", color: "bg-red-100 text-red-600", category: "Service" },
  { title: "Salary Payment", date: "15 Jan 2021", amount: "+$4,200", status: "positive", type: "transfer", color: "bg-green-100 text-green-600", category: "Income" },
  { title: "Starbucks Coffee", date: "14 Jan 2021", amount: "-$7", status: "negative", type: "card", color: "bg-yellow-100 text-yellow-600", category: "Food" },
  { title: "Apple Store Purchase", date: "12 Jan 2021", amount: "-$999", status: "negative", type: "card", color: "bg-blue-100 text-blue-800", category: "Shopping" },
  { title: "Michael John", date: "10 Jan 2021", amount: "+$150", status: "positive", type: "transfer", color: "bg-green-100 text-green-600", category: "Transfer" },
  { title: "Uber Trip", date: "09 Jan 2021", amount: "-$25", status: "negative", type: "card", color: "bg-yellow-100 text-yellow-600", category: "Transport" },
  { title: "Freelance Project", date: "08 Jan 2021", amount: "+$800", status: "positive", type: "paypal", color: "bg-blue-100 text-blue-600", category: "Income" },
  { title: "Grocery Store", date: "07 Jan 2021", amount: "-$230", status: "negative", type: "card", color: "bg-yellow-100 text-yellow-600", category: "Food" },
  { title: "Gym Membership", date: "05 Jan 2021", amount: "-$45", status: "negative", type: "transfer", color: "bg-green-100 text-green-600", category: "Health" },
  { title: "Electric Bill", date: "04 Jan 2021", amount: "-$110", status: "negative", type: "transfer", color: "bg-red-100 text-red-600", category: "Bills" },
  { title: "Google Cloud", date: "03 Jan 2021", amount: "-$30", status: "negative", type: "card", color: "bg-blue-100 text-blue-800", category: "Service" },
  { title: "Rent Payment", date: "01 Jan 2021", amount: "-$1,500", status: "negative", type: "transfer", color: "bg-red-100 text-red-600", category: "Home" },
  { title: "Bonus", date: "31 Dec 2020", amount: "+$500", status: "positive", type: "transfer", color: "bg-green-100 text-green-600", category: "Income" },
  { title: "Steam Games", date: "30 Dec 2020", amount: "-$60", status: "negative", type: "paypal", color: "bg-blue-100 text-blue-600", category: "Entertainment" },
  { title: "Airbnb Booking", date: "28 Dec 2020", amount: "-$450", status: "negative", type: "card", color: "bg-yellow-100 text-yellow-600", category: "Travel" },
].map((item) => ({
  ...item,
  id: generateIdByCategory(item.category), // Her öğeye kategoriye özel Stripe ID ekler
  card: `****` // Rastgele kart numarası
}));