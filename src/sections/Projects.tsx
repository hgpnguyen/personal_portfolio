//import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
import { Github } from "@/components/Icons"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
    title: "LittleLemon",
    description:
      "A restaurant API developed with role-based access for Customers, Managers, and Delivery Crew. Customers can view the menu, manage \
cart, and place orders. Managers can manage menu items, orders, and user roles. Delivery crew can update order status. Results are \
paginated, with filtering and search capabilities.",
    image: "projects/littleLemon.png",
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
    link: "#",
    github: "https://github.com/hgpnguyen/restaurant",
  },
  /*{
    title: "OpenWeather API",
    description:
      "A CLI Python application that retrieves weather data from the OpenWeather API for a specified region, optimized through parallel API calls to\
efficiently collect data from multiple locations. The user inputs a bounding box to define the region and retrieve all weather data in that region.\
A detailed README is included, outlining setup, usage, and the optimization approach.",
    image: "",
    tags: ["Python", "Asyncio", "CLI"],
    link: "#",
    github: "https://github.com/hgpnguyen/openWeather",
  },}*/
  {
    title: "Task Manager",
    description:
      "A Task Management API developed enables users to create, update, delete, and view tasks, each with a title, description, due date, and\
status, stored in PostgreSQL. Users can retrieve all tasks or filter them by status, with results returned in paginated format. A detailed\
README provides instructions for setting up PostgreSQL, configuring the server, usage, and design decisions.",
    image: "projects/taskManager.png",
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
    link: "#",
    github: "https://github.com/hgpnguyen/task_management",
  },
]


export const Projects = () => {
    return (
     <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10"></div>
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase animate-fade-in">Feature Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                   A section of my recent work, from backend API project to 
                   complex web application that show my skill set.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                     key={idx} 
                     className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                     style={{ animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img
                             src={project.image} 
                             alt={project.title}
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div
                             className="absolute inset-0
                             bg-linear-to-t from-card via-card/50
                             to-transparent opacity-60" 
                            />
                            {/* Overlay Links */}
                            ,<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight
                                 className="w-5 h-5
                                 text-muted-foreground group-hover:text-primary
                                 group-hover:translate-x-1
                                 group-hover:-translate-y-1 transition-all" 
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All CTA */}
            {/*<div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Project
                </AnimatedBorderButton>
            </div>*/}
        </div>
     </section>
    )
}