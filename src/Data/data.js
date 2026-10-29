import Nestea from "./NesTea.webp";

export const profile = {
    name: "Nestea",
    handle: "nestea.dev",
    avatar: Nestea,
};

export const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About me", href: "#about-me" },
    { label: "Contact", href: "#contact" }
];

export const socials = [
    { name: "GitHub", url: "https://github.com/SandwichEater577" },
    { name: "School Email", url: "mailto:u178_kosmic_waw@technischools.com" }
];

export const skills = [
    "Python", "JavaScript", "HTML", "CSS", "PHP",
    "SQL", "Bash", "C", "React", "Linux", "Git"
];

export const projects = [
    {
        id: 1,
        title: "Game of Life",
        description: "A Python implementation of Conway's Game of Life with a terminal interface.",
        tags: ["Python", "Terminal"],
        link: "https://github.com/SandwichEater577"
    }
];