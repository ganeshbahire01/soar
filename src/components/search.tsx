import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative">
      <SearchIcon
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
      />
      <input
        type="text"
        placeholder="Search for something"
        className=" pl-10 pr-4  py-2 h-12 w-full rounded-full bg-gray-50 border-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}
