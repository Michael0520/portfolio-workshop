import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";

// ────────────────────────────────────────────────────────────────
// This file is the single source of truth for your personal site.
// Every piece of text, link, and entry shown on the site comes from
// here. Replace every "Your ..." / "Lorem ipsum ..." placeholder
// with your own content and you're done.
//
// Tip: you can also just tell Claude
//   "Read src/data/resume.tsx and replace name / location /
//    description with mine, and swap the first work entry for my job."
// ────────────────────────────────────────────────────────────────

export const DATA = {
  // ── Basics ────────────────────────────────────────────────
  name: "Your Name",
  initials: "YN", // shown when there is no avatar image
  url: "https://example.com", // your site URL (fill in after deploy)
  location: "Your City",
  locationLink: "https://www.google.com/maps", // Google Maps link for your location
  description:
    "One-line intro about you. e.g. Frontend engineer who loves turning ideas into products.",
  summary:
    "A longer introduction. Your background, what you do, and what you're into. Markdown is supported, e.g. [a link](https://example.com). Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  avatarUrl: "https://placehold.co/200x200?text=Avatar", // replace with public/me.png, or your own image URL
  skills: [
    // Your skills. Add or remove freely; more icons in src/components/ui/svgs/
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
  ],
  navbar: [
    // Bottom navigation. This workshop edition only has the home page.
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "your-email@example.com",
    tel: "+10000000000", // your phone, or remove this line
    social: {
      // Entries with navbar: true show in the bottom dock.
      // Swap the URLs for yours; delete any block you don't use.
      GitHub: {
        name: "GitHub",
        url: "https://github.com/your-username",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/your-username",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/your-username",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // ── Work experience ───────────────────────────────────────
  // One example entry below. Copy the whole { ... } block to add more.
  // Put a company logo in public/ and point logoUrl at it (or leave "").
  work: [
    {
      company: "Company Name",
      href: "#", // company website
      badges: [],
      location: "Remote",
      title: "Your Job Title",
      logoUrl: "",
      start: "2023",
      end: "Present",
      description:
        "What you did in this role. One or two sentences is enough. Lorem ipsum dolor sit amet.",
    },
  ],

  // ── Education ─────────────────────────────────────────────
  // One example entry. Set this to [] if you don't want the section.
  education: [
    {
      school: "School Name",
      href: "#",
      degree: "Degree / Major",
      logoUrl: "",
      start: "2018",
      end: "2022",
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  // Two example cards. Each can link to a site, source code, image, or video.
  projects: [
    {
      title: "Project One",
      href: "#",
      dates: "Jan 2024",
      active: true,
      description:
        "What this project is and the problem it solves. Markdown is supported. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Project+One",
      video: "", // mp4 URL; if set, the video shows instead of the image
    },
    {
      title: "Project Two",
      href: "#",
      dates: "2024",
      active: true,
      description: "Short summary. Lorem ipsum dolor sit amet.",
      technologies: ["React", "Node.js"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Project+Two",
      video: "",
    },
  ],

  // ── Hackathons / events (optional) ────────────────────────
  // Empty by default, so this section is hidden. Add entries using
  // the commented format below to show it.
  hackathons: [
    // {
    //   title: "Event Name",
    //   dates: "Date",
    //   location: "Location",
    //   description: "What you built at this event",
    //   image: "https://placehold.co/600x400?text=Event",
    //   links: [],
    // },
  ],

  // ── Section headings ──────────────────────────────────────
  // The badge / title / subtitle shown above each section. Edit
  // these to match your voice. Set "enabled: false" to hide a
  // whole section (e.g. hackathons) without deleting its data.
  sections: {
    projects: {
      enabled: true,
      badge: "My Projects",
      title: "Check out my latest work",
      subtitle:
        "A short line about the kind of work you do and what these projects show.",
    },
    hackathons: {
      enabled: false, // turn on once you add hackathon entries above
      badge: "Hackathons",
      title: "I like building things",
      subtitle:
        "A short line about your hackathon or side-project experience.",
    },
    contact: {
      enabled: true,
      badge: "Contact",
      title: "Get in Touch",
      // Use {social} as a placeholder for a link to one of your socials.
      subtitlePrefix: "Want to chat? Reach out ",
      subtitleLinkText: "via this link",
      subtitleSuffix: " and I'll get back to you when I can.",
    },
  },
} as const;
