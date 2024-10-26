import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fadeIn">
                Hi, I'm <span className="text-primary">Poojan Ghetiya</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                A passionate Full Stack Developer specializing in building exceptional digital experiences.
              </p>
              <div className="flex gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                <Button size="lg" asChild>
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:ghetiyapoojan@gmail.com">Contact Me</a>
                </Button>
              </div>
            </div>
            
            <Card className="animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:ghetiyapoojan@gmail.com" className="text-sm hover:text-primary">
                    ghetiyapoojan@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+918530088085" className="text-sm hover:text-primary">
                    +91 85300 88085
                  </a>
                </div>
                <div className="flex items-center gap-3 md:col-span-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Gujarat, India</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative animate-fadeIn flex justify-center" style={{ animationDelay: "0.8s" }}>
            <Avatar className="w-64 h-64 border-4 border-primary">
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Poojan Ghetiya" />
              <AvatarFallback>PG</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}