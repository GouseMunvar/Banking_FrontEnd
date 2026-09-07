import { createContext, useContext, useEffect, useState } from "react";
import { getTransactions } from "../../api/apiService";
import { IconArrowDownLeft, IconArrowUpRight } from "@tabler/icons-react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index,setIndex]=useState(0)

 const fetchTransactions = async () => {
  try {
    setLoading(true);

    const response = await getTransactions();

    const formattedTransactions = response.data.map((item) => ({

      id: item._id,

      type:
        item.type.charAt(0).toUpperCase() +
        item.type.slice(1),

      date: new Date(item.createdAt).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),

      amount:
        item.type === "deposit"
          ? `+₹${item.amount}`
          : `-₹${item.amount}`,

      variant: item.type.toLowerCase(),

      icon:
        item.type.toLowerCase() === "deposit" ? (
          <IconArrowDownLeft size={18} />
        ) : (
          <IconArrowUpRight size={18} />
        ),

      status: item.status,

      sender: item.sender?.userId || null,

      receiver: item.receiver?.userId || null,

    }));


    setTransactions(formattedTransactions);


  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);

  }
};
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <StateContext.Provider
      value={{
        transactions,
        setTransactions,
        fetchTransactions,
        loading,
        index,
        setIndex
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);