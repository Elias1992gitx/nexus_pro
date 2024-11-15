"use client";
import Link from "next/link";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";

export const Logo = () => {
  const user = useCurrentUser();
  const pathname = usePathname();

  const redirect = user && pathname !== "/" ? "/" : "/";

  return (
    <Link href={redirect}>
      <div className="hover:opacity-75 transition items-center gap-x-2 flex">
        <Image
          src="/nl-logo.svg"
          height="60"
          width="60"
          alt="Logo"
          className="dark:hidden"
        />
        <Image
          src="/nl-dark-logo.svg"
          height="60"
          width="60"
          alt="Logo"
          className="hidden dark:block"
        />
      </div>
    </Link>
  );
};
