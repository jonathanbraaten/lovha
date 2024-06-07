import { z } from 'zod';
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const ContactSchema = z.object({
  name: z.string().min(1, { message: 'Vennligst fyll ut dette feltet' }),
  email: z
    .string()
    .min(1, { message: 'Vennligst fyll ut dette feltet' })
    .regex(emailRegex, { message: 'Vennligst skriv en godkjent email' }),

  message: z.string().max(200, { message: 'Maximum 200' }),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
