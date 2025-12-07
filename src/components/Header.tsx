import { Component, Accessor, Setter } from "solid-js";

interface HeaderProps {
  activeSection: Accessor<string>;
  setActiveSection: Setter<string>;
}

const Header: Component<HeaderProps> = (props) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      props.setActiveSection(sectionId);
    }
  };

  return (
    <header class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          {/* Logo */}
          <div class="flex-shrink-0">
            <h1 class="text-3xl font-bold bg-gradient-to-r from-slate-700 to-blue-800 bg-clip-text text-transparent">
              Style By Bec
            </h1>
            <p class="text-sm text-gray-600 font-light">Style Consultant</p>
          </div>

          {/* Navigation */}
          <nav class="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                onClick={() => scrollToSection(item.id)}
                class={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  props.activeSection() === item.id
                    ? "bg-gradient-to-r from-slate-600 to-blue-700 text-white shadow-lg"
                    : "text-gray-700 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div class="md:hidden">
            <button class="text-gray-700 hover:text-slate-700 focus:outline-none">
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
