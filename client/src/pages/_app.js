import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import { Arimo, Assistant, Chivo, JetBrains_Mono, Recursive, Reem_Kufi, Ubuntu, Varta } from "next/font/google";

const font = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });
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
