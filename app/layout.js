import { Nunito } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Ianina Shpak CV",
  description:
    "Резюме или CV на позицию фронтенд-разработчик. Навыки: HTML, CSS, SCSS, JavaScript, React, Redux, Next.js, TypeScript",
  icons: {
    icon: '%PUBLIC_URL%/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <div className="wrapper">
          <Header />
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
