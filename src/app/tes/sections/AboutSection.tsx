import { Card } from "@/components/ui/card";
import { abouts } from "@/lib/data";
import Image from "next/image";

export default function AboutSection() {
    return (
        <Card className="w-full h-full overflow-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center px-5">
                {/* Mobile: Image first, Desktop: Text first */}
                <div className="order-2 lg:order-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                            About Me
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {abouts.map((val, idx) => (
                            <p
                                className="text-muted-foreground leading-relaxed"
                                key={val.description + idx}
                            >
                                {val.description}
                            </p>
                        ))}
                        {abouts.map((val, idx) => (
                            <p
                                className="text-muted-foreground leading-relaxed"
                                key={val.description + idx}
                            >
                                {val.description}
                            </p>
                        ))}
                        {abouts.map((val, idx) => (
                            <p
                                className="text-muted-foreground leading-relaxed"
                                key={val.description + idx}
                            >
                                {val.description}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Mobile: Image first, Desktop: Image second */}
                <div className="order-1 lg:order-2 flex justify-center animate-in fade-in slide-in-from-right duration-700 h-full">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        <Image
                            width={448}
                            height={560}
                            src="/foto_about_me.webp"
                            alt="About Me"
                            className="sticky top-0 rounded-lg shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </Card>
    )
}