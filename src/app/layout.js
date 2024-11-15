import { Spectral } from "next/font/google";
import "./globals.css";
import { WEBSITE_TITLE } from "@/utils/constants";
import Header from "@/components/Header/Header";
import { cookies } from "next/headers";
import { LIGHT_COLORS, DARK_COLORS } from "@/utils/constants";

const spectral = Spectral({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export const metadata = {
  title: `${WEBSITE_TITLE} | Home `,
  description:
    "A web developer with a passion for creating user-friendly, responsive websites.",
};

export default function RootLayout({ children }) {
  const savedTheme = cookies().get("color-theme");

  const theme = savedTheme?.value || "light";

  const themeColors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;
  return (
    <html lang="en" data-color-theme={theme} style={themeColors}>
      <body className={spectral.variable}>
        <Header initialTheme={theme} />
        {children}
      </body>
    </html>
  );
}
