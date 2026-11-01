import Ouro from "./Ouro.png";

export const profile = {
    name: "Ouro",
    handle: "ouro.dev",
    avatar: Ouro,
};

export const navLinks = [
    { label: { en: "About me", pl: "O mnie" }, href: "#about-me" },
    { label: { en: "Projects", pl: "Projekty" }, href: "#projects" },
    { label: { en: "Contact", pl: "Kontakt" }, href: "#contact" },
];

export const socials = [
    { name: "GitHub", url: "https://github.com/SandwichEater577", color: "#ffffff" },
    { name: "Discord", url: "https://discord.com/users/1328862858582425673", color: "#5865F2" },
    { name: "Slack", url: "https://hackclub.slack.com/team/U0CBTU8KKPF", color: "#4A154B" },
    { name: "School Email", url: "mailto:u178_kosmic_waw@technischools.com", color: "#EA4335" },
    { name: "Instagram", url: "https://www.instagram.com/ouro.dev/", color: "#E1306C" }
];

export const skills = [
    { name: "Rust", color: "#B7410E" },
    { name: "React", color: "#61DAFB" },
    { name: "Linux", color: "#FCC624" },
    { name: "Python", color: "#4B8BBE" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "PHP", color: "#777BB4" },
    { name: "SQL", color: "#00758F" },
    { name: "Bash", color: "#4EAA25" },
    { name: "C", color: "#A8B9CC" },
    { name: "C++", color: "#00599C" },
    { name: "Node.js", color: "#339933" },
    { name: "Git", color: "#F05032" },
    { name: "ASM_86x64", color: "#6E4C1E" },
    { name: "Godot", color: "#478CBF" }
];

export const projects = [
    {
        id: 1,
        title: { en: "Game of Life", pl: "Gra w Życie" },
        description: {
            en: "A Python implementation of Conway's Game of Life with a terminal interface. Features custom rendering and simulation logic.",
            pl: "Implementacja Gry w Życie Conwaya w Pythonie z interfejsem terminalowym. Zawiera niestandardowe renderowanie i logikę symulacji."
        },
        tags: ["Python", "Terminal", "Algorithms"],
        link: "https://github.com/SandwichEater577/Game-Of-Life"
    },
];

export const translations = {
    en: {
        aboutMe: {
            bio1: "I'm Michael and I'm a {age}-year-old programmer.",
            bio2_part1: "I attend ",
            bio2_link: "TechniSchools",
            bio2_part2: " as a student, where I learn from the best. Whether it's a simple web app, an SQL database, or an algorithmics test, I enjoy creating projects that teach me something new.",
            bio3: "I'm most interested in frontend development, but I also enjoy writing in low-level languages, such as C or even ASM_86x64. I like experimenting with new technologies and simply bringing ideas to life.",
            quote: "Always building, learning, and figuring out what's possible."
        },
        contact: {
            title: "Let's connect.",
            subtitle: "Want to collaborate on a project, ask a question, or just say hi? Feel free to reach out through any of these platforms."
        },
        projects: {
            title: "Selected Projects",
            subtitle: "Things I've built and sent."
        }
    },
    pl: {
        aboutMe: {
            bio1: "Jestem Michał, {age}-letnim programistą.",
            bio2_part1: "Uczęszczam do ",
            bio2_link: "TechniSchools",
            bio2_part2: " jako uczeń, gdzie uczę się od najlepszych. Niezależnie od tego, czy jest to prosta aplikacja webowa, baza SQL, czy test z algorytmiki, lubię tworzyć projekty, które uczą mnie czegoś nowego.",
            bio3: "Najbardziej interesuje mnie frontend, ale lubię też pisać w językach niskopoziomowych, takich jak C, czy nawet ASM_86x64. Lubię eksperymentować z nowymi technologiami i po prostu realizować pomysły.",
            quote: "Zawsze buduję, uczę się i sprawdzam, co jest możliwe."
        },
        contact: {
            title: "Złapmy kontakt.",
            subtitle: "Chcesz współpracować przy projekcie, zadać pytanie, a może po prostu się przywitać? Odezwij się przez którąkolwiek z tych platform."
        },
        projects: {
            title: "Wybrane Projekty",
            subtitle: "Rzeczy, które zbudowałem i wysłałem."
        }
    }
};