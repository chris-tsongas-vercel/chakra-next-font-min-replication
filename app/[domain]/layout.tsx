import { FontProvider } from "./FontProvider";
import { ThemeProvider } from "./ThemeProvider";

export default async function Layout({
  params,
  children,
}: {
  params: { domain: string };
  children: React.ReactNode;
}) {
  const themeName = "basic";
  return (
    <FontProvider themeName={themeName}>
      <ThemeProvider themeName={themeName}>{children}</ThemeProvider>
    </FontProvider>
  );
}
