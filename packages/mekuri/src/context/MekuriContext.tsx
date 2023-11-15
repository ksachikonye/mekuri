import { createContext, useContext, useState } from "react";
import { useUpdateMekuriState } from "./useUpdateMekuriState";

export type Mode = "sync" | "wait";
export type Phase = "leave" | "enter";
export type ReatrationType = "top" | "restore";
export type Trigger = string | number;

/** Manually do scroll restration with onLeave or onEnter */
type CustomRestration = {
   scrollRestoration: ReatrationType;
   onLeave?: (pos: number) => void;
   onEnter?: (pos: number) => void;
};
export type ScrollRestration = ReatrationType | "none" | CustomRestration;

export type MekuriState = {
   prevTrigger: Trigger | null;
   currentTrigger: Trigger | null;
   nextTrigger: Trigger | null;
   phase: Trigger | null;
   yPosBeforeLeave: number;
};
type DurationState = {
   millisecond: number;
   second: number;
};
type ConstantState = {
   scrollRestoration: ScrollRestration;
   mode: Mode;
};
type MekuriContext = {
   trigger: Trigger;
   millisecond: number;
   scrollRestoration: ScrollRestration;
   mode: Mode;
   children: React.ReactNode;
};

const defaultDurationState: DurationState = {
   millisecond: 0,
   second: 0,
};
const defaultMekuriState: MekuriState = {
   prevTrigger: null,
   currentTrigger: null,
   nextTrigger: null,
   phase: null,
   yPosBeforeLeave: 0,
};
const defaultConstantState: ConstantState = {
   scrollRestoration: "top",
   mode: "wait",
};
const DurationContext = createContext<DurationState>(defaultDurationState);
const MekuriStateContext = createContext<MekuriState>(defaultMekuriState);
const ConstantContext = createContext<ConstantState>(defaultConstantState);

/**
 * <Mekuri> should be wrapped in this <MekuriContext>. UseMekuriAnimation is available inside a context-wrapped component.
 *
 * @param trigger string | number When doing page transition animation, it is also possible to set pathname and other states to trigger
 * @param millisecond number Set the wait time in milliseconds before removing from tree.
 * @param scrollRestoration "top" | "restore" | "none" | {
   scrollRestoration: "top" | "restore";
   onLeave?: (pos: number) => void;
   onEnter?: (pos: number) => void;
} If you select none, scrollRestration does nothing. It is also possible to pass an object instead of a string. The onLeave | onEnter function returns pos at the timing of leave or enter.
 * @param mode "wait" | "sync"
 * @public
 */
export const MekuriContext = ({
   trigger,
   millisecond = 1000,
   scrollRestoration = "top",
   mode = "wait",
   children,
}: MekuriContext) => {
   const [constantState] = useState({
      scrollRestoration,
      mode,
   });

   const [durationState] = useState({
      millisecond,
      second: millisecond / 1000,
   });

   const [mekuriState, setMekuriState] = useState<MekuriState>({
      prevTrigger: null,
      currentTrigger: trigger,
      nextTrigger: null,
      phase: null,
      yPosBeforeLeave: 0,
   });

   useUpdateMekuriState({
      trigger,
      setMekuriState,
      millisecond,
   });

   return (
      <DurationContext.Provider value={durationState}>
         <ConstantContext.Provider value={constantState}>
            <MekuriStateContext.Provider value={mekuriState}>
               {children}
            </MekuriStateContext.Provider>
         </ConstantContext.Provider>
      </DurationContext.Provider>
   );
};

export const useMekuriDuration = () => useContext(DurationContext);
export const useConstantState = () => useContext(ConstantContext);
export const useMekuriState = () => useContext(MekuriStateContext);
