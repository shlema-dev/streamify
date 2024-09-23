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

export function getMonthName(dateString: string): string {
  const [year, month] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1); // month is 0-indexed in JS Date
  return date.toLocaleString("default", { month: "long" });
}
