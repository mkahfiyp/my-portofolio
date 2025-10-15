import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projectData } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="px-[5%] py-24 bg-muted/30">
            <div className="space-y-12">
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        My Portfolio
                    </h2>
                    <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        &quot;Here are some of the projects I&apos;ve worked on — each one
                        taught me something new and helped me grow as a developer.&quot;
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectData.map((project, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    width={409}
                                    height={192}
                                    src={project.url || "/Image-not-found.webp"}
                                    alt={project.title}
                                    className={`w-full h-48 ${project.url && "object-cover object-top"} group-hover:scale-110 transition-transform duration-500`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    {
                                        project.url_project ? (
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
                                        ) : (
                                            <div className="flex gap-3">
                                                {project.repo_be && (
                                                    <Link href={project.repo_be}>
                                                        <Button
                                                            variant="secondary"
                                                            size="sm"
                                                            className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
                                                        >
                                                            <ExternalLink className="mr-2 h-4 w-4" />
                                                            View Repo Backend
                                                        </Button>
                                                    </Link>
                                                )}
                                                {project.repo_fe && (
                                                    <Link href={project.repo_fe}>
                                                        <Button
                                                            variant="secondary"
                                                            size="sm"
                                                            className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
                                                        >
                                                            <ExternalLink className="mr-2 h-4 w-4" />
                                                            View Repo Frontend
                                                        </Button>
                                                    </Link>
                                                )}
                                                {project.repo && (
                                                    <Link href={project.repo}>
                                                        <Button
                                                            variant="secondary"
                                                            size="sm"
                                                            className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
                                                        >
                                                            <ExternalLink className="mr-2 h-4 w-4" />
                                                            View Repo
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                                    {project.title}
                                </CardTitle>
                                <CardDescription><p className="line-clamp-3">{project.description}</p></CardDescription>
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
                {/* <div className="text-center animate-in fade-in slide-in-from-bottom duration-500 delay-600">
                    <Button
                        variant="outline"
                        size="lg"
                        className="hover:scale-105 transition-all duration-200 hover:shadow-lg bg-transparent"
                    >
                        View All Projects
                    </Button>
                </div> */}
            </div>
        </section>
    )
}