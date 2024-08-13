import { CircleUser, Menu, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TbOlympics } from "react-icons/tb";
const Navbar = () => {
  return (
    <header className="absolute top-0 flex justify-between h-16 items-center gap-4  bg-background px-4 md:px-6 z-10">
      <nav className="hidden flex-col gap-6 text-lg  md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 font-bold">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <TbOlympics className="h-8 w-8" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </nav>
      <nav className="hidden flex-col gap-6 text-lg font-bold md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 px-6 ">
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Players
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost"  size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <TbOlympics className="h-8 w-8" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Players
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      
    </header>
  );
};

export default Navbar;
