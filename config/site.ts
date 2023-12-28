export const NavLinks = [
  { title: "Home", href: "/", isButton: false },
  { title: "Download", href: "/download", isButton: false },
  { title: "Nitro", href: "/nitro", isButton: true },
  { title: "Discover", href: "/discover", isButton: false },
  { title: "Safety", href: "/safety", isButton: false },
  { title: "Support", href: "/support", isButton: false },
  {
    title: "Blog",
    href: "https://blog.discord.com",
    external: true,
    isButton: false,
  },
  {
    title: "Careers",
    href: "https://discord.com/jobs",
    external: true,
    isButton: false,
  },
] satisfies NavItem[];

//types

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  isButton?: boolean;
};
