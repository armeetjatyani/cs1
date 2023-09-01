import TextLink from "@/components/TextLink";
import { CalendarIcon, FeatherIcon, LinkIcon, MegaphoneIcon, MessageCircleIcon, PencilRulerIcon, SpeakerIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full space-y-4">
			<section className="px-10 py-4">
				<h2 className="flex space-x-2 text-2xl font-bold underline">
					<MegaphoneIcon />
					<span>Announcements</span>
				</h2>
				<section className="w-full">
					<ul className="relative list-disc left-10">
						<li>
							<b>[Week 1]</b> - sign up for Tuesday labs <TextLink href="https://forms.gle/1rb6Gs2HqWnQcTBq8">here</TextLink>!
						</li>
					</ul>
				</section>
			</section>
			<hr className="w-full border-neutral-300" />
			<section className="px-10 py-4">
				<h2 className="flex space-x-2 text-2xl font-bold underline">
					<MegaphoneIcon />
					<span>About</span>
				</h2>
				<section className="w-full">
					<p>We are really excited to be teaching all of you this material and communicating our passion for programming and computer science. What you learn in CS 1 may be some of the most important material you learn in your entire career, but more importantly, we hope to communicate to you why programming is fun and how you can start on your journey to becoming a great programmer. A lot has changed and is changing in this course as we incorporate new tools, material, and more interactive lectures. We value your involvement and for you to tell us what is working and what isn't. This is going to be a great term, and we are delighted to have you in the course! Before the first class, please review the course syllabus for a more detailed overview of the course and course expectations.</p>
				</section>
			</section>
			<hr className="w-full border-neutral-300" />
			<section className="px-10 py-4">
				<h2 className="flex space-x-2 text-2xl font-bold underline">
					<LinkIcon />
					<span>Links</span>
				</h2>
				<div className="flex flex-col space-x-0 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
					<Link
						href="/syllabus"
						className="flex flex-col items-center justify-center h-20 px-8 font-bold duration-150 border-2 border-black rounded-sm bg-neutral-100 hover:bg-neutral-200"
					>
						<FeatherIcon size={30} />
						<span>Syllabus</span>
					</Link>
					<Link
						href="/assignments"
						className="flex flex-col items-center justify-center h-20 px-8 font-bold duration-150 border-2 border-black rounded-sm bg-neutral-100 hover:bg-neutral-200"
					>
						<PencilRulerIcon size={30} />
						<span>Assignments</span>
					</Link>
					<Link
						href="/schedule"
						className="flex flex-col items-center justify-center h-20 px-8 font-bold duration-150 border-2 border-black rounded-sm bg-neutral-100 hover:bg-neutral-200"
					>
						<CalendarIcon size={30} />
						<span>Schedule</span>
					</Link>
					<Link
						href="https://discord.gg/cruquDEe"
						target="blank"
						className="flex flex-col items-center justify-center h-20 px-8 font-bold duration-150 border-2 border-black rounded-sm bg-neutral-100 hover:bg-neutral-200"
					>
						<MessageCircleIcon size={30} />
						<span>Discord</span>
					</Link>
				</div>
			</section>
			<hr className="w-full border-neutral-300" />
			<section className="px-10 py-4">
				<h2 className="flex space-x-2 text-2xl font-bold underline">
					<UsersIcon />
					<span>Diversity and Inclusion</span>
				</h2>
				<section className="w-full space-y-2">
					<p>You all belong in this class and as such should expect to be treated by your classmates and the course staff with respect. It is our goal, as the course staff, to provide an interesting and challenging environment that is conducive to your learning. If any incident occurs that challenges this commitment to a supportive and inclusive environment, please let El know so the issue can be addressed.</p>
					<section>
						<h3 className="font-bold underline">Student Wellness</h3>
						<p>El and the staff are committed to supporting an inclusive learning environment for all students, regardless of prior experience, backgrounds, culture, beliefs, physical/mental health challenges, etc. Diversity in these areas is invaluable to innovation in today's society, and we are here to support you as you acclimate to CS 1 and Caltech. It is very important to us that you take care of your mental wellness throughout the course. Everyone on the course staff is available to chat, and you can always attend office hours for a non-academic conversation if necessary.</p>
					</section>
					<section>
						<h3 className="font-bold underline">Students with Documented Disabilities</h3>
						<p>
							Students who may need an academic accommodation based on the impact of a disability must initiate the request with Caltech Accessibility Services for Students{" "}
							<TextLink
								href="http://cass.caltech.edu/"
								target="blank"
							>
								(CASS)
							</TextLink>
							. Professional staff will evaluate the request with required documentation, recommend reasonable accommodations, and prepare an Accommodation Letter for faculty dated in the current quarter in which the request is being made. Students should contact CASS as soon as possible, since timely notice is needed to coordinate accommodations. Undergraduate students should contact Dr. Lesley Nye, Associate Dean of Undergraduate Students (administrative contact: Beth Larranaga) and graduate students should contact Dr. Kate McAnulty, Associate Dean of Graduate Studies (administrative contact: Jacob Dalton).
						</p>
					</section>
				</section>
			</section>
		</main>
	);
}
