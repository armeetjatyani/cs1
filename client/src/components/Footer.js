import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconButton } from "./Button";
import { Separator } from "./Separator";

export default function Footer() {
	const { resolvedTheme: theme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	function toggleTheme() {
		if (theme == "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}

	if (!mounted) return null;
	return (
		<footer className="sticky bottom-0 z-50 w-full bg-neutral-100 dark:bg-neutral-900">
			<Separator />
			<div className="flex items-center justify-between w-full px-4 py-2">
				<section>2023</section>
				<section>
					<IconButton onClick={toggleTheme}>{theme == "light" ? <MoonIcon /> : <SunIcon />}</IconButton>
				</section>
			</div>
		</footer>
	);
}
