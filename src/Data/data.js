import Nestea from "./NesTea.webp";

export const profile = {
    name: "Nestea",
    handle: "nestea.dev",
    avatar: Nestea,
};

export const navLinks = [
    { label: "About me", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
];

export const socials = [
    { name: "GitHub", url: "https://github.com/SandwichEater577", color: "#ffffff" },
    { name: "Discord", url: "https://discord.com/users/1328862858582425673", color: "#5865F2" },
    { name: "School Email", url: "mailto:u178_kosmic_waw@technischools.com", color: "#EA4335" }
];

export const skills = [
    { name: "Python", color: "#4B8BBE" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "PHP", color: "#777BB4" },
    { name: "SQL", color: "#00758F" },
    { name: "Bash", color: "#4EAA25" },
    { name: "C", color: "#A8B9CC" },
    { name: "C++", color: "#00599C" },
    { name: "React", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "Linux", color: "#FCC624" },
    { name: "Git", color: "#F05032" }
];

export const projects = [
    {
        id: 1,
        title: "Game of Life",
        description: "A Python implementation of Conway's Game of Life with a terminal interface. Features custom rendering and simulation logic.",
        tags: ["Python", "Terminal", "Algorithms"],
        link: "https://github.com/SandwichEater577/Game-Of-Life"
    },
];