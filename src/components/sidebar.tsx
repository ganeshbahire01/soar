import { Link, useLocation } from "react-router";
import CreditCardIcon from "./icons/credit-card";
import HomeIcon from "./icons/home";
import InvestmentIcon from "./icons/investment";
import LoanIcon from "./icons/loan";
import LogoIcon from "./icons/logo";
import PrivilegesIcon from "./icons/privileges";
import ServicesIcon from "./icons/services";
import SettingIcon from "./icons/settings";
import TransactionIcon from "./icons/transaction";
import UserIcon from "./icons/user";

const navItems = [
  { icon: HomeIcon, label: "Dashboard", active: true, href: "/dashboard" },
  { icon: TransactionIcon, label: "Transactions", href: "#" },
  { icon: UserIcon, label: "Accounts", href: "#" },
  { icon: InvestmentIcon, label: "Investments", href: "#" },
  { icon: CreditCardIcon, label: "Credit Cards", href: "#" },
  { icon: LoanIcon, label: "Loans", href: "#" },
  { icon: ServicesIcon, label: "Services", href: "#" },
  { icon: PrivilegesIcon, label: "My Privileges", href: "#" },
  { icon: SettingIcon, label: "Setting", href: "/setting" },
];

export default function Sidebar({
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
}) {
  const location = useLocation();

  return (
    <aside
      className={`
        fixed lg:static top-0 left-0 bg-white
        w-[250px] shadow-sm border-r border-gray-200
        transition-transform h-screen duration-300 ease-in-out
        lg:translate-x-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        z-30
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 px-5 py-6">
        <LogoIcon />
        <div className="font-bold text-2xl text-[#343C6A]">Soar Task</div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-4">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={index}
              to={item.href}
              className={`
                flex items-center gap-[26px] pl-9 py-3 rounded-lg mb-2
                transition-colors duration-200 
                ${
                  isActive
                    ? "text-[#232323]"
                    : "hover:text-[#232323] text-[#B1B1B1]"
                }
              `}
            >
              <item.icon />
              <span className="text-[18px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
