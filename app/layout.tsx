import ChooseThemeMenu from "@/components/ChooseThemeMenu";
import { Toaster } from "@/components/ui/sonner";
import { DocumentsProvider } from "@/contexts/DocumentsContext";
import ThemeProvider from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markdown Editor",
  description: "Editor de arquivos Markdown",
};

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
        >
          <DocumentsProvider>
            <Toaster />
            <ChooseThemeMenu />
            {children}
          </DocumentsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;