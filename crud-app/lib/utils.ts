import { clsx } from "clsx"; // or "classnames"
import { twMerge } from "tailwind-merge"; // or "tailwind-merge"

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
