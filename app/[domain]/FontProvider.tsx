import clsx from "clsx";
import { type PropsWithChildren } from "react";

export type FontProviderProps = {
  themeName?: string;
};

export const FontProvider = async ({
  themeName,
  children,
}: PropsWithChildren<FontProviderProps>) => {
  const fontDefinition: Record<string, { className: string }> = (
    await import(`../../themes/${encodeURIComponent(themeName ?? "")}/fonts`)
  ).default;
  const fontClasses = Object.values(fontDefinition).map(
    (font) => font.className
  );
  return <div className={clsx(fontClasses)}>{children}</div>;
};
