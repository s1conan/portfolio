"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

import { sendProposal } from "@/app/actions/contact";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Locale } from "@/lib/i18n/config";
import type {
  ContactCopy,
  SectionHeadingContent,
  ServiceCopy,
} from "@/lib/i18n/types";
import { cn } from "@/lib/utils";
import {
  initialContactFormState,
  type ContactFormState,
} from "@/lib/validations";

// Shared brutalist override for Input / Textarea / native select
const fieldClass =
  "brutal-border h-auto min-w-0 rounded-none bg-brutal-white p-4 font-mono text-base transition-colors focus-visible:border-brutal-black focus-visible:bg-brutal-yellow focus-visible:ring-0 placeholder:text-muted-foreground";

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors || errors.length === 0) return null;
  return (
    <p
      id={id}
      className="font-mono text-xs font-bold uppercase text-destructive"
    >
      {errors[0]}
    </p>
  );
}

interface ContactProps {
  locale: Locale;
  heading: SectionHeadingContent;
  copy: ContactCopy;
  services: ServiceCopy[];
}

export function Contact({ locale, heading, copy, services }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState<
    ContactFormState,
    FormData
  >(sendProposal, initialContactFormState);

  const projectTypes = [
    ...services.map((service) => service.title),
    copy.optionOther,
  ];

  // Toast and reset on success. Inputs stay uncontrolled so a failed action
  // preserves whatever the visitor typed without extra state.
  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error" && !state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section id="contact" className="brutal-border-b bg-brutal-white">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Label column — yellow */}
        <div className="col-span-1 flex flex-col justify-start bg-brutal-yellow p-6 text-brutal-black md:col-span-3 md:p-10 max-md:brutal-border-b md:brutal-border-r border-brutal-black">
          <span className="mb-4 block font-mono text-lg font-bold">
            {heading.index}
            {" // "}
            {heading.label}
          </span>
          <h2 className="break-words font-display text-4xl font-black uppercase leading-none tracking-tighter">
            {heading.titleTop}
            <br />
            {heading.titleBottom}
          </h2>
        </div>

        {/* Form column */}
        <div className="col-span-1 p-6 md:col-span-9 md:p-10">
          <form
            ref={formRef}
            action={formAction}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            noValidate
          >
            <input type="hidden" name="locale" value={locale} />

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="name"
                className="font-mono text-xs font-bold uppercase"
              >
                {copy.fieldLabels.name}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder={copy.placeholders.name}
                className={fieldClass}
                aria-invalid={!!state.errors?.name || undefined}
                aria-describedby={state.errors?.name ? "name-error" : undefined}
              />
              <FieldError id="name-error" errors={state.errors?.name} />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="font-mono text-xs font-bold uppercase"
              >
                {copy.fieldLabels.email}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={copy.placeholders.email}
                className={fieldClass}
                aria-invalid={!!state.errors?.email || undefined}
                aria-describedby={
                  state.errors?.email ? "email-error" : undefined
                }
              />
              <FieldError id="email-error" errors={state.errors?.email} />
            </div>

            {/* COMPANY */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="company"
                className="font-mono text-xs font-bold uppercase"
              >
                {copy.fieldLabels.company}
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder={copy.placeholders.company}
                className={fieldClass}
              />
            </div>

            {/* PROJECT TYPE — native select */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="projectType"
                className="font-mono text-xs font-bold uppercase"
              >
                {copy.fieldLabels.projectType}
              </Label>
              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                className={cn(fieldClass, "appearance-none cursor-pointer")}
                aria-invalid={!!state.errors?.projectType || undefined}
                aria-describedby={
                  state.errors?.projectType ? "projectType-error" : undefined
                }
              >
                <option value="">{copy.placeholders.projectType}</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <FieldError
                id="projectType-error"
                errors={state.errors?.projectType}
              />
            </div>

            {/* BUDGET */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <Label
                htmlFor="budget"
                className="font-mono text-xs font-bold uppercase"
              >
                {copy.fieldLabels.budget}
              </Label>
              <Input
                id="budget"
                name="budget"
                type="text"
                placeholder={copy.placeholders.budget}
                className={fieldClass}
              />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <Label
                htmlFor="details"
                className="font-mono text-xs font-bold uppercase"
              >
                {copy.fieldLabels.details}
              </Label>
              <Textarea
                id="details"
                name="details"
                required
                rows={4}
                placeholder={copy.placeholders.details}
                className={cn(fieldClass, "resize-none")}
                aria-invalid={!!state.errors?.details || undefined}
                aria-describedby={
                  state.errors?.details ? "details-error" : undefined
                }
              />
              <FieldError id="details-error" errors={state.errors?.details} />
            </div>

            {/* Form-level message */}
            {state.status !== "idle" && state.message && (
              <p
                role="status"
                className={cn(
                  "md:col-span-2 brutal-border p-4 font-mono text-sm font-bold uppercase",
                  state.status === "success"
                    ? "bg-brutal-yellow text-brutal-black"
                    : "bg-brutal-black text-brutal-yellow",
                )}
              >
                {state.message}
              </p>
            )}

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={pending}
                className="w-full bg-brutal-yellow px-8 py-4 font-display text-xl font-black uppercase text-brutal-black brutal-border shadow-brutal transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-hover disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
              >
                {pending ? copy.submitting : copy.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
