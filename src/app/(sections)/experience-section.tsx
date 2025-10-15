import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experienceData } from "@/data/experiences";

export default function ExperienceSection() {
    return (
        <section id="experience" className="px-[5%] py-24">
            <div className="space-y-12">
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        &quot;Here&apos;s a glimpse into my journey so far — the roles
                        I&apos;ve taken, the teams I&apos;ve joined, and the lessons
                        I&apos;ve learned along the way.&quot;
                    </p>
                </div>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {experienceData.map((job, index) => (
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
                                        <CardDescription className="text-base">
                                            {job.company}
                                        </CardDescription>
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
                                        <li
                                            key={achievementIndex}
                                            className="hover:text-foreground transition-colors duration-200"
                                        >
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
    )
}