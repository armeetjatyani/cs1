import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="text-black bg-neutral-100 dark:bg-neutral-900 dark:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
