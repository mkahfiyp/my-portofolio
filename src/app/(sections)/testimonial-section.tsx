import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonialData } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
    return (
        <section id="testimonials" className="px-[5%] py-24 bg-muted/30">
            <div className="space-y-12">
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        What People Are Saying
                    </h2>
                    <p className="italic text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        &quot;Grateful for the collaborations we&apos;ve had — here&apos;s
                        what our clients and partners are saying.&quot;
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonialData.map((testimonial, index) => (
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
                                        <CardTitle className="text-lg">
                                            {testimonial.name}
                                        </CardTitle>
                                        <CardDescription>{testimonial.role}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic mb-4">
                                    &quot;{testimonial.testimonial}&quot;
                                </p>
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
    )
}