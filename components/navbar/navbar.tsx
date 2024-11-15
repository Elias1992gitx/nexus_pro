"use client";

import { useState } from "react";
import * as React from "react";
import { Drawer } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "@/components/logo";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "@/components/icons";

// Types
interface Component {
  title: string;
  href: string;
  description: string;
  video?: string;
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  video?: string;
  title: string;
}

const components: Component[] = [
  {
    title: "Nexus Deep",
    href: "/products/nexus-deep",
    description: "Nexus Deep Fintech for Direct Investment",
    video: "https://res.cloudinary.com/dvsbujmsz/video/upload/v1723200570/NEXUS_DEEP_prspgj.mp4",
  },
  {
    title: "SSGI NET",
    href: "/products/ssgi-net",
    description: "Data Control Specific to Organizations",
    video: "https://res.cloudinary.com/dvsbujmsz/video/upload/v1723201072/VID_20240805_101830_448_gbkxdz.mp4",
  },
];

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex flex-col h-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-4 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
            <div className="flex-1" />
            {props.video && (
              <video
                src={props.video}
                autoPlay
                loop
                muted
                className="rounded-xl border"
              />
            )}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

const NavbarNL: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent): void => {
    setPlacement(e.target.value);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={12} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar className="fixed w-full xl:px-32 py-2 flex-1 md:flex md:items-center md:gap-12 bg-white z-50 shadow-sm justify-center">
      {/* Rest of your JSX remains the same, just ensure proper TypeScript typing */}
      {/* ... */}
    </Navbar>
  );
};

const BottomGradient: React.FC = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export { Navbar };