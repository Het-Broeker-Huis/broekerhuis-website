export interface BaseSectionProps {
  background?: boolean | string;
  backgroundPosition?: "full" | "top" | "bottom";
}

export interface BaseProps extends BaseSectionProps {
  title: string;
  titleComponent?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  tagline?: string;
  taglineComponent?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}
