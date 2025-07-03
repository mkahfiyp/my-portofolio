"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, Star, Quote, Sun, Moon, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function PersonalWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-[5%] flex h-16 items-center justify-between">
          <div className="flex items-center">
            {/* <a className="flex items-center space-x-2" href="/">
              <span className="font-bold text-lg">KAHFI</span>
            </a> */}
            <Link href="/">
              <span className="font-bold text-lg">KAHFI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#hero" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#portfolio" className="transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="#experience" className="transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#testimonials" className="transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                document.body.classList.toggle("dark")
              }}
              className="bg-transparent"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        {mobileMenuOpen && (
          <div className="px-[5%] md:hidden border-t bg-background/95 backdrop-blur">
            <div className="container py-4 space-y-3">
              <Link
                href="#hero"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#portfolio"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#experience"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#testimonials"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="px-[5%] py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              width={184}
              height={184}
              // src="/placeholder.svg?height=200&width=200"
              src="/foto_hero.webp"
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-primary/20 shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hello, I&apos;m</p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">KAHFI</h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">Full-Stack Web Developer</p>
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
              &quot;I help bring ideas to life through clean, efficient, and user-focused web development.&quot;
            </p>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Surabaya, Indonesia</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 flex-1">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Hire Me
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 bg-transparent flex-1">
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download CV
            </Button>
          </div>
          <div className="flex space-x-6 pt-4">
            <Link href="https://github.com/mkahfiyp" passHref>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Github className="h-6 w-6" />
              </Button>
            </Link>

            <Link href="https://www.linkedin.com/in/mkahfiyp" passHref>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>

            <Link href="https://www.instagram.com/mkahfiyp" passHref>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Instagram className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-[5%] py-24 bg-muted/30">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Me</h2>
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
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">50+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">5+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">30+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">100%</h4>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Mobile: Image first, Desktop: Image second */}
          <div className="order-1 lg:order-2 flex justify-center">
            {/* <img src="https://picsum.photos/400/500" alt="About Me" className="rounded-lg shadow-2xl max-w-md w-full" /> */}
            <Image width={448} height={560} src="/foto_about_me.webp" alt="About Me" className="rounded-lg shadow-2xl max-w-md w-full" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-[5%] py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills & Expertise</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;These are the technologies and tools I use daily to bring ideas to life and solve real-world problems.&quot;
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Frontend Development
                </CardTitle>
                <CardDescription>Creating responsive and interactive user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Javascript</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Backend Development
                </CardTitle>
                <CardDescription>Server-side development and API design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">C#</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  DevOps & Tools
                </CardTitle>
                <CardDescription>Development tools and deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-[5%] py-24 bg-muted/30">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Portfolio</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;Here are some of the projects I&apos;ve worked on — each one taught me something new and helped me grow as a developer.&quot;
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  width={48}
                  height={48}
                  src="https://picsum.photos/id/237/500/200"
                  alt="E-commerce Platform"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>Full-stack e-commerce solution with payment integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  width={48}
                  height={48}
                  src="https://picsum.photos/id/237/500/200"
                  alt="Task Management App"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>Collaborative task management with real-time updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  width={48}
                  height={48}
                  src="https://picsum.photos/id/237/500/200"
                  alt="Learning Management System"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Learning Management System</CardTitle>
                <CardDescription>Complete LMS with course management and progress tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-[5%] py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Experience</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;Here&apos;s a glimpse into my journey so far — the roles I&apos;ve taken, the teams I&apos;ve joined, and the lessons I&apos;ve learned along the way.&quot;
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                  <div>
                    <CardTitle className="text-xl">Bootcamp Full Stack Web Development</CardTitle>
                    <CardDescription className="text-base">Purwadhika Digital Technology School • Surabaya</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>May 2025 - Present</Badge>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Mengikuti program intensif pengembangan web full stack selama beberapa bulan dengan fokus praktik langsung</li>
                  <li>Mempelajari teknologi seperti HTML, CSS, JavaScript, TypeScript, React.js, Tailwind CSS, Node.js, NextJS, PostgreSQL, Git, GitHub, dan Vercel</li>
                  <li>Membangun proyek web end-to-end dari frontend hingga backend sebagai bagian dari kurikulum</li>
                  <li>Meningkatkan kemampuan problem solving, debugging, dan kolaborasi tim dalam lingkungan simulasi kerja nyata</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                  <div>
                    <CardTitle className="text-xl">Informatics Engineering Student</CardTitle>
                    <CardDescription className="text-base">Universitas Surabaya • Surabaya</CardDescription>
                  </div>
                  <Badge variant="outline">2020 - 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Menempuh pendidikan di Program Studi Teknik Informatika, Universitas Surabaya (UBAYA)</li>
                  <li>Mempelajari dasar-dasar pemrograman menggunakan bahasa seperti C, Java, dan Python</li>
                  <li>Mempelajari berbagai mata kuliah inti seperti Struktur Data, Pemrograman Web, Basis Data, dan Kecerdasan Buatan</li>
                  <li>Mengerjakan tugas akhir dengan topik &quot;Pembuatan Aplikasi Penyewaan Lapangan Olahraga di Surabaya dengan Implementasi Algoritma Collaborative Filtering.&quot;</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                  <div>
                    <CardTitle className="text-xl">Web Developer Intern</CardTitle>
                    <CardDescription className="text-base">Information Systems Study Program, UBAYA • Surabaya</CardDescription>
                  </div>
                  <Badge variant="outline">2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Menjalani internship sebagai Web Developer dalam tim pengembangan website Program Studi Sistem Informasi UBAYA</li>
                  <li>Berperan dalam pengembangan dan pemeliharaan fitur-fitur menggunakan WordPress</li>
                  <li>Berkoordinasi langsung dengan dosen dan staf untuk menganalisis kebutuhan sistem dan mengimplementasikan solusi yang relevan</li>
                  <li>Meningkatkan pengalaman dalam pengembangan aplikasi nyata serta memahami alur kerja profesional di lingkungan akademik</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                  <div>
                    <CardTitle className="text-xl">IT Support Internship</CardTitle>
                    <CardDescription className="text-base">PT. Indo Bismar • Surabaya</CardDescription>
                  </div>
                  <Badge variant="outline">2019</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Melaksanakan praktik kerja lapangan (PKL) sebagai siswa SMK jurusan Teknik Komputer dan Jaringan</li>
                  <li>Membantu proses instalasi dan perawatan perangkat keras dan perangkat lunak di lingkungan kantor</li>
                  <li>Melakukan troubleshooting dasar pada jaringan komputer dan perangkat pengguna</li>
                  <li>Mendampingi staf IT dalam kegiatan operasional harian dan dokumentasi teknis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-[5%] py-24 bg-muted/30">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Clients Say</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;I&apos;ve been lucky to work with some amazing people. Here&apos;s what they&apos;ve said about working with me.&quot;
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    width={48}
                    height={48}
                    src="/placeholder.svg?height=60&width=60"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>CEO, StartupXYZ</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  &quot;John delivered exceptional work on our e-commerce platform. His attention to detail and technical
                  expertise helped us launch ahead of schedule. Highly recommended!&quot;
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    width={48}
                    height={48}
                    src="/placeholder.svg?height=60&width=60"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Michael Chen</CardTitle>
                    <CardDescription>CTO, TechCorp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  &quot;Working with John was a game-changer for our team. His full-stack expertise and leadership skills
                  made our project a huge success. A true professional!&quot;
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image width={48} height={48} src="/placeholder.svg?height=60&width=60" alt="Lisa Wong" className="w-12 h-12 rounded-full" />
                  <div>
                    <CardTitle className="text-lg">Lisa Wong</CardTitle>
                    <CardDescription>Product Manager, InnovateLab</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  &quot;John&apos;s ability to understand complex requirements and translate them into elegant solutions is
                  remarkable. He&apos;s reliable, skilled, and a pleasure to work with.&quot;
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-[5%] py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              &quot;Have a question, idea, or opportunity? I&apos;d love to hear from you! Don&apos;t hesitate to drop me a message.&quot;
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">mkahfi467@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Surabaya, Indonesia</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Me</h3>
                <div className="flex space-x-4">
                  <Link href="https://github.com/mkahfiyp" passHref>
                    <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
                      <Github className="h-6 w-6" />
                    </Button>
                  </Link>

                  <Link href="https://www.linkedin.com/in/mkahfiyp" passHref>
                    <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
                      <Linkedin className="h-6 w-6" />
                    </Button>
                  </Link>

                  <Link href="https://www.instagram.com/mkahfiyp" passHref>
                    <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
                      <Instagram className="h-6 w-6" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>I&apos;ll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project inquiry"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
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
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t bg-muted/30">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © 2024 John Doe. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
