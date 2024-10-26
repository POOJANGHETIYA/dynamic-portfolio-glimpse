export const projects = [
  {
    _id: 1,
    title: "Shortrl",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Shortrl is a URL shortening web application that allows users to shorten long URLs into short and easy-to-share links. It also offers customization of links.",
    technologies: ["MERN Stack", "Tailwind CSS", "Vercel"],
    link: "https://shortrl.vercel.app/"
  },
  {
    _id: 2,
    title: "SahYatri",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "SahYatri is a web application that helps users to find travel partners for their daily journey.",
    technologies: ["MERN Stack", "Tailwind CSS", "Vercel", "Render", "Rest API", "JWT"],
    link: ""
  }
];

/* 
// API integration code
export const fetchProjects = async () => {
  const response = await fetch('/api/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};
*/