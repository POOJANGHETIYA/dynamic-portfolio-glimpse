import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fadeIn">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              A passionate Full Stack Developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <Button size="lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Profile"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}