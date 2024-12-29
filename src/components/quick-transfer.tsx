import { useState } from "react";
import { ChevronRight, ChevronLeft, Send } from "lucide-react";

const QuickTransfer = () => {
  const allContacts = [
    {
      name: "Livia Bator",
      role: "CEO",
      image: "/image1.png",
    },
    {
      name: "Randy Press",
      role: "Director",
      image: "/image2.png",
    },
    {
      name: "Workman",
      role: "Designer",
      image: "/image3.png",
    },
    {
      name: "Livia Bator1 ",
      role: "CEO",
      image: "/image1.png",
    },
    {
      name: "Randy Press1 ",
      role: "Director",
      image: "/image2.png",
    },
    {
      name: "Workman1 ",
      role: "Designer",
      image: "/image3.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [activeUserIndex, setActiveUserIndex] = useState(0);
  const [amount, setAmount] = useState("");

  const handleNext = () => {
    setStartIndex((prev) => {
      const newStartIndex = (prev + 1) % allContacts.length;
      if (!showLeftButton && newStartIndex > 0) {
        setShowLeftButton(true);
      }
      return newStartIndex;
    });
  };

  const handlePrevious = () => {
    setStartIndex((prev) => {
      const newIndex = (prev - 1 + allContacts.length) % allContacts.length;
      if (newIndex === 0) {
        setShowLeftButton(false);
      }
      return newIndex;
    });
  };

  const handleSend = () => {
    const visibleContacts = getVisibleContacts();
    const activeUser = visibleContacts[activeUserIndex];
    if (amount && activeUser) {
      alert(`Sending $${amount} to ${activeUser.name}`);
    } else {
      alert("Please enter an amount");
    }
  };

  const getVisibleContacts = () => {
    const contacts = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % allContacts.length;
      contacts.push(allContacts[index]);
    }
    return contacts;
  };

  return (
    <div className="bg-white px-6 py-9 space-y-7 rounded-3xl">
      <div className="flex items-center justify-between">
        {showLeftButton && (
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="size-7 text-gray-600" />
          </button>
        )}

        <div
          className={`flex gap-6 flex-1 ${
            showLeftButton ? "justify-evenly" : "justify-evenly"
          }`}
        >
          {getVisibleContacts().map((contact, index) => (
            <div
              key={index}
              className={`flex flex-col items-center min-w-[80px] cursor-pointer ${
                index === activeUserIndex
                  ? "scale-110 transition-transform"
                  : ""
              }`}
              onClick={() => setActiveUserIndex(index)}
            >
              <div
                className={`size-[70px] rounded-full overflow-hidden mb-2 ${
                  index === activeUserIndex ? "ring-4 ring-blue-500" : ""
                }`}
              >
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p
                  className={`text-sm font-medium text-gray-900 whitespace-nowrap ${
                    index === activeUserIndex ? "font-bold" : ""
                  }`}
                >
                  {contact.name}
                </p>
                <p className="text-xs text-[#718EBF]">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="size-7 text-gray-600" />
        </button>
      </div>

      <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
        <h2 className="text-nowrap text-[#718EBF]">Write Amount</h2>
        <div className="relative w-full">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-5 py-3 bg-gray-50 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="525.50"
          />
          <button
            onClick={handleSend}
            className="absolute text-white right-0 top-0 flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 hover:bg-gray-800 transition-colors"
          >
            Send <Send className="ml-2 size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
