"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, Upload, FileText, X, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to check file size and formats
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];

const registrationSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid 10-digit Indian phone number.",
  }),
  pregnancyWeek: z.string().min(1, { message: "Pregnancy week/month is required." }),
  batch: z.enum(["morning", "evening"], {
    message: "Please select a preferred batch.",
  }),
  feePlan: z.enum(["1month", "3months", "6months"], {
    message: "Please select a fee plan.",
  }),
  // Consent Checks
  consentTwelveWeeks: z.boolean().refine((val) => val === true, {
    message: "You must confirm you have completed at least 12 weeks of pregnancy.",
  }),
  consentDoctorApproval: z.boolean().refine((val) => val === true, {
    message: "Doctor's approval confirmation is required.",
  }),
  consentNotSubstitute: z.boolean().refine((val) => val === true, {
    message: "You must confirm that you understand this is not a medical substitute.",
  }),
  consentVoluntary: z.boolean().refine((val) => val === true, {
    message: "You must confirm your voluntary participation.",
  }),
  consentRefund: z.boolean().refine((val) => val === true, {
    message: "You must accept our non-refundable & non-transferable terms.",
  }),
  consentTermsDisclaimer: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms, Policies, and Medical Disclaimer.",
  }),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const RegistrationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotError, setScreenshotError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      pregnancyWeek: "",
      batch: "morning",
      feePlan: "1month",
      consentTwelveWeeks: false,
      consentDoctorApproval: false,
      consentNotSubstitute: false,
      consentVoluntary: false,
      consentRefund: false,
      consentTermsDisclaimer: false,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScreenshotError(null);
    const files = e.target.files;
    if (!files || files.length === 0) {
      setScreenshotFile(null);
      return;
    }

    const file = files[0];

    // Validate type
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setScreenshotError("Supported formats are JPG, JPEG, PNG, PDF.");
      setScreenshotFile(null);
      return;
    }

    // Validate size
    if (file.size > MAX_FILE_SIZE) {
      setScreenshotError("Maximum file size is 10 MB.");
      setScreenshotFile(null);
      return;
    }

    setScreenshotFile(file);
  };

  const removeFile = () => {
    setScreenshotFile(null);
    setScreenshotError(null);
    const fileInput = document.getElementById("screenshot") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const onSubmit = async (data: RegistrationFormValues) => {
    // Screenshot validation check manually (since it is outside the default zod JSON inputs)
    if (!screenshotFile) {
      setScreenshotError("Payment screenshot upload is mandatory for registration confirmation.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API registration & screenshot upload
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Registration Submitted:", {
      ...data,
      screenshotName: screenshotFile.name,
      screenshotSize: screenshotFile.size,
    });
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setScreenshotFile(null);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl p-8 bg-white border border-border/50 text-center premium-shadow flex flex-col items-center justify-center min-h-[450px]"
      >
        <div className="h-16 w-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-dark mb-2">
          Registration Submitted!
        </h3>
        <p className="text-foreground/85 text-sm md:text-base max-w-lg mb-6 font-sans leading-relaxed">
          Your payment verification request and registration details have been received successfully.
        </p>
        
        {/* Next steps layout */}
        <div className="bg-background border border-border/60 rounded-2xl p-6 text-left max-w-md w-full space-y-4 mb-6">
          <h4 className="font-serif text-sm font-semibold text-primary-dark uppercase tracking-wider">
            What happens next:
          </h4>
          <ol className="list-decimal pl-5 text-xs text-foreground/80 space-y-2 font-sans">
            <li>Our team will verify the payment screenshot and registration details.</li>
            <li>Your medical clearances and trimesters are reviewed for safety.</li>
            <li>You will receive batch details and joining links within <strong>24 hours</strong>.</li>
            <li>You will be added to the official Yoga Delight WhatsApp support group.</li>
          </ol>
        </div>

        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary hover:text-primary-dark font-sans font-semibold text-sm underline cursor-pointer"
        >
          Submit another registration
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl p-6 md:p-8 bg-white border border-border/40 premium-shadow space-y-6"
    >
      <div className="border-b border-border/40 pb-4">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary-dark">
          Registration Form
        </h3>
        <p className="text-xs text-foreground/60 font-sans mt-1">
          Provide your intake details and upload your payment transaction screenshot.
        </p>
      </div>

      {/* Basic Info */}
      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-xs md:text-sm font-sans font-medium text-foreground/85 mb-1.5">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Shalini Roy"
            {...register("fullName")}
            className={`w-full rounded-xl px-4 py-2.5 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 ${
              errors.fullName ? "border-red-500" : "border-border"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.fullName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-sans font-medium text-foreground/85 mb-1.5">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. shalini@gmail.com"
              {...register("email")}
              className={`w-full rounded-xl px-4 py-2.5 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.email ? "border-red-500" : "border-border"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-sans">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs md:text-sm font-sans font-medium text-foreground/85 mb-1.5">
              WhatsApp Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 9876543210"
              {...register("phone")}
              className={`w-full rounded-xl px-4 py-2.5 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.phone ? "border-red-550" : "border-border"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="pregnancyWeek" className="block text-xs md:text-sm font-sans font-medium text-foreground/85 mb-1.5">
            Pregnancy Week
          </label>
          <input
            id="pregnancyWeek"
            type="text"
            placeholder="e.g. 14 Weeks (Must be at least 12 Weeks)"
            {...register("pregnancyWeek")}
            className={`w-full rounded-xl px-4 py-2.5 bg-background border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 ${
              errors.pregnancyWeek ? "border-red-500" : "border-border"
            }`}
          />
          {errors.pregnancyWeek && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.pregnancyWeek.message}</p>
          )}
        </div>
      </div>

      {/* Select Batch & Plan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-border/20">
        <div>
          <label htmlFor="batch" className="block text-xs md:text-sm font-sans font-medium text-foreground/85 mb-2">
            Preferred Batch
          </label>
          <select
            id="batch"
            {...register("batch")}
            className="w-full rounded-xl px-4 py-2.5 bg-background border border-border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
          >
            <option value="morning">Morning: 6:15 AM – 7:15 AM IST</option>
            <option value="evening">Evening: 5:00 PM – 6:00 PM IST</option>
          </select>
        </div>

        <div>
          <label htmlFor="feePlan" className="block text-xs md:text-sm font-sans font-medium text-foreground/85 mb-2">
            Selected Fee Plan
          </label>
          <select
            id="feePlan"
            {...register("feePlan")}
            className="w-full rounded-xl px-4 py-2.5 bg-background border border-border text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
          >
            <option value="1month">1 Month Plan – ₹1,499</option>
            <option value="3months">3 Month Plan – ₹3,999</option>
            <option value="6months">6 Month Plan – ₹7,999</option>
          </select>
        </div>
      </div>

      {/* Screenshot Upload Dropzone */}
      <div className="pt-2 border-t border-border/20 space-y-3">
        <label className="block text-xs md:text-sm font-sans font-medium text-foreground/85">
          Payment Screenshot Upload <span className="text-red-500">*</span>
        </label>
        
        <div className="relative">
          <input
            id="screenshot"
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          <AnimatePresence mode="wait">
            {!screenshotFile ? (
              <motion.label
                key="upload-prompt"
                htmlFor="screenshot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center border-2 border-dashed border-border hover:border-primary/50 rounded-2xl py-6 px-4 bg-background cursor-pointer hover:bg-primary-light/10 transition-all text-center group"
              >
                <Upload className="h-8 w-8 text-foreground/45 group-hover:text-primary transition-colors mb-2" />
                <span className="text-xs md:text-sm font-sans font-medium text-foreground/80">
                  Click to select transaction screenshot
                </span>
                <span className="text-[10px] md:text-xs text-foreground/50 font-sans mt-1">
                  Supported: JPG, JPEG, PNG, PDF (Max 10 MB)
                </span>
              </motion.label>
            ) : (
              <motion.div
                key="file-display"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-between border border-primary/20 bg-primary-light/20 rounded-2xl p-4"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm font-sans font-semibold text-primary-dark truncate">
                      {screenshotFile.name}
                    </p>
                    <p className="text-[10px] text-foreground/55 font-sans">
                      {(screenshotFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1 rounded-full hover:bg-primary/10 text-primary-dark cursor-pointer flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {screenshotError && (
          <p className="text-red-500 text-xs mt-1 font-sans flex items-center">
            <AlertCircle className="h-3.5 w-3.5 mr-1" />
            {screenshotError}
          </p>
        )}
      </div>

      {/* Consent Checkboxes */}
      <div className="pt-2 border-t border-border/20 space-y-3 bg-secondary-light/20 p-4 rounded-2xl">
        <h4 className="font-serif text-sm font-semibold text-primary-dark">
          Required Consents & Disclaimers
        </h4>
        <p className="text-[10px] md:text-xs text-foreground/75 font-sans leading-relaxed">
          Please check all statements below to complete your registration request.
        </p>

        <div className="space-y-3">
          {/* Consent 1 */}
          <div className="flex items-start">
            <input
              id="consentTwelveWeeks"
              type="checkbox"
              {...register("consentTwelveWeeks")}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1 cursor-pointer"
            />
            <label htmlFor="consentTwelveWeeks" className="ml-3 text-xs text-foreground/80 font-sans cursor-pointer select-none">
              I confirm that I have completed at least 12 weeks of pregnancy.
            </label>
          </div>
          {errors.consentTwelveWeeks && (
            <p className="text-red-500 text-[10px] pl-7 font-sans">{errors.consentTwelveWeeks.message}</p>
          )}

          {/* Consent 2 */}
          <div className="flex items-start">
            <input
              id="consentDoctorApproval"
              type="checkbox"
              {...register("consentDoctorApproval")}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1 cursor-pointer"
            />
            <label htmlFor="consentDoctorApproval" className="ml-3 text-xs text-foreground/80 font-sans cursor-pointer select-none">
              I have obtained approval from my doctor/gynecologist before joining the program.
            </label>
          </div>
          {errors.consentDoctorApproval && (
            <p className="text-red-500 text-[10px] pl-7 font-sans">{errors.consentDoctorApproval.message}</p>
          )}

          {/* Consent 3 */}
          <div className="flex items-start">
            <input
              id="consentNotSubstitute"
              type="checkbox"
              {...register("consentNotSubstitute")}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1 cursor-pointer"
            />
            <label htmlFor="consentNotSubstitute" className="ml-3 text-xs text-foreground/80 font-sans cursor-pointer select-none">
              I understand that this program is not a substitute for professional medical treatment.
            </label>
          </div>
          {errors.consentNotSubstitute && (
            <p className="text-red-500 text-[10px] pl-7 font-sans">{errors.consentNotSubstitute.message}</p>
          )}

          {/* Consent 4 */}
          <div className="flex items-start">
            <input
              id="consentVoluntary"
              type="checkbox"
              {...register("consentVoluntary")}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1 cursor-pointer"
            />
            <label htmlFor="consentVoluntary" className="ml-3 text-xs text-foreground/80 font-sans cursor-pointer select-none">
              I voluntarily choose to participate in these sessions.
            </label>
          </div>
          {errors.consentVoluntary && (
            <p className="text-red-500 text-[10px] pl-7 font-sans">{errors.consentVoluntary.message}</p>
          )}

          {/* Consent 5 */}
          <div className="flex items-start">
            <input
              id="consentRefund"
              type="checkbox"
              {...register("consentRefund")}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1 cursor-pointer"
            />
            <label htmlFor="consentRefund" className="ml-3 text-xs text-foreground/80 font-sans cursor-pointer select-none">
              I understand that all fees are non-refundable and non-transferable.
            </label>
          </div>
          {errors.consentRefund && (
            <p className="text-red-500 text-[10px] pl-7 font-sans">{errors.consentRefund.message}</p>
          )}

          {/* Consent 6 */}
          <div className="flex items-start">
            <input
              id="consentTermsDisclaimer"
              type="checkbox"
              {...register("consentTermsDisclaimer")}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1 cursor-pointer"
            />
            <label htmlFor="consentTermsDisclaimer" className="ml-3 text-xs text-foreground/80 font-sans cursor-pointer select-none">
              I agree to the Terms, Policies, and Medical Disclaimer of Yoga Delight.
            </label>
          </div>
          {errors.consentTermsDisclaimer && (
            <p className="text-red-500 text-[10px] pl-7 font-sans">{errors.consentTermsDisclaimer.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center font-sans font-semibold rounded-full py-3.5 gradient-primary text-white premium-shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
            Verifying and Submitting...
          </>
        ) : (
          "Complete Registration & Submit"
        )}
      </button>
    </form>
  );
};
