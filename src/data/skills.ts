export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 78 },
    ],
  },
];

/* 
// API integration code
export const fetchSkills = async () => {
  const response = await fetch('/api/skills');
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return response.json();
};
*/