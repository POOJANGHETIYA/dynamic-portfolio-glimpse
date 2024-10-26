import { experience } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {exp.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item.point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}