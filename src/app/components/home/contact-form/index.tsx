"use client";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mykbnnyl");

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-white dark:bg-[#1C212B]">
        <div className="container">
          <div className="border-x border-primary/10 px-4 sm:px-7 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Contact
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Thank you — your message has been sent.
              </h2>
              <p className="mt-4 text-secondary">
                I will get back to you as soon as I can.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white dark:bg-[#1C212B]">
      <div className="container">
        <div className="border-x border-primary/10 px-4 sm:px-7 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-xl">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Contact
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Let’s talk about cloud engineering roles, projects, or collaboration.
              </h2>
              <p className="mt-4 text-secondary">
                Whether you want to discuss an opportunity, a Terraform project,
                or infrastructure design, send me a message here.
              </p>

              <div className="mt-6 space-y-2 text-sm sm:text-base">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:bart.rosiecki@gmail.com"
                    className="hover:text-primary"
                  >
                    bart.rosiecki@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/bart-rosiecki/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/bart-rosiecki
                  </a>
                </p>
                <p>
                  <span className="font-medium">GitHub:</span>{" "}
                  <a
                    href="https://github.com/Bardoso244"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/Bardoso244
                  </a>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:border-primary"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-xl border border-primary/15 px-4 py-3 outline-none focus:border-primary resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send message"}
              </button>

              <ValidationError errors={state.errors} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;