import { z } from "zod";

import type { Dictionary } from "@/lib/i18n/types";

export function createContactSchema(
  messages: Dictionary["contact"]["validation"],
) {
  return z.object({
    name: z.string().trim().min(1, messages.nameRequired),
    email: z.email(messages.invalidEmail),
    company: z.string().optional(),
    projectType: z.string().optional(),
    budget: z.string().optional(),
    details: z.string().optional(),
  });
}

export type ContactFormData = z.infer<
  ReturnType<typeof createContactSchema>
>;

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
}

export const initialContactFormState: ContactFormState = { status: "idle" };
