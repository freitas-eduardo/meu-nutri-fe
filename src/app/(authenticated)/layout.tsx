import Header from "@/components/Header";
import React from "react";

type AuthenticatedProps = {
  children: React.ReactNode;
};

const AuthenticatedLayout = ({ children }: AuthenticatedProps) => {
  return (
    <main className="authenticated-layout">
      {children}
    </main>
  );
};

export default AuthenticatedLayout;
