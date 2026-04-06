import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const gilroy = localFont({
  src: [
    { path: "./fonts/gilroy/light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/gilroy/regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/gilroy/medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/gilroy/bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
  adjustFontFallback: "Arial",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eaglewise Business Consultancy LLC-FZ",
  description:
    "UAE-based business consultancy, general trading, and e-commerce company connecting international suppliers with regional markets.",
  icons: {
    apple: [{ url: "/ebc-mark.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${gilroy.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ebc-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`min-h-full flex flex-col bg-background text-foreground ${gilroy.className}`}
      >
        {children}
      </body>
    </html>
  );
}
