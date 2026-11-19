import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "./context/StoreContext";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const takashi = localFont({
  src: [
    {
      path: "./fonts/myfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/myfont2.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-takashi",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genius Ideas",
  description: "Anime Inspired Ideas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${takashi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex font-sans antialiased flex-col">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
