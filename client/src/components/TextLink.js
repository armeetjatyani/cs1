import Link from "next/link";

export default function TextLink({ href, target, children }) {
	return (
		<Link
      href={href}
      target={target}
			className="duration-150 border-b-[3px] border-gray-500 hover:border-black active:translate-y-[2px]"
		>
			{children}
		</Link>
	);
}
