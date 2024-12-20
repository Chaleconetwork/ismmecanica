import { Navbar } from "@/components/navbar";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
// import { CartAndSearch } from "@/components/cartAndSearch";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="h-full w-full grow">
                <Component {...pageProps} />
            </main>
        </div>
    )
}
