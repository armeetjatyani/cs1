import Link from "next/link";

export default function TextLink({ href, target, children }) {
	return (
		<Link
      href={href}
      target={target}
			className="duration-150 border-b-[3px] border-neutral-400 dark:border-neutral-600 hover:border-black dark:hover:border-white active:translate-y-[2px]"
		>
			{children}
		</Link>
	);
}
