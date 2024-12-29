import DollarIcon from "./icons/dollar";
import PaypalIcon from "./icons/paypal";
import WalletIcon from "./icons/wallet";

const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      icon: "wallet",
      description: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
    },
    {
      id: 2,
      icon: "paypal",
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
    },
    {
      id: 3,
      icon: "dollar",
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
    },
  ];

  const IconWrapper = ({ type }: { type: string }) => {
    const bgColors: { [key: string]: string } = {
      wallet: "bg-[#FFF5D9]",
      paypal: "bg-[#E7EDFF]",
      dollar: "bg-[#DCFAF8]",
    };

    const icons: { [key: string]: JSX.Element } = {
      wallet: <WalletIcon className="w-6 h-6 text-[#FFBB38]" />,
      paypal: <PaypalIcon className="w-6 h-6 text-[#396AFF]" />,
      dollar: <DollarIcon className="w-6 h-6 text-[#16DBCC]" />,
    };

    return (
      <div className={`${bgColors[type] || "bg-gray-50"} p-3 rounded-full`}>
        {icons[type] || <DollarIcon className="w-6 h-6 text-gray-600" />}
      </div>
    );
  };

  return (
    <div className="p-6 xl:p-5 w-full bg-white rounded-3xl shadow-sm">
      <div className="">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <IconWrapper type={transaction.icon} />
              <div>
                <div className="font-medium text-gray-900">
                  {transaction.description}
                </div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <div
              className={`font-medium ${
                transaction.amount > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {transaction.amount > 0 ? "+" : ""}
              {`$${Math.abs(transaction.amount).toLocaleString()}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
