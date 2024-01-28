import type { Metadata } from "next";
import { Layouts } from "@/components/Layouts/Layouts";

export const metadata: Metadata = {
  title: "Web Backend",
  description: "Example web backend",
};

export default function AuthLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main">
      <Layouts.Main>{children}</Layouts.Main>
    </div>
  );
}
