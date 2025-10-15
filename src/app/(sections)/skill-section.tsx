import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { skillsData } from "@/data/skills";

export default function SkillSection() {
    return (
        <section id="skills" className="px-[5%] py-24">
            <div className="space-y-12">
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        &quot;These are the technologies and tools I use daily to bring
                        ideas to life and solve real-world problems.&quot;
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((category, index) => (
                        <Card
                            key={index}
                            className="border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-in fade-in slide-in-from-bottom"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <div
                                        className={`w-2 h-2 ${category.color} rounded-full animate-pulse`}
                                    ></div>
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
    )
}