import { aboutme } from "@/data/aboutme";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="px-[5%] py-24 bg-muted/30">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Mobile: Image first, Desktop: Text first */}
                <div className="order-2 lg:order-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                            About Me
                        </h2>
                        {/* <p className="text-muted-foreground text-lg leading-relaxed">
                            Saya adalah seorang Full Stack Developer yang baru lulus dari
                            jurusan Teknik Informatika dan memiliki ketertarikan besar dalam
                            membangun solusi digital yang menggabungkan keindahan desain dan
                            kekuatan fungsionalitas.
                        </p> */}
                        {
                            aboutme.map((val, idx) => (
                                <p key={val.content + idx} className="text-muted-foreground leading-relaxed">{val.content}</p>
                            ))
                        }
                    </div>
                    {/* <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            Saya memiliki pengalaman dalam mengembangkan berbagai aplikasi web dan mobile dengan fokus pada keseimbangan antara fungsionalitas dan pengalaman pengguna. Pengalaman tersebut memperkuat pemahaman saya terhadap teknologi frontend dan backend, serta praktik terbaik dalam pengembangan perangkat lunak yang efisien dan terukur.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            saya juga senang mengikuti perkembangan dunia teknologi, membaca
                            studi kasus pengembangan sistem, dan terus belajar untuk
                            meningkatkan keterampilan saya. Bagi saya, menjadi developer
                            bukan hanya soal menulis kode, tapi juga tentang bagaimana
                            memberikan dampak positif melalui teknologi.
                        </p>
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
    )
}