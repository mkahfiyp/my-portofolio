import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="px-[5%] py-24">
            <div className="space-y-12">
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        &quot;Have a question, idea, or opportunity? I&apos;d love to hear
                        from you! Don&apos;t hesitate to drop me a message.&quot;
                    </p>
                </div>
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        <div className="space-y-6">
                            {[
                                { icon: Mail, title: "Email", info: "mkahfi467@gmail.com" },
                                {
                                    icon: MapPin,
                                    title: "Location",
                                    info: "Surabaya, Indonesia",
                                },
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
                    </div>
                    <Card className="hover:shadow-xl transition-all animate-in fade-in slide-in-from-right duration-700">
                        <CardHeader>
                            <CardTitle>Send me a message</CardTitle>
                            <CardDescription>
                                I&apos;ll get back to you within 24 hours
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        {
                                            id: "name",
                                            label: "Name",
                                            placeholder: "Your name",
                                            type: "text",
                                        },
                                        {
                                            id: "email",
                                            label: "Email",
                                            placeholder: "your.email@example.com",
                                            type: "email",
                                        },
                                    ].map((field) => (
                                        <div key={field.id} className="space-y-2">
                                            <label
                                                htmlFor={field.id}
                                                className="text-sm font-medium"
                                            >
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
    )
}