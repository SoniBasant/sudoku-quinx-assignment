import localFont from "next/font/local";
import "./globals.css";


// fontawesome icons
// font awesome style
import '@fortawesome/fontawesome-svg-core/styles.css';
// fontawesome library provided by react
import './lib/fontawesome';
// import configuration of font awesome to modify configuration settings
import { config } from '@fortawesome/fontawesome-svg-core';
// Prevent Font Awesome from adding its CSS automatically
config.autoAddCss = false;

// fonts
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

export const metadata = {
  title: "Sudoku Web App",
  description: "Assignment by Quinx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
