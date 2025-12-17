"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/* ---------------- TYPES ---------------- */
type TextField = "firstName" | "lastName" | "phone" | "email";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  newsletter: boolean;
};

interface InputFieldProps {
  label: string;
  id: TextField;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

/* ------------ INPUT COMPONENT ------------ */
/* IMPORTANT : hors du composant principal */
const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-600">*</span>
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border border-gray-300 py-3 px-3 text-gray-700 shadow-sm
                   focus:border-red-500 focus:ring-red-500 sm:text-sm"
        required
      />
    </div>
  );
};

/* ------------ MAIN FORM ------------ */
const ContactDetailsForm2: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /* ✅ FIX TYPE-SAFE */
  const handleChange = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess("Message sent successfully.");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        newsletter: false,
      });
    } catch {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto bg-white ${inter.className} py-6`}
    >
      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Email us
      </h1>

      {/* CONTACT DETAILS */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Contact details
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          We'll use this information to send booking confirmations and updates.
        </p>
      </div>

      {/* INPUTS */}
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
        <InputField
          label="First name"
          id="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={(v) => handleChange("firstName", v)}
        />

        <InputField
          label="Last name"
          id="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={(v) => handleChange("lastName", v)}
        />

        <InputField
          label="Phone"
          id="phone"
          type="tel"
          placeholder="+90 5xx xxx xx xx"
          value={formData.phone}
          onChange={(v) => handleChange("phone", v)}
        />

        <InputField
          label="Email address"
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(v) => handleChange("email", v)}
        />
      </div>

      {/* MESSAGE */}
      <div className="mt-8">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          How can we help? <span className="text-orange-600">*</span>
        </label>

        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Write your message here..."
          className="block w-full rounded-md border border-gray-300 py-3 px-3 text-gray-700 shadow-sm
                     focus:border-red-500 focus:ring-red-500 sm:text-sm"
          required
        />
      </div>

      {/* NEWSLETTER */}
      <div className="mt-6">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
          E-newsletter
        </p>

        <label className="flex items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) =>
              handleChange("newsletter", e.target.checked)
            }
            className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
          />
          <span>
            Yes please, sign me up for emails, updates, special offers, and the
            latest insider information from all our destinations.
          </span>
        </label>
      </div>

      {/* STATUS */}
      {success && (
        <p className="mt-4 text-green-600 text-sm">{success}</p>
      )}
      {error && (
        <p className="mt-4 text-red-600 text-sm">{error}</p>
      )}

      {/* SUBMIT */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto rounded-md bg-orange-600 px-6 py-3
                     text-sm font-semibold text-white shadow-sm
                     hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-red-500
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactDetailsForm2;
