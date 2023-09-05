import { FontProvider } from "./FontProvider";
import { ThemeProvider } from "./ThemeProvider";

export default async function Layout({
  params,
  children,
}: {
  params: { domain: string };
  children: React.ReactNode;
}) {
  return (
    <FontProvider themeName={params.domain}>
      <ThemeProvider themeName={params.domain}>{children}</ThemeProvider>
    </FontProvider>
  );
}
