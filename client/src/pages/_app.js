import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Vollkorn } from "next/font/google";

const font = Vollkorn({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
	return (
		<div
			id="app"
			className={`${font.className} text-[16px]`}
		>
			<Navbar />
      <Component {...pageProps} />
      <Footer />
		</div>
	);
}
