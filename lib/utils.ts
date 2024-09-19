import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  let firstLast = name.split(" ");
  const first = firstLast[0][0];
  const last = firstLast[1][0];
  console.log(first);

  return `${first}${last}`;
}
