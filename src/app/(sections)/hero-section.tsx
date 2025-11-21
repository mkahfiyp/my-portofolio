import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/useNavigation";
import { Download, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    const { handleNavClick } = useNavigation();

    const handleDownload = () => {
        const link = document.createElement("a");
        // link.href = 'https://drive.google.com/uc?export=download&id=1XjF0nL-sR9IybAGm-T7zYiuQpUmEKmy6';
        // link.href = "https://drive.google.com/uc?export=download&id=1IWouu0UfoaAJSimBPlQHgk8x65Lm-LVi";
        // link.href = "https://drive.google.com/uc?export=download&id=16C2H4l5L9kNUkqBYDvAIG6GfT3-MIkxQ";
        link.href = "https://drive.google.com/uc?export=download&id=1ehjoY6DMadWnFDpBTeIOpCLtoJuFJETG";
        link.download = "CV_M_KAHFI_Y_P.pdf";
        link.click();
    };

    return (
        <section id="hero" className="px-[5%] py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-center text-center space-y-8">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                    <Image
                        width={192}
                        height={192}
                        // src="/placeholder.svg?height=200&width=200"
                        src="/foto_hero_2.webp"
                        alt="Profile"
                        className="relative w-48 h-48 rounded-full border-4 border-primary/20 shadow-xl hover:scale-105 transition-transform duration-500 animate-in fade-in zoom-in"
                    />
                </div>

                <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                    <div className="space-y-2">
                        <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-left duration-500 delay-300">
                            Hello, I&apos;m
                        </p>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-in fade-in slide-in-from-right duration-700 delay-400">
                            KAHFI
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-semibold animate-in fade-in slide-in-from-left duration-500 delay-500">
                            Full-Stack Web Developer
                        </p>
                    </div>
                    <p className="italic mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-500 delay-600">
                        &quot;I help bring ideas to life through clean, efficient, and
                        user-focused web development.&quot;
                    </p>
                </div>

                <div className="flex items-center space-x-2 text-muted-foreground animate-in fade-in slide-in-from-bottom duration-500 delay-700">
                    <MapPin className="h-4 w-4 animate-bounce" />
                    <span>Surabaya, Indonesia</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-in fade-in slide-in-from-bottom duration-500 delay-800">
                    <Button
                        size="lg"
                        className="text-base sm:text-lg px-6 sm:px-8 flex-1 hover:scale-105 transition-all duration-200 hover:shadow-lg"
                        onClick={() => handleNavClick("contact")}
                    >
                        <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Hire Me
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-base sm:text-lg px-6 sm:px-8 bg-transparent flex-1 hover:scale-105 transition-all duration-200 hover:shadow-lg"
                        onClick={handleDownload}
                    >
                        <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Download CV
                    </Button>
                </div>

                <div className="flex space-x-6 pt-4 animate-in fade-in slide-in-from-bottom duration-500 delay-1000">
                    {/* {[Github, Linkedin, Mail].map((Icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-6 w-6" />
              </Button>
            ))} */}
                    <a
                        href="https://github.com/mkahfiyp"
                        aria-label="Kunjungi profil GitHub saya"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg"
                            aria-label="Kunjungi profil GitHub saya"
                        >
                            <Github className="h-6 w-6" />
                        </Button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mkahfiyp"
                        aria-label="Kunjungi profil LinkedIn saya"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg"
                            aria-label="Kunjungi profil LinkedIn saya"
                        >
                            <Linkedin className="h-6 w-6" />
                        </Button>
                    </a>
                    <a
                        href="https://www.instagram.com/mkahfiyp"
                        aria-label="Kunjungi profil Instagram saya"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg"
                            aria-label="Kunjungi profil Instagram saya"
                        >
                            <Instagram className="h-6 w-6" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
