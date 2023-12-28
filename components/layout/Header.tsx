import React from "react";
import { MobileNav } from "./MobileNav";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/config/site";
function Header() {
  return (
    <div className="h-[90px] px-4 flex items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <Icons.logo className=" h-8 w-[8rem] text-white" />
        <div className="hidden lg:flex items-center gap-2">
          {NavLinks.map((item, i) => (
            <DesktopLink href={item.href} key={i}>
              {item.title}
            </DesktopLink>
          ))}
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
        "w-full p-6 text-lg bg-transparent text-left  justify-start",
        disabled && "pointer-events-none opacity-60",
      )}
    >
      {children}
    </Link>
  );
}
