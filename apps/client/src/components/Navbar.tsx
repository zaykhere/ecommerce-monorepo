import Link from "next/link";
import Image from "next/image";
import SearchBar from "./Searchbar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
        <Link href={"/"} className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9" />
          <p className="hidden md:block text-md font-medium uppercase tracking-wider">Threadly</p>
        </Link>
      {/* RIGHT  */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600 cursor-pointer" />
        <ShoppingCartIcon />
        <Link href="/">Sign in</Link>
      </div>
    </nav>
  )
}

export default Navbar