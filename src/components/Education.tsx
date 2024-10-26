import { education } from "@/data/education";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={edu.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle>{edu.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-primary font-medium">{edu.place}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{edu.timeline}</span>
                  <span>{edu.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}