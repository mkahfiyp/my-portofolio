"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, Star, Quote, Sun, Moon, ArrowUp, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function ThemeToggle() {
  // const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="bg-transparent">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      onClick={() => document.body.classList.toggle("dark")}
      className="bg-transparent hover:scale-110 transition-transform duration-200"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      aria-label="button-scroll-to-top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

export default function PersonalWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "portfolio", "experience", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleDownload = () => {
    const link = document.createElement('a');
    // link.href = 'https://drive.google.com/uc?export=download&id=1XjF0nL-sR9IybAGm-T7zYiuQpUmEKmy6';
    link.href = 'https://drive.google.com/uc?export=download&id=1IWouu0UfoaAJSimBPlQHgk8x65Lm-LVi';
    link.download = 'CV_M_KAHFI_Y_P.pdf';
    link.click();
  };


  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="px-[5%] fixed top-0 z-[100] w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300 shadow-sm">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center space-x-2 group" href="/" onClick={() => handleNavClick("hero")}>
              <span className="font-bold text-lg group-hover:text-primary transition-colors duration-200">
                KAHFI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {["hero", "about", "skills", "portfolio", "experience", "testimonials", "contact"].map((section) => (
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
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              <svg
                className="h-6 w-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden border-t bg-background/95 backdrop-blur transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="py-4 space-y-3">
            {["hero", "about", "skills", "portfolio", "experience", "testimonials", "contact"].map((section, index) => (
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

      {/* Hero Section */}
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
              &quot;I help bring ideas to life through clean, efficient, and user-focused web development.&quot;
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
            <a href="https://github.com/mkahfiyp" aria-label="Kunjungi profil GitHub saya">
              <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg" aria-label="Kunjungi profil GitHub saya">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/mkahfiyp" aria-label="Kunjungi profil LinkedIn saya">
              <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg" aria-label="Kunjungi profil LinkedIn saya">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.instagram.com/mkahfiyp" aria-label="Kunjungi profil Instagram saya">
              <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg" aria-label="Kunjungi profil Instagram saya">
                <Instagram className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-[5%] py-24 bg-muted/30">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="order-2 lg:order-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Saya adalah seorang Full Stack Developer yang baru lulus dari jurusan Teknik Informatika dan memiliki ketertarikan besar dalam membangun solusi digital yang menggabungkan keindahan desain dan kekuatan fungsionalitas.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Selama masa kuliah, saya aktif mengikuti berbagai proyek pengembangan web dan mobile sebagai bagian dari tugas akhir, kerja praktik, maupun pembelajaran mandiri. Pengalaman ini membantu saya memahami dasar-dasar teknologi frontend dan backend, serta pentingnya menulis kode yang terstruktur dan mudah dipahami.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                saya juga senang mengikuti perkembangan dunia teknologi, membaca studi kasus pengembangan sistem, dan terus belajar untuk meningkatkan keterampilan saya. Bagi saya, menjadi developer bukan hanya soal menulis kode, tapi juga tentang bagaimana memberikan dampak positif melalui teknologi.
              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "30+", label: "Happy Clients" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-2xl mb-2 text-primary">{stat.number}</h4>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Mobile: Image first, Desktop: Image second */}
          <div className="order-1 lg:order-2 flex justify-center animate-in fade-in slide-in-from-right duration-700">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <Image
                width={448}
                height={560}
                // src="https://picsum.photos/400/500"
                src="/foto_about_me.webp"
                alt="About Me"
                className="relative rounded-lg shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-[5%] py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;These are the technologies and tools I use daily to bring ideas to life and solve real-world problems.&quot;
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frontend Development",
                description: "Creating responsive and interactive user interfaces",
                color: "bg-green-500",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Javascript", "HTML/CSS"],
              },
              {
                title: "Backend Development",
                description: "Server-side development and API design",
                color: "bg-orange-500",
                skills: ["Node.js", "Python", "PHP", "PostgreSQL", "C#", "Laravel", "MySQL", "REST APIs"],
              },
              {
                title: "DevOps & Tools",
                description: "Development tools and deployment",
                color: "bg-purple-500",
                skills: ["Git", "Vercel", "Linux", "CI/CD"],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${category.color} rounded-full animate-pulse`}></div>
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:scale-110 transition-transform duration-200 cursor-default"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-[5%] py-24 bg-muted/30">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              My Portfolio
            </h2>
            <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;Here are some of the projects I&apos;ve worked on — each one taught me something new and helped me grow as a developer.&quot;
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                url: "/project-company-sikumbang-tapera.webp",
                title: "Company Sikumbang Tapera",
                description: "Membangun ulang website dari sikumbang tapera yang dimiliki oleh Kementerian Perumahan dan Kawasan Permukiman (PKP)",
                technologies: ["Next.JS", "React", "Tailwind CSS"],
                url_project: "https://company-sikumbang-tapera.vercel.app/",
              },
              {
                url: "/project-blog-app.webp",
                title: "Blog App",
                description: "A modern blog platform with dynamic content management and responsive UI.",
                technologies: ["Next.js", "React", "Tailwind CSS", "Markdown"],
                url_project: "",
              },
              {
                url: "/project-todo-app.webp",
                title: "Todo App",
                description: "A simple and intuitive task management app with real-time updates and persistent storage.",
                technologies: ["React", "Firebase", "Tailwind CSS"],
                url_project: "",
              },
              {
                url: "/project-company.webp",
                title: "Company Profile",
                description: "A professional company profile website showcasing services, team, and contact information.",
                technologies: ["Next.js", "React", "Tailwind CSS"],
                url_project: "",
              }
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    width={409}
                    height={192}
                    // src="/placeholder.svg?height=250&width=400"
                    // src="https://picsum.photos/id/237/500/200"
                    src={project.url}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Link href={project.url_project}>
                      <Button variant="secondary" size="sm" className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center animate-in fade-in slide-in-from-bottom duration-500 delay-600">
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-200 hover:shadow-lg bg-transparent"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-[5%] py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;Here&apos;s a glimpse into my journey so far — the roles I&apos;ve taken, the teams I&apos;ve joined, and the lessons I&apos;ve learned along the way.&quot;
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                title: "Bootcamp Full Stack Web Development",
                company: "Purwadhika Digital Technology School • Surabaya",
                period: "May 2025 - Present",
                current: true,
                borderColor: "border-l-primary",
                achievements: [
                  "Mengikuti program intensif pengembangan web full stack selama beberapa bulan dengan fokus praktik langsung",
                  "Mempelajari teknologi seperti HTML, CSS, JavaScript, TypeScript, React.js, Tailwind CSS, Node.js, NextJS, PostgreSQL, Git, GitHub, dan Vercel",
                  "Membangun proyek web end-to-end dari frontend hingga backend sebagai bagian dari kurikulum",
                  "Meningkatkan kemampuan problem solving, debugging, dan kolaborasi tim dalam lingkungan simulasi kerja nyata",
                ],
              },
              {
                title: "Informatics Engineering Student",
                company: "Universitas Surabaya • Surabaya",
                period: "2020 - 2025",
                current: false,
                borderColor: "border-l-red-500",
                achievements: [
                  "Menempuh pendidikan di Program Studi Teknik Informatika, Universitas Surabaya (UBAYA",
                  "Mempelajari dasar-dasar pemrograman menggunakan bahasa seperti C, Java, dan Python",
                  "Mempelajari berbagai mata kuliah inti seperti Struktur Data, Pemrograman Web, Basis Data, dan Kecerdasan Buatan",
                  "Mengerjakan tugas akhir dengan topik &quot;Pembuatan Aplikasi Penyewaan Lapangan Olahraga di Surabaya dengan Implementasi Algoritma Collaborative Filtering.&quot",
                ],
              },
              {
                title: "Web Developer Intern",
                company: "Information Systems Study Program, UBAYA • Surabaya",
                period: "2024",
                current: false,
                borderColor: "border-l-orange-500",
                achievements: [
                  "Menjalani internship sebagai Web Developer dalam tim pengembangan website Program Studi Sistem Informasi UBAYA",
                  "Berperan dalam pengembangan dan pemeliharaan fitur-fitur menggunakan WordPress",
                  "Berkoordinasi langsung dengan dosen dan staf untuk menganalisis kebutuhan sistem dan mengimplementasikan solusi yang relevan",
                  "Meningkatkan pengalaman dalam pengembangan aplikasi nyata serta memahami alur kerja profesional di lingkungan akademik",
                ],
              },
              {
                title: "IT Support Internship",
                company: "PT. Indo Bismar • Surabaya",
                period: "2019",
                current: false,
                borderColor: "border-l-green-500",
                achievements: [
                  "Melaksanakan praktik kerja lapangan (PKL) sebagai siswa SMK jurusan Teknik Komputer dan Jaringan",
                  "Membantu proses instalasi dan perawatan perangkat keras dan perangkat lunak di lingkungan kantor",
                  "Melakukan troubleshooting dasar pada jaringan komputer dan perangkat pengguna",
                  "Mendampingi staf IT dalam kegiatan operasional harian dan dokumentasi teknis",
                ],
              },
            ].map((job, index) => (
              <Card
                key={index}
                className={`border-l-4 ${job.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-left`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                    <div>
                      <CardTitle className="text-xl hover:text-primary transition-colors duration-200">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-base">{job.company}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{job.period}</Badge>
                      {job.current && (
                        <Badge variant="secondary" className="animate-pulse">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="hover:text-foreground transition-colors duration-200">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-[5%] py-24 bg-muted/30">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What People Are Saying
            </h2>
            <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;Grateful for the collaborations we&apos;ve had — here&apos;s what our clients and partners are saying.&quot;
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Michael Tan",
                role: "Project Manager, BrightTech Solutions",
                testimonial:
                  "Bekerja bareng Kahfi selalu jadi pengalaman yang menyenangkan. Dia cepat tanggap, punya ide-ide cerdas, dan nggak pernah bikin tim kelabakan. Pokoknya mantap!",
              },
              {
                name: "Alicia Gomez",
                role: "UX Designer, CreativeNest",
                testimonial:
                  "Kahfi itu tipe developer yang enak banget diajak kerja sama. Desain yang aku buat bisa dia realisasikan dengan mulus, dan dia juga terbuka buat diskusi. Seru banget kerja bareng dia!",
              },
              {
                name: "David Lee",
                role: "CTO, Nova Digital",
                testimonial:
                  "Kalau butuh orang yang bisa diandalkan dan ngerti teknis, Kahfi jawabannya. Santai tapi serius pas kerja, dan hasil kerjanya selalu rapi. Recommended banget!",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="relative hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      width={48}
                      height={48}
                      // src="/placeholder.svg?height=60&width=60"
                      src="https://picsum.photos/id/237/500/200"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-200"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">&quot;{testimonial.testimonial}&quot;</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-[5%] py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;Have a question, idea, or opportunity? I&apos;d love to hear from you! Don&apos;t hesitate to drop me a message.&quot;
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", info: "mkahfi467@gmail.com" },
                  { icon: MapPin, title: "Location", info: "Surabaya, Indonesia" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:scale-105"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{contact.title}</p>
                      <p className="text-muted-foreground">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Me</h3>
                <div className="flex space-x-4">
                  {/* {[Github, Linkedin, Mail].map((Icon, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 bg-transparent hover:scale-110 hover:text-primary transition-all duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon className="h-6 w-6" />
                    </Button>
                  ))} */}
                  <a href="https://github.com/mkahfiyp" aria-label="Kunjungi profil GitHub saya">
                    <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg" aria-label="Kunjungi profil GitHub saya">
                      <Github className="h-6 w-6" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/mkahfiyp" aria-label="Kunjungi profil LinkedIn saya">
                    <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg" aria-label="Kunjungi profil LinkedIn saya">
                      <Linkedin className="h-6 w-6" />
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/mkahfiyp" aria-label="Kunjungi profil Instagram saya">
                    <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 hover:text-primary transition-all duration-200 hover:shadow-lg" aria-label="Kunjungi profil Instagram saya">
                      <Instagram className="h-6 w-6" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <Card className="hover:shadow-xl transition-all animate-in fade-in slide-in-from-right duration-700">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>I&apos;ll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { id: "name", label: "Name", placeholder: "Your name", type: "text" },
                      { id: "email", label: "Email", placeholder: "your.email@example.com", type: "email" },
                    ].map((field) => (
                      <div key={field.id} className="space-y-2">
                        <label htmlFor={field.id} className="text-sm font-medium">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-3 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-base transition-all duration-200 hover:border-primary/50"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project inquiry"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-200 hover:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background transition-all duration-200 hover:border-primary/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full hover:scale-105 transition-all duration-200 hover:shadow-lg"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
