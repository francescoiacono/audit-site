import { clsx, type ClassValue } from "clsx";

/** Combines conditional class values into a single className string. */
export const cn = (...inputs: ClassValue[]) => clsx(...inputs);
