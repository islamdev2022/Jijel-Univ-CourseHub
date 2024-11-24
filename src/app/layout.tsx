import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jijel Univ CourseHub",
  description: "This website is for university of jijel students that contains courses , Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
  <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased h-fit flex lg:block items-center justify-center 
    lg:bg-[url('/websitebackground.png')] bg-[url('/Websitebackgmobile.png')] bg-blend-multiply bg-cover bg-center bg-no-repeat`}
  >
    {children}
  </body>
</html>

  );
}
