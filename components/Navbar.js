"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn.js";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 mx-4 bg-background/50 sticky top-0 border-b backdrop-blur z-10">
      <Link href={"/"}>
        <div className="text-2xl font-bold">BloggerXYZ</div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className="p-2 hover:text-primary hover:font-bold active:text-secondary hover:scale-110 transition-transform duration-300 ease-in-out">
          Home
        </Link>
        <Link href="/about" className="p-2 hover:text-primary hover:font-bold active:text-secondary hover:scale-110 transition-transform duration-300 ease-in-out">
          About
        </Link>
        <Link href="/blog" className="p-2 hover:text-primary hover:font-bold active:text-secondary hover:scale-110 transition-transform duration-300 ease-in-out">
          Blog
        </Link>
        <Link href="/contact" className="p-2 hover:text-primary hover:font-bold active:text-secondary hover:scale-110 transition-transform duration-300 ease-in-out">
          Contact
        </Link>
        <div className="flex items-center mx-2">
        <Button variant="outline" size="sm" className={'mx-2 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300 ease-in-out'}>Login</Button>
        <Button variant="outline" size="sm" className={'mx-2 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300 ease-in-out'}>Sign Up</Button>
        <ModeToggle/>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet >
            <span className="mx-2">
                <ModeToggle/>
            </span>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[250px] bg-cyan-500" 
            overlayClassName="bg-black/20" // Lighter dim
          >
            <div className="flex flex-col space-y-4 mt-6">
              <Link href="/" className="p-2 hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="p-2 hover:text-primary">
                About
              </Link>
              <Link href="/blog" className="p-2 hover:text-primary">
                Blog
              </Link>
              <Link href="/contact" className="p-2 hover:text-primary">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 items-center">
                <Button variant="outline" className="w-[120px]">
                  Login
                </Button>
                <Button variant="outline" className="w-[120px]">
                  Sign Up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;