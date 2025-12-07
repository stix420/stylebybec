import { Component, createSignal } from "solid-js";

const Contact: Component = () => {
  const [formData, setFormData] = createSignal({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [submitStatus, setSubmitStatus] = createSignal<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `Beauty Consultation Inquiry - ${
        formData().service || "General"
      }`;
      const body = `
Name: ${formData().name}
Email: ${formData().email}
Phone: ${formData().phone}
Service Interest: ${formData().service}

Message:
${formData().message}
      `.trim();

      const mailtoLink = `mailto:properinpink@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const services = [
    "Personal Style Consultation",
    "Holiday & Event Styling",
    "Color Analysis",
    "Skincare Routine Design",
    "Office & Professional Styling",
    "Wedding Styling Services",
    "Touch-up Styling Services",
  ];

  return (
    <section
      id="contact"
      class="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Get In{" "}
            <span class="bg-gradient-to-r from-slate-700 to-blue-800 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your beauty routine? Let's schedule your
            consultation and start your journey to confidence.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="bg-slate-600 text-white p-3 rounded-lg mr-4">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Email</p>
                    <p class="text-gray-600">stylebybec@gmail.com</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="bg-blue-700 text-white p-3 rounded-lg mr-4">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Response Time</p>
                    <p class="text-gray-600">Within 24 hours</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="bg-slate-600 text-white p-3 rounded-lg mr-4">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Service Areas</p>
                    <p class="text-gray-600">
                      In-person & Virtual consultations available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">
                Why Choose Style By Bec?
              </h4>
              <ul class="space-y-3">
                {[
                  "Personalized approach to beauty",
                  "8+ years of professional experience",
                  "Certified beauty consultant",
                  "Flexible scheduling options",
                  "Ongoing support and guidance",
                ].map((item) => (
                  <li class="flex items-center">
                    <svg
                      class="w-5 h-5 text-slate-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>

            {submitStatus() === "success" && (
              <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p class="text-green-800">
                  Your email client should open with your message. If not,
                  please email me directly at stylebybec@gmail.com
                </p>
              </div>
            )}

            {submitStatus() === "error" && (
              <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-red-800">
                  Something went wrong. Please email me directly at
                  stylebybec@gmail.com
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData().name}
                    onInput={(e) =>
                      updateFormData("name", e.currentTarget.value)
                    }
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData().email}
                    onInput={(e) =>
                      updateFormData("email", e.currentTarget.value)
                    }
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData().phone}
                    onInput={(e) =>
                      updateFormData("phone", e.currentTarget.value)
                    }
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    value={formData().service}
                    onChange={(e) =>
                      updateFormData("service", e.currentTarget.value)
                    }
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData().message}
                  onInput={(e) =>
                    updateFormData("message", e.currentTarget.value)
                  }
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-none"
                  placeholder="Tell me about your style goals and how I can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting()}
                class="w-full bg-gradient-to-r from-slate-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-slate-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting() ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
