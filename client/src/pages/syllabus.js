import TextLink from "@/components/TextLink";

export default function SyllabusPage() {
	return (
		<main className="w-full space-y-4">
			<section className="px-10 py-4">
				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Course Overview</span>
					</h2>
					<p>This course is an introduction to computer programming emphasizing the program design process and pragmatic programming skills. It will use the Python programming language and does not assume previous programming experience.</p>
					<p>Program development and maintenance skills including debugging, testing, and documentation will also be taught.</p>
					<section>
						<h3 className="font-bold underline">Material Covered</h3>
						<ul className="relative list-disc left-8">
							<li>Data types</li>
							<li>Variables, assignments, and scoping</li>
							<li>Control structures</li>
							<li>Functions and program decomposition</li>
							<li>Modules</li>
							<li>Basic input/output (terminal and file)</li>
							<li>Text, file, and CSV data processing</li>
							<li>Exception-handling</li>
							<li>Object-oriented programming</li>
							<li>Debugging</li>
							<li>Testing</li>
							<li>Documentation</li>
							<li>Code quality</li>
						</ul>
						<p>Assignments will include problems drawn from fields such as biochemistry, physics, data science, and games.</p>
					</section>

					<section className="space-y-2">
						<h3 className="font-bold underline">Learning Outcomes</h3>
						<p>By the end of this course (or, upon successful completion of this course), you will be able to: write, document, test and debug programs of up to a few hundred lines of code in Python understand the fundamentals of imperative and object-oriented programming write clean, readable, maintainable and understandable code</p>
						<p>Following CS 1, students will also be ready to learn other programming languages in courses such as CS 11/12, be ready to take more in-depth courses such as CS 2 and CS 4, and apply Python to a variety of real-world situations in research/industry.</p>
					</section>
				</section>

				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Course Technologies</span>
					</h2>
					<p>This course will be using the following external websites throughout the term:</p>
					<ul className="relative list-disc left-8">
						<li>Discord (the primary communication channel for course-related discussions and questions)</li>
						<li>CodePost (for submitting homework)</li>
						<li>Canvas (for grade management)</li>
					</ul>
				</section>

				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Lectures</span>
					</h2>
					<p>Lectures are held M/W/F from 1:00-1:55PM (Pacific Time). Lectures are designed to introduce new material throughout the quarter, motivate key concepts, and demonstrate programming and problem-solving strategies. While not required, we strongly encourage lecture attendance and design lectures to be useful to your overall learning experience in CS 1.</p>
					<p>We encourage interactions and questions in lecture! Our goal is to incorporate active learning where appropriate in this class to support an engaging environment, giving you the opportunity to practice key problem-solving strategies, interact with peers, and ask questions of El and the TAs. Lectures are designed to be worth your time and contribute to your educational outcomes, and feedback on what is most helpful in an online/in-person lecture format is welcome (you can email or DM El, and we will have a course feedback midpoint survey after the first few weeks of the term).</p>
					<p>To support engagement in class, recordings will only be provided to students with approved exceptional circumstances, though occasionally (e.g. for Lecture 1) El will post recordings to all students depending on lecture coverage (do not rely on this).</p>
					<p>During each lecture, there will be a class-wide chat available via Zoom for students to ask questions and this will be monitored by a TA and El.</p>
				</section>

				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Tuesday Labs</span>
					</h2>
					<p>Tuesday labs are sessions where students will work through a set of exercises related to that week's material and bridge between concept and application. Labs will also help prepare for weekly individual "mini project" assignments (the first of which is Thursday, October 6th). You should all have an assigned lab time when you registered for CS 1; there are 8 1-hour lab classes between 1-9PM on Tuesdays in Steele 102. We are excited to incorporate these lab sessions for the first time in CS 1 this year, and a few former students, Adam Blank, and El, have worked on developing these over the summer.</p>
					<p>Labs will be required as part of your final grade, and we will drop your lowest lab score. Lab 00 is optional, but will be strongly encouraged to 1) make sure you are all set up for the class and 2) get to know your TAs and peers!</p>
				</section>

				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Readings</span>
					</h2>
					<p>We will use readings (originally written by Mike Vanier) to supplement the lectures; this will allow us to keep lectures interactive and engaging without the need to cover every detail of syntax etc. The readings are the official course notes.</p>
				</section>

				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Grading</span>
					</h2>
					<p>This course follows a Pass/Fail grading scheme. The point system for the quarter is as follows:</p>
					<ul className="relative list-disc left-8">
						<li>Homework "Mini Projects" | 24</li>
						<li>Labs (lowest dropped) | 8</li>
						<li>Final Exam | 10</li>
						<li>Possible | 43</li>
						<li>Pass | 32</li>
					</ul>
				</section>
				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Assignment Grading Scheme</span>
					</h2>
					<p>Each assignment is divided into one or more sections (typically, but not always, 3). Each section will receive a grade out of 30 points on CodePost, and the CodePost grade will be divided by 10 (rounding to the nearest integer) to get the section grade (an integer between 0 and 3). Then the grade of the assignment as a whole will be the minimum of the section grades. Thus, each assignment will receive an integer grade between 0 and 3.</p>
					<p>Note that the 30 points per section will typically be divided between various metrics; for example, we might give 20 points for correctness, 5 points for documentation/comments, and 5 points for code quality (including formatting and style). We reserve the right to assign the point allocation differently for each section and each assignment.</p>
					<p>You may think that taking the minimum of the section grades is too harsh, but we also allow reworks on assignments, as we now describe. These will enable you to bring up the grade of any section with a low grade.</p>
				</section>

				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Assignment ("Mini Project") Rework Policy</span>
					</h2>
					<p>Reflecting on feedback is one of the most valuable ways you can learn from your mistakes, and we encourage you to do so. After you receive your grade for an assignment, you can rework the assignment during the 1-week "rework period" for the assignment. The reworked assignment will be graded, and you can bump you original 0-3 integer score by 1 point (so if you get 22/30 on your original submission, which rounds to 2/3 points, you can bump it up to 3/3 if you earn 26/30 on your Rework).</p>
					<p>You will start with 3 reworks to use; 1 per Mini Project assignment (at most 2 Reworks can be used on one Mini Project; you may choose to use 2 credits to bump up a lower grade by 2; the 1 point cap is enforced to avoid students submitting nothing and falling behind). In addition, for every 3 lectures you attend and complete exit tickets for, you can earn one extra Rework. Reworks are not allowed for Tuesday Lab assignments.</p>
				</section>

				<section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Exams</span>
					</h2>

					<p>The Final Exam will be a cumulative take-home exam (strictly no-collaboration). More information will be provided later in the term.</p>
        </section>
        
        <section className="w-full py-4 space-y-2">
					<h2 className="flex space-x-2 text-2xl font-bold underline">
						<span>Academic Integrity and Caltech Honor Code
</span>
					</h2>

					<p>Caltech's Honor Code: “No member of the Caltech community shall take unfair advantage of any other member of the Caltech community.” We take collaboration and academic integrity very seriously, and have a thorough overview of expectations and rules around collaboration you are expected to be read and follow <TextLink href="https://eipsum.github.io/cs1/syllabus/collaboration.html">here</TextLink>.

</p>
				</section>
			</section>
		</main>
	);
}
