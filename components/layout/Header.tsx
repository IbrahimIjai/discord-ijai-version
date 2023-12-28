import React from "react";
import { MobileNav } from "./MobileNav";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/config/site";
function Header() {
  return (
    <div className="h-[90px] px-6 lg:px-12 flex items-center justify-center fixed inset-x-0 top-0 ">
      <div className="flex items-center justify-between w-full">
        <Icons.logo className=" h-8 w-[8rem] lg:w-[12rem]  lg:h-12 text-white" />
        <div className="hidden lg:flex items-center gap-2">
          {NavLinks.map(
            (item, i) =>
              i > 0 && (
                <DesktopLink href={item.href} key={i}>
                  {item.title}
                </DesktopLink>
              ),
          )}
        </div>
        <div className="flex items-center gap-3">
          <Button className="whitespace-nowrap">Open Discord</Button>
          <MobileNav />
        </div>
      </div>
    </div>
  );
}

export default Header;

interface DesktopLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
}
function DesktopLink({ children, href, disabled }: DesktopLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "w-full p-6 text-lg bg-transparent text-left font-semibold  text-white justify-start",
        disabled && "pointer-events-none opacity-60",
      )}
    >
      {children}
    </Link>
  );
}
