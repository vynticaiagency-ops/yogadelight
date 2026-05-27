"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid 10-digit Indian phone number.",
  }),
  programInterest: z.enum(["prenatal", "fertility", "wellness", "other"], {
    message: "Please select a program of interest.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      programInterest: "prenatal",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact Form Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl p-8 bg-white border border-border/50 text-center premium-shadow flex flex-col items-center justify-center min-h-[350px]"
      >
        <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
        <h3 className="font-serif text-2xl font-semibold text-primary-dark mb-2">
          Thank you!
        </h3>
        <p className="text-foreground/70 text-sm md:text-base max-w-md mb-6 font-sans">
          We have received your message. Dr. Madhavi Soriya or a member of the Yoga Delight team will get back to you within 24 hours at your email address.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary hover:text-primary-dark font-sans font-semibold text-sm underline cursor-pointer"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl p-6 md:p-8 bg-white border border-border/50 premium-shadow space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Priyanjali Sharma"
          {...register("name")}
          className={`w-full rounded-xl px-4 py-3 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all ${
            errors.name ? "border-red-500 focus:ring-red-200" : "border-border focus:ring-primary/20"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1 font-sans">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. sharma.p@gmail.com"
            {...register("email")}
            className={`w-full rounded-xl px-4 py-3 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all ${
              errors.email ? "border-red-500 focus:ring-red-200" : "border-border focus:ring-primary/20"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 9876543210"
            {...register("phone")}
            className={`w-full rounded-xl px-4 py-3 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all ${
              errors.phone ? "border-red-500 focus:ring-red-200" : "border-border focus:ring-primary/20"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="programInterest" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
          Program Interest
        </label>
        <select
          id="programInterest"
          {...register("programInterest")}
          className={`w-full rounded-xl px-4 py-3 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all cursor-pointer ${
            errors.programInterest ? "border-red-500" : "border-border"
          }`}
        >
          <option value="prenatal">Prenatal Yoga & Garbhasanskar</option>
          <option value="fertility">Fertility Yoga & Wellness</option>
          <option value="wellness">Holistic Women's Wellness</option>
          <option value="other">General Query / Other</option>
        </select>
        {errors.programInterest && (
          <p className="text-red-500 text-xs mt-1 font-sans">{errors.programInterest.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="How can Dr. Madhavi help you today?"
          {...register("message")}
          className={`w-full rounded-xl px-4 py-3 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all resize-none ${
            errors.message ? "border-red-500 focus:ring-red-200" : "border-border focus:ring-primary/20"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 font-sans">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center font-sans font-medium rounded-full py-3.5 gradient-primary text-white premium-shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};
