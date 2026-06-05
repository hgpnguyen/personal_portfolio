import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
        "Writing clean, maintainable code that follow D.R.Y and S.O.L.I.D principles"
    },
    {
        icon: Rocket,
        title: "Independent",
        description:
        "Highly self-motivate, can manage tasks and deliver results without constant supervision"
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
        "Excels at collaborating with others to complete tasks on time and brings ideas to life"
    },
    {
        icon: Lightbulb,
        title: "Fast-learner",
        description:
        "Quickly adapt to new technologies and workflows"
    }
]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About me
                        </span>
                    </div>
                

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,
                        <span className="font-serif italic font-normal text-white"> one component at a times.</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            My name is Nguyen Hua Gia Phuc, and I'm from Vietnam. 
                            I developed a passion for programming during university, which led me to pursue further studies in Singapore. 
                            After completing my degree, I decided to seek employment in Singapore due to its beauty, modernity, and convenience. 
                            I was fortunate to secure my first job as a research engineer under a professor at my university, where I continued to hone my programming skills and stay updated on technology.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to create digital experiences that are not just
                            functional, but truly delightful — products that users love to
                            use and developers love to maintain."
                        </p>
                    </div>
                </div>

                {/* Right Column - Hilights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div
                         key={idx} 
                         className="glass p-6 rounded-2xl animate-fade-in"
                         style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}