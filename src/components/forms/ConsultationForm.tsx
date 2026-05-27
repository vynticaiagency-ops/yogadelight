"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const consultationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid 10-digit Indian phone number.",
  }),
  stage: z.enum(["planning", "pregnant", "postpartum", "wellness"], {
    message: "Please select your current health stage.",
  }),
  pregnancyWeek: z.string().optional(),
  primaryGoal: z.string().min(5, {
    message: "Please specify your health goals or primary concerns (min 5 characters).",
  }),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    message: "Please select a preferred contact time.",
  }),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

export const ConsultationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      stage: "pregnant",
      pregnancyWeek: "",
      primaryGoal: "",
      preferredTime: "evening",
    },
  });

  const selectedStage = watch("stage");

  const onSubmit = async (data: ConsultationFormValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Consultation Form Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl p-8 bg-white border border-border/50 text-center premium-shadow flex flex-col items-center justify-center min-h-[380px]"
      >
        <div className="h-16 w-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-4">
          <Calendar className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-primary-dark mb-2">
          Consultation Booked!
        </h3>
        <p className="text-foreground/70 text-sm md:text-base max-w-md mb-6 font-sans">
          Your free assessment has been scheduled. Dr. Madhavi Soriya will connect with you via Phone/WhatsApp to share details for the video consultation.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary hover:text-primary-dark font-sans font-semibold text-sm underline cursor-pointer"
        >
          Book another slot
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
          placeholder="e.g. Aditi Patel"
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
            placeholder="e.g. aditi.patel@gmail.com"
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
            WhatsApp Phone Number
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="stage" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
            Your Current Stage
          </label>
          <select
            id="stage"
            {...register("stage")}
            className="w-full rounded-xl px-4 py-3 bg-background border border-border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all cursor-pointer"
          >
            <option value="planning">Planning Pregnancy / Fertility Support</option>
            <option value="pregnant">Currently Pregnant</option>
            <option value="postpartum">Postpartum / New Mother</option>
            <option value="wellness">General Health & Wellness</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
            Preferred Time to Call
          </label>
          <select
            id="preferredTime"
            {...register("preferredTime")}
            className="w-full rounded-xl px-4 py-3 bg-background border border-border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all cursor-pointer"
          >
            <option value="morning">Morning (9 AM – 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
            <option value="evening">Evening (4 PM – 7 PM)</option>
          </select>
        </div>
      </div>

      {selectedStage === "pregnant" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-1.5"
        >
          <label htmlFor="pregnancyWeek" className="block text-sm font-sans font-medium text-foreground/80">
            How many weeks pregnant are you?
          </label>
          <input
            id="pregnancyWeek"
            type="text"
            placeholder="e.g. 14 weeks"
            {...register("pregnancyWeek")}
            className="w-full rounded-xl px-4 py-3 bg-background border border-border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </motion.div>
      )}

      <div>
        <label htmlFor="primaryGoal" className="block text-sm font-sans font-medium text-foreground/80 mb-1.5">
          Primary Concern or Goal
        </label>
        <textarea
          id="primaryGoal"
          rows={3}
          placeholder="e.g. Back pain relief, PCOD management, anxiety reduction, safe labour tips..."
          {...register("primaryGoal")}
          className={`w-full rounded-xl px-4 py-3 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all resize-none ${
            errors.primaryGoal ? "border-red-500 focus:ring-red-200" : "border-border focus:ring-primary/20"
          }`}
        />
        {errors.primaryGoal && (
          <p className="text-red-500 text-xs mt-1 font-sans">{errors.primaryGoal.message}</p>
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
            Booking Slot...
          </>
        ) : (
          "Book Free Consultation Slot"
        )}
      </button>
    </form>
  );
};
