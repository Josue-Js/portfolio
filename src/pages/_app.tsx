import { LangProvider } from "@/context/LangContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <div className={poppins.className}>
        <Component {...pageProps} />
          <Toaster  />
      </div>
    </LangProvider>
  );


}
