import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

/*===============================================
いじる
===============================================*/
/********************
const
********************/
export type TPageMekuriDuration = 800;
export type TPageMekuriStateName = "pageMekuriTrigger";
export const PAGEMEKURISTATE: { mekuri: TState } = {
   mekuri: {
      duration: 800,
      second: function () {
         return this.duration / 1000;
      },
      name: "pageMekuriTrigger",
   },
};
interface IPageMekuriStore {
   pageMekuriTrigger: IPageMekuriProps;
   setPageMekuriTrigger: (props: IPageMekuriProps) => void;
}

/********************
create store
********************/
export const usePageMekuriStore = create<
   IPageMekuriStore,
   [["zustand/subscribeWithSelector", never]]
>(
   subscribeWithSelector((set) => ({
      pageMekuriTrigger: {
         path: null,
         phase: null,
         duration: PAGEMEKURISTATE.mekuri.duration,
         second: PAGEMEKURISTATE.mekuri.second(),
      },
      setPageMekuriTrigger: (props) =>
         set((state) => ({
            ...state,
            pageMekuriTrigger: {
               ...state.pageMekuriTrigger,
               ...props,
            },
         })),
   }))
);

/*===============================================
いじらない
===============================================*/
export interface IPageMekuriProps {
   path?: string | null;
   phase?: "leave" | "enter" | null;
   duration?: TPageMekuriDuration;
   second?: number;
}
type TState = {
   duration: TPageMekuriDuration;
   second: () => number;
   name: TPageMekuriStateName;
};