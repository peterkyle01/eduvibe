import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FormSchema = z.array(
  z.object({
    type: z.enum(['answerone', 'answertwo', 'answerthree', 'answerfour'], {
      required_error: 'Please select an answer.',
    }),
  }),
)

export type TformSchema = z.infer<typeof FormSchema>
