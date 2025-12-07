import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Style By Bec
            </h3>
            <p class="text-gray-300 mb-4">
              Empowering confidence through personalized beauty consultations
              and expert style guidance.
            </p>
            <p class="text-gray-400 text-sm">
              Licensed Beauty Consultant | 8+ Years Experience
            </p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              {["About", "Services", "Contact"].map((item) => (
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    class="text-gray-300 hover:text-slate-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
            <div class="space-y-2">
              <p class="text-gray-300">
                <span class="text-pink-400">Email:</span> stylebybec@gmail.com
              </p>
              <p class="text-gray-300">
                <span class="text-pink-400">Response Time:</span> Within 24
                hours
              </p>
              <p class="text-gray-300">
                <span class="text-pink-400">Services:</span> In-person & Virtual
              </p>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2024 Style By Bec. All rights reserved. | Beauty Consultant
            Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
