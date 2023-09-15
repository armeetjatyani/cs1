import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
	const { theme } = useTheme();
	return (
		<div
			id="app"
			className={`${font.className} text-[14px]`}
		>
			<ThemeProvider
				defaultTheme="light"
        attribute="class"
        disableTransitionOnChange
			>
				<div className="scroll-smooth">
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</div>
			</ThemeProvider>
		</div>
	);
}
