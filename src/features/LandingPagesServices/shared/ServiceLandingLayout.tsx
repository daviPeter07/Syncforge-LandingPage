import type { ReactNode } from "react";

interface ServiceLandingLayoutProps {
  children: ReactNode;
}

export function ServiceLandingLayout({ children }: ServiceLandingLayoutProps) {
  return <div className="pb-24 sm:pb-32">{children}</div>;
}
