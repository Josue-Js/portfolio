import { useContext } from "react";
import { LangContext } from "@/context/LangContext";

export function useLang() {
  const context = useContext(LangContext);
  return context
}