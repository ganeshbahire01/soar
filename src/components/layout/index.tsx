import { Bell, Menu, Settings, X } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "../sidebar";
import Search from "../search";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <header className="bg-white lg:border-b ">
          <div className="flex items-center h-20  px-6 justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <h1 className="text-[28px] font-semibold text-[#343C6A]">
              Overview
            </h1>

            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <Search />
              </div>

              <button className="size-[50px] bg-[#F5F7FA] rounded-full hidden lg:block">
                <Settings color="#718EBF" size={25} className=" mx-auto" />
              </button>
              <button className="size-[50px] relative  bg-[#F5F7FA] rounded-full hidden lg:block">
                <Bell size={25} color="#718EBF" className="mx-auto " />
                <span className="absolute rounded-full p-1 border bg-[#F5F7FA] border-[#343C6A] top-3 right-3"></span>
              </button>
              <img
                src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JC2kgdYIgG4X1yZgP0YlIl3OKZ~bMwEVHHNT9SHwi5yUHBI~PdRecojG02O3RLSl6zeXmnAF~I8-3tlsyZ5NgFOSxlfbAdVyPqrC55cIL~EHUtKRwCfig0FBTrp6WbyoXghk1LY7er3fsLIIvBnOaf77rRMM649aBisewjHecPRehELdH-ogoCnYLHEmGd5835bxc1Fv20yBDSu0QkQYTpdHHWYfiK~PV~DAOYkHB2PU6gqIXgcGlossxlshuZfDmR2SwmZLhG2d59ueyEupsvSvxjlOUkBIvU9yv8c8eYlf~HaoeyCjIMwUAQ7t6CyyADXcmZf9kisfPtIDz~1TYg__"
                alt="Profile"
                className="size-14 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>
        </header>

        <main className="overflow-y-auto scrollbar-hide">{children}</main>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
