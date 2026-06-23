import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, Toaster } from "sonner";
import MagneticButton from "./MagneticButton";

const API = `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api`;

const projectTypes = [
  "UI/UX Design",
  "Website Design",
  "Branding",
  "Mobile App",
  "Marketing Creatives",
  "Other",
];
const budgets = ["< $2K", "$2K – $5K", "$5K – $15K", "$15K – $50K", "$50K+"];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    budget: budgets[1],
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10) e.message = "Tell us a bit more";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thanks! Mahesh will get back to you within 24 hours.");
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: projectTypes[0],
        budget: budgets[1],
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again or email hello@designadda.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-obsidian text-white py-24 md:py-32 lg:py-40 overflow-hidden"
      data-testid="contact-section"
    >
      <Toaster theme="dark" position="bottom-right" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-10 h-px bg-white/40" />
              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
                Let&apos;s Talk
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tighter">
              Let&apos;s build something{" "}
              <span className="italic text-white/55">remarkable</span> together.
            </h2>

            <div className="mt-14 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Email
                </p>
                <a
                  href="mailto:hello@designadda.com"
                  className="font-display text-2xl md:text-3xl link-underline"
                  data-testid="contact-email-link"
                >
                  hello@designadda.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  WhatsApp
                </p>
                <a
                  href="tel:+919999999999"
                  className="font-display text-2xl md:text-3xl link-underline"
                  data-testid="contact-phone-link"
                >
                  +91 99999 99999
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Studio
                </p>
                <p className="text-lg text-white/80">Bangalore · India · GMT+5:30</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={onSubmit}
              className="space-y-8"
              data-testid="contact-form"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="minimal-input"
                    data-testid="contact-input-name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1" data-testid="contact-error-name">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="minimal-input"
                    data-testid="contact-input-email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1" data-testid="contact-error-email">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Optional"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="minimal-input"
                    data-testid="contact-input-phone"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Project Type
                  </label>
                  <select
                    value={form.projectType}
                    onChange={(e) => update("projectType", e.target.value)}
                    className="minimal-input appearance-none cursor-pointer"
                    data-testid="contact-input-project-type"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-obsidian text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Budget
                </label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => update("budget", b)}
                      className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                        form.budget === b
                          ? "bg-white text-obsidian border-white"
                          : "border-white/20 text-white/70 hover:border-white/50"
                      }`}
                      data-testid={`contact-budget-${b.replace(/[^a-zA-Z0-9]/g, "")}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  placeholder="A few lines about what you're building..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="minimal-input resize-none"
                  data-testid="contact-input-message"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1" data-testid="contact-error-message">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 rounded-full bg-white text-obsidian font-medium px-8 py-4 hover:scale-[1.03] transition-transform disabled:opacity-50"
                  data-testid="contact-submit-button"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                  <span aria-hidden>↗</span>
                </button>
                <p className="text-white/50 text-sm">
                  Average response time: <span className="text-white">under 24h</span>
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
