import { clsx, type ClassValue } from "clsx";

/** Combines conditional class values into a single className string. */
export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}
