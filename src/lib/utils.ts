import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const facultesList = ["Faculté des Sciences et de la Technologie (FST)", "Faculté des Sciences Exactes et Informatique (FSEI)", "Faculté des Sciences de la Nature et de la Vie (FSNV)", "Faculté des Sciences Economiques, Commerciales et des Sciences de Gestion (FSECSG)"]

