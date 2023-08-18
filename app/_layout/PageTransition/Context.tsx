"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@/packages/mekuri/src";

export const PageTransitionContext = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <MekuriContext
         millisecond={600}
         scrollRestoration="restore"
         mode="wait"
         trigger={pathname}>
         {children}
      </MekuriContext>
   );
};
