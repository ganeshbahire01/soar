import React from "react";
import chipCard from "@/assets/Chip_Card.png";
import chipCard2 from "@/assets/Chip_Card2.png";

interface CardProps {
  variant?: "dark" | "light";
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

const CreditCard: React.FC<CardProps> = ({
  variant = "dark",
  balance,
  cardHolder,
  validThru,
  cardNumber,
}) => {
  const bgColor = variant === "dark" ? "bg-gray-800" : "bg-white";
  const textColor = variant === "dark" ? "text-white" : "text-gray-800";
  const labelColor = variant === "dark" ? "text-gray-400" : "text-blue-500";

  return (
    <div
      className={`${bgColor} ${textColor}  m-1 border p-6 rounded-3xl min-w-[265px] xl:min-w-[350px] px-7 py-6`}
    >
      <div className="flex justify-between  mb-8">
        <div>
          <div className={labelColor}>Balance</div>
          <div className="text-2xl font-semibold">
            ${balance.toLocaleString()}
          </div>
        </div>
        <img
          src={variant === "dark" ? chipCard : chipCard2}
          className="object-contain"
        />
      </div>

      <div className="flex justify-between mb-8">
        <div>
          <div className={labelColor}>CARD HOLDER</div>
          <div>{cardHolder}</div>
        </div>
        <div>
          <div className={labelColor}>VALID THRU</div>
          <div>{validThru}</div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-mono text-xl">
          {cardNumber.slice(0, 4)} **** **** {cardNumber.slice(-4)}
        </div>
        <div className="">
          <div className="flex ">
            <div className="size-[30px] rounded-full bg-gray-400 opacity-70"></div>
            <div className="size-[30px] -ml-3 rounded-full bg-gray-400 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
