import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] }); // Шрифты

export const metadata: Metadata = {
    title: "Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TheHeader></TheHeader>
                <main className="container">{children}</main>
                <TheFooter></TheFooter>
            </body>
        </html>
    );
}
