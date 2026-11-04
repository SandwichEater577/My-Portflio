import Ouro from "/Ouro.png";
import EOS from "/EndeavourOS.webp";

export const profile = {
    name: "Ouro",
    handle: "ouro.dev",
    avatar: Ouro,
};

export const navLinks = [
    { label: { en: "About me", pl: "O mnie" }, href: "#about-me" },
    { label: { en: "Contact", pl: "Kontakt" }, href: "#contact" },
    { label: { en: "Projects", pl: "Projekty" }, href: "#projects" },
    { label: { en: "Setup", pl: "Set-up" }, href: "#setup" },
];

export const socials = [
    { name: "GitHub", url: "https://github.com/SandwichEater577", color: "#ffffff" },
    { name: "Discord", url: "https://discord.com/users/1328862858582425673", color: "#5865F2" },
    { name: "Slack", url: "https://hackclub.slack.com/team/U0CBTU8KKPF", color: "#4A154B" },
    { name: "School Email", url: "mailto:u178_kosmic_waw@technischools.com", mail: "u178_kosmic_waw@technischools.com", color: "#EA4335" },
    { name: "Instagram", url: "https://www.instagram.com/ouro.dev/", color: "#E1306C" }
];

export const skills = [
    { name: "React", color: "#61DAFB", link: "https://react.dev/" },
    { name: "Linux", color: "#FCC624", link: "https://www.linux.org/" },
    { name: "Python", color: "#4B8BBE", link: "https://www.python.org/" },
    { name: "JavaScript", color: "#F7DF1E", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML", color: "#E34F26", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", color: "#1572B6", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "PHP", color: "#777BB4", link: "https://www.php.net/" },
    { name: "SQL", color: "#00758F", link: "https://www.w3schools.com/sql/" },
    { name: "Bash", color: "#4EAA25", link: "https://www.gnu.org/software/bash/" },
    { name: "C", color: "#A8B9CC", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { name: "Node.js", color: "#339933", link: "https://nodejs.org/" },
    { name: "Git", color: "#F05032", link: "https://git-scm.com/" }
];

export const setup = [
    { name: { en: "Operating System", pl: "System" }, value: "EndeavourOS (Arch)", icon: EOS },
    { name: { en: "Primary Editor", pl: "Główny Edytor" }, value: "VS Code", icon: "vscode" },
    { name: { en: "Terminal Editor", pl: "Edytor Terminalowy" }, value: "Helix", icon: "helix" },
    { name: { en: "Daily Driver", pl: "Główny System" }, value: "Linux Main", icon: "linux" },
    { name: { en: "Community", pl: "Społeczność" }, value: "Hack Club", icon: "hackclub" },
    { name: { en: "Education", pl: "Edukacja" }, value: "TechniSchools", icon: "technischools" }
];

export const projects = [
    {
        id: 1,
        title: { en: "Game of Life", pl: "Gra Życia" },
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
            bio1: "I'm Michael and I'm a {age}-year-old developer.",
            bio2_part1: "I attend ",
            bio2_link: "TechniSchools",
            bio2_part2: " as a student, where I learn from the best. Whether it's a simple web app, an SQL database, or an algorithmics test, I enjoy creating projects that teach me something new.",
            bio3: "I'm most interested in frontend development, but I also enjoy writing in low-level languages, such as C or even ASM_86x64. I like experimenting with new technologies and simply bringing ideas to life.",
            bio4: "I'm also an active member of Hack Club, where I build open-source projects, participate in hackathons, and ship code.",
            quote: "Always building, learning, and figuring out what's possible."
        },
        contact: {
            title: "Let's connect.",
            subtitle: "Want to collaborate on a project, ask a question, or just say hi? Feel free to reach out through any of these platforms."
        },
        projects: {
            title: "Selected Projects",
            subtitle: "Things I've built and deployed."
        },
        setup: {
            title: "System Specs",
            subtitle: "My daily driver and development environment."
        }
    },
    pl: {
        aboutMe: {
            bio1: "Jestem Michał, {age}-letnim deweloperem.",
            bio2_part1: "Uczęszczam do ",
            bio2_link: "TechniSchools",
            bio2_part2: " jako uczeń, gdzie uczę się od najlepszych. Niezależnie od tego, czy jest to prosta aplikacja webowa, baza SQL, czy test z algorytmiki, lubię tworzyć projekty, które uczą mnie czegoś nowego.",
            bio3: "Najbardziej interesuje mnie frontend, ale lubię też pisać w językach niskopoziomowych, takich jak C, czy nawet ASM_86x64. Lubię eksperymentować z nowymi technologiami i po prostu realizować pomysły.",
            bio4: "Jestem także aktywnym członkiem Hack Clubu, gdzie tworzę projekty open-source, biorę udział w hackathonach i wysyłam kod.",
            quote: "Zawsze buduję, uczę się i sprawdzam, co jest możliwe."
        },
        contact: {
            title: "Złapmy kontakt.",
            subtitle: "Chcesz współpracować przy projekcie, zadać pytanie, a może po prostu się przywitać? Odezwij się przez którąkolwiek z tych platform."
        },
        projects: {
            title: "Wybrane Projekty",
            subtitle: "Rzeczy, które zbudowałem i wdrożyłem."
        },
        setup: {
            title: "Specyfikacja",
            subtitle: "Mój codzienny system i środowisko programistyczne."
        }
    }
};

export const trustedBy = [
    {
        id: 1,
        name: "TechniSchools",
        type: "custom",
        logo: "technischools"
    },
    {
        id: 2,
        name: "Hack Club",
        type: "svg",
        src: "https://hackclub.com/assets/hackClubLogoRed.svg"
    },
    {
        id: 3,
        name: "Techni Ventures",
        type: "svg",
        src: "/TechniVentures.svg"
    }
];