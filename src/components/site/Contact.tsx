import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Loader2, Send } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { toast } from "sonner";

const courses = [
  "Little Art Master",
  "Junior Art",
  "Drawing & Painting",
  "Painting",
  "Pencil Shading",
  "Craft Work",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const parentName = data.get("parent_name");
    const studentName = data.get("student_name");
    const age = data.get("age");
    const phone = data.get("phone");
    const email = data.get("email");
    const course = data.get("course");
    const message = data.get("message");

    const whatsappMessage = `
🎨 *New Enrollment Inquiry*

👤 Parent Name: ${parentName}
🧒 Student Name: ${studentName}
🎂 Age: ${age}
📞 Phone: ${phone}
📧 Email: ${email}
🖌️ Course: ${course}

💬 Message:
${message}
    `;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encodeURIComponent(
  whatsappMessage
)}`;

    window.open(whatsappURL, "_blank");

    toast.success("Redirecting to WhatsApp...");

    form.reset();

    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="watercolor-blob bg-primary/30 h-80 w-80 top-20 -left-20" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <p className="font-script text-3xl text-primary">Get in touch</p>

          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Begin your art journey with us.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Drop by the studio, call, message us on WhatsApp, or fill the enrollment form.
            We usually respond within a day.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=Hello`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft hover:border-primary transition"
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-green-500/15 text-green-600 dark:text-green-400">
                <MessageCircle className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </p>

                <p className="font-medium">+91 8197119784</p>
              </div>
            </a>

            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft hover:border-primary transition"
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Call
                </p>

                <p className="font-medium">{SITE.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft hover:border-primary transition"
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-secondary/15 text-secondary">
                <Mail className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </p>

                <p className="font-medium">{SITE.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent/30 text-accent-foreground">
                <MapPin className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Studio
                </p>

                <p className="font-medium text-sm">{SITE.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-soft">
            <iframe
              src="https://www.google.com/maps?q=Third+Eye+School+of+Art,+19+Sai+Orchard+Layout,+Hesaraghatta+Road,+Vidyaranyapura,+Bengaluru+560097&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              title="Studio location"
            />
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-10 shadow-soft"
        >
          <h3 className="font-display text-2xl md:text-3xl">
            Enrollment Inquiry
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            All fields are required, except message.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Parent Name" name="parent_name" />

            <Field label="Student Name" name="student_name" />

            <Field label="Age" name="age" type="number" min={3} />

            <Field label="Phone" name="phone" type="tel" />

            <div className="sm:col-span-2">
              <Field label="Email" name="email" type="email" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Course Interested
              </label>

              <select
                name="course"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="">Select a course</option>

                {courses.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                placeholder="Anything you'd like us to know..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium shadow-soft hover:shadow-glow transition disabled:opacity-60"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}

            {submitting ? "Redirecting..." : "Send Inquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  min,
}: {
  label: string;
  name: string;
  type?: string;
  min?: number;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>

      <input
        required
        name={name}
        type={type}
        min={min}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}