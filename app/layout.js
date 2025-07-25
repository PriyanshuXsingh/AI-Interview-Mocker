import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner';

const inter = Outfit({subsets: ['latin']});
export const metadata = {
  title: "AI Interviewer",
  description: "AI Mock Interview Platform",
};

export default function RootLayout({ children }) {
  return (
     <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}
      >
          <Toaster />
        {children}
      </body>
    </html>
     </ClerkProvider>
  );
}
