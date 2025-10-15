import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portofolio } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortofolioSection() {
    return (
        <Card className="w-full h-full overflow-auto">
            <div className="space-y-12 px-5">
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        My Portfolio
                    </h2>
                    <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        &quot;Here are some of the projects I&apos;ve worked on —
                        each one taught me something new and helped me grow as a
                        developer.&quot;
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {portofolio.map((project, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom pt-0"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative overflow-hidden rounded-t-md">
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
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
                                        >
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
            </div>
        </Card>
    )
}