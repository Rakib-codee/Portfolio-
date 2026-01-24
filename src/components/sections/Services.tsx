"use client";

import { motion } from "framer-motion";
import { Heading, Text } from "../ui";

const services = [
	{
		id: 1,
		title: "Frontend Development",
		description:
			"Building fast, accessible, and responsive user interfaces with modern frameworks like React and Next.js.",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
		features: [
			"React & Next.js",
			"TypeScript",
			"Responsive Design",
			"Performance Optimization",
		],
	},
	{
		id: 2,
		title: "UI/UX Design",
		description:
			"Creating intuitive, beautiful interfaces with focus on user experience, accessibility, and modern aesthetics.",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
				/>
			</svg>
		),
		features: ["Figma Design", "Prototyping", "Design Systems", "User Research"],
	},
	{
		id: 3,
		title: "Full-Stack Solutions",
		description:
			"End-to-end development from database design to deployment, ensuring scalable and maintainable applications.",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
				/>
			</svg>
		),
		features: [
			"Node.js & APIs",
			"Database Design",
			"Authentication",
			"Cloud Deployment",
		],
	},
	{
		id: 4,
		title: "Performance & SEO",
		description:
			"Optimizing web applications for speed, search engines, and core web vitals to maximize reach and engagement.",
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
		features: [
			"Core Web Vitals",
			"SEO Optimization",
			"Analytics",
			"Caching Strategies",
		],
	},
];

export function Services() {
	return (
		<div className="space-y-12 flex flex-col items-center">
			{/* Section Header */}
			<div className="text-center space-y-4 w-full flex flex-col items-center">
				<motion.span
					className="inline-block text-cyan-400 font-mono text-sm tracking-wider uppercase"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					What I Offer
				</motion.span>
				<Heading level={2}>Services</Heading>
				<p className="max-w-2xl text-center text-[var(--muted)]">
					I provide comprehensive web development services, from initial concept
					to final deployment, ensuring high-quality results at every stage.
				</p>
			</div>

			{/* Services Grid */}
			<div className="grid gap-6 md:grid-cols-2">
				{services.map((service, index) => (
					<motion.div
						key={service.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
					>
						<motion.div
							className="group h-full p-8 rounded-2xl bg-(--card) border border-(--card-border) hover:border-[var(--accent)]/30 transition-all duration-300 shadow-[var(--shadow)]"
							whileHover={{ y: -4 }}
						>
							{/* Icon */}
							<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-400 mb-6 group-hover:bg-cyan-500/20 transition-colors">
								{service.icon}
							</div>

							{/* Title & Description */}
							<Heading
								level={3}
								className="text-xl mb-3 group-hover:text-cyan-400 transition-colors"
							>
								{service.title}
							</Heading>
							<Text
								muted
								size="sm"
								className="mb-6 leading-relaxed"
							>
								{service.description}
							</Text>

							{/* Features List */}
							<ul className="space-y-2">
								{service.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-2 text-sm text-(--muted)"
									>
										<svg
											className="w-4 h-4 text-cyan-500 shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>
				))}
			</div>

			{/* CTA */}
			<motion.div
				className="text-center pt-8"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<Text muted className="mb-4">
					Interested in working together?
				</Text>
				<motion.a
					href="#contact"
					className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition-colors"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					Let&apos;s Discuss Your Project
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</motion.a>
			</motion.div>
		</div>
	);
}
