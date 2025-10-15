import Link from "next/link";
import { ThemeToggle } from "./ThemToggle";
import { Button } from "../ui/button";
import { useNavigation } from "@/hooks/useNavigation";

export default function Navbar() {
    const {
        mobileMenuOpen,
        setMobileMenuOpen,
        activeSection,
        handleNavClick
    } = useNavigation();

    return (
        <nav className="px-[5%] fixed top-0 z-[100] w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300 shadow-sm">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <Link
                        className="flex items-center space-x-2 group"
                        href="/"
                        onClick={() => handleNavClick("hero")}
                    >
                        <span className="font-bold text-lg group-hover:text-primary transition-colors duration-200">
                            KAHFI
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {[
                        "hero",
                        "about",
                        "skills",
                        "portfolio",
                        "experience",
                        "testimonials",
                        "contact",
                    ].map((section) => (
                        <button
                            key={section}
                            onClick={() => handleNavClick(section)}
                            className={`transition-all duration-200 hover:text-primary hover:scale-105 capitalize relative ${activeSection === section ? "text-primary" : ""
                                }`}
                        >
                            {section === "hero" ? "Home" : section}
                            {activeSection === section && (
                                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-in slide-in-from-left duration-200"></div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-2">
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden hover:scale-110 transition-transform duration-200"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={
                            mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
                        }
                    >
                        <svg
                            className="h-6 w-6 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden border-t bg-background/95 backdrop-blur transition-all duration-300 ${mobileMenuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="py-4 space-y-3">
                    {[
                        "hero",
                        "about",
                        "skills",
                        "portfolio",
                        "experience",
                        "testimonials",
                        "contact",
                    ].map((section, index) => (
                        <button
                            key={section}
                            onClick={() => handleNavClick(section)}
                            className={`block w-full text-left py-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:translate-x-2 capitalize ${activeSection === section ? "text-primary" : ""
                                }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                            aria-label={`Go to ${section} section`}
                        >
                            {section === "hero" ? "Home" : section}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}