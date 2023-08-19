type ProjectType = {
	name: string;
	link: string;
	description: string;
	tools: string[];
	image: string;
};

export const projects: ProjectType[] = [
	{
		name: "React SOLID Principle Guide",
		link: "https://solid-principle-react.vercel.app",
		description:
			"Website for guidelines about SOLID principles which provide a set of time-tested guidelines that empower developers to build cleaner, more organized, and highly adaptable applications.",
		tools: [
			"React",
			"NextJS",
			"Tailwind",
			"TypeScript",
			"NodeJS",
			"Express",
			"MongoDB",
			"Clerk",
		],
		image: "/images/projects/threads-clone.png",
	},
	{
		name: "Threads Clone",
		link: "https://next-thread-clone.vercel.app",
		description: "Threads BY Meta Cloned using NextJS 13 App route",
		tools: [
			"React",
			"NextJS",
			"Tailwind",
			"TypeScript",
			"NodeJS",
			"Express",
			"MongoDB",
			"Clerk",
		],
		image: "/images/projects/react-solid-principle.png",
	},
	{
		name: "use100hooks Documentation",
		link: "https://use100hooks.vercel.app",
		description:
			"use100hooks is the ultimate destination for React developers looking to supercharge their projects with a comprehensive library of 100+ pre-built React hooks. With use100hooks, you can effortlessly enhance your development process, save time, and create robust applications with ease.",
		tools: ["React", "NextJS", "Tailwind", "TypeScript", "ChatGPT"],
		image: "/images/projects/use100hooks.jpg",
	},
	{
		name: "use100hooks - NPM",
		link: "https://npmjs.com/package/use100hooks",
		description:
			"use100hooks is a powerful library published on NPM that provides developers with a comprehensive collection of 100 custom React hooks, designed to streamline and simplify the development process.",
		tools: ["React", "React Hooks", "TypeScript"],
		image: "/images/projects/npm.png",
	},
	{
		name: "Endgame - Genshin Impact Drafting System",
		link: "https://endgame-v2.vercel.app",
		description:
			"Endgame is a comprehensive and innovative Genshin Impact Drafting system designed to enhance the gameplay experience for players. With its advanced features, Endgame introduces a unique approach to team composition and strategic decision-making within the game.",
		tools: ["React", "NextJS", "CharkaUI", "TypeScript", "MySQL", "Socket.io"],
		image: "/images/projects/endgame.png",
	},
	{
		name: "Trello Clone",
		link: "https://trello-clone-next-five.vercel.app",
		description:
			"My Version of Trello Clone Drag and Drop as per description This project aims to provide users with a familiar and intuitive interface for organizing and managing tasks, projects, and workflows in a collaborative environment.",
		tools: ["React", "NextJS", "Typescript", "ChatGPT"],
		image: "/images/projects/trello-clone.png",
	},
	{
		name: "GoAcquirely",
		link: "https://goacquirely.com",
		description: "The ultimate platform for Go High Level Agencies",
		tools: ["HTML", "CSS", "TailWind", "Laravel", "alpine.js"],
		image: "/images/projects/acquirely.png",
	},
];
