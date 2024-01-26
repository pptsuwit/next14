import type { Metadata } from "next";
import { Layouts } from "@/components/Layouts/Layouts";

export const metadata: Metadata = {
  title: "t3t",
  description: "t3t Authentication",
};

export default function AuthLayouts({ children }: { children: React.ReactNode }) {
  return (
    <div className="main">
      <Layouts.Main>{children}</Layouts.Main>
    </div>
  );
}
