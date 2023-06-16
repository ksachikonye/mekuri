import { useReducer, memo } from "react";
import {
   componentReducer,
   useComponentUpdateEffect,
} from "./utils/updateComponent";
import { getCurrentComponent } from "./utils/getComponent";
import { useUnmountPrevEffect } from "./utils/unmountComponent";
import { useScrollRestoration } from "./utils/useScrollRestoration";
import { useMekuriDuration } from "../context/MekuriContext";

/*===============================================
type
===============================================*/
export type TMode = "sync" | "wait";
export type TRestore = "top" | "restore";
export type TComponentItem = {
   path: string;
   component: React.ReactElement;
};
export interface IMekuriLayoutProps {
   componentArr: TComponentItem[];
   children: React.ReactNode;
   mode: TMode;
   scrollRestoration: TRestore;
   router: string;
}

/**
 * MekuriLayout
 * @param props
 */

export const MekuriLayout = memo(function MekuriLayout({
   componentArr,
   mode,
   scrollRestoration,
   router,
   children,
}: IMekuriLayoutProps) {
   //get millisecond from context
   const millisecond = useMekuriDuration().millisecond;

   /*===============================================
	１get current component
	===============================================*/
   const [state, dispatch] = useReducer(componentReducer, {
      current: getCurrentComponent({ componentArr, router, children }),
      next: null,
      restorePos: {
         key: router,
         pos: 0,
      },
   });

   /*===============================================
	2 update component
	===============================================*/
   useComponentUpdateEffect({
      router,
      mode,
      millisecond,
      state,
      componentArr,
      children,
      dispatch,
   });

   /*===============================================
	3 unmount
	===============================================*/
   useUnmountPrevEffect({ state, mode, millisecond, dispatch });

   /*===============================================
	4 scroll restoration
	===============================================*/
   useScrollRestoration({ scrollRestoration, state });

   /*===============================================
	5 render
	===============================================*/
   return (
      <>
         {state.current && state.current}
         {state.next && state.next}
      </>
   );
});