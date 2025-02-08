import { Geist, Geist_Mono } from "next/font/google";
import "./styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Create New Job/Task</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
