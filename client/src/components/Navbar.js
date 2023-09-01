import { CloudIcon, HomeIcon, LampIcon } from "lucide-react";
import Link from "next/link";
import TextLink from "./TextLink";

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-50 w-full bg-white">
			<div className="flex flex-col items-center justify-center w-full px-4 py-2">
				<Link href="/">
					<h1
						id="title"
						className="text-xl font-bold"
					>
						CS 1 | Intro to Computer Science
					</h1>
				</Link>
				<section
					id="links"
					className="flex space-x-2 font-semibold"
				>
					<TextLink href="/">
						<div className="flex items-center justify-center space-x-1">
							<span>Home</span>
						</div>
					</TextLink>

					<TextLink href="/syllabus">
						<div className="flex items-center justify-center space-x-1">
							<span>Syllabus</span>
						</div>
					</TextLink>
					<TextLink href="/assignments">
						<div className="flex items-center justify-center space-x-1">
							<span>Assignments</span>
						</div>
					</TextLink>
					<TextLink href="/schedule">
						<div className="flex items-center justify-center space-x-1">
							<span>Schedule</span>
						</div>
					</TextLink>
				</section>
			</div>
			<hr className="border-neutral-300" />
		</nav>
	);
}
