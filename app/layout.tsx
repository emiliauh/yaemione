import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yaemione — Network Infrastructure & Hosting",
  description: "IP Transit, Dedicated Servers, VPS Hosting, and Network Solutions.",
  metadataBase: new URL("https://yaemi.one"),
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
