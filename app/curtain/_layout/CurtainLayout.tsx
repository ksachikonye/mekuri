"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { PAGEMEKURISTATE } from "../../app-hooks";
import styles from "./curtain.module.scss";

import {
   PageMekuriLayout,
   usePageMekuriAnimation,
} from "@/packages/page-mekuri";

/*===============================================
pageMekuriLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Child from "../about/[id]/page";
import Home from "../page";

const componentArr = [
   { path: "/curtain/about/★", component: <Child /> },
   { path: "/curtain/about", component: <About /> },
   { path: "/curtain", component: <Home /> },
];

export const CurtainLayout = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   usePageMekuriAnimation({
      isReRender: false,
      mode: "wait",
      leave: ({ isCurrent }) => {
         if (isCurrent(["/"])) return;
         gsap.to(ref.current, {
            y: 0,
            duration: PAGEMEKURISTATE.second(),
            ease: "power3.out",
         });
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
         gsap.to(ref.current, {
            y: "100%",
            duration: PAGEMEKURISTATE.second(),
            ease: "power3.out",
         });
      },
   });
   return (
      <main className="ly_main">
         <PageMekuriLayout
            millisecond={PAGEMEKURISTATE.millisecond}
            componentArr={componentArr}
            mode="wait"
            scrollRestoration="restore">
            {children}
         </PageMekuriLayout>
         <div ref={ref} className={styles.curtain}></div>
      </main>
   );
};
