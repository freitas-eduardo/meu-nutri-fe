import React from 'react';

type AuthenticatedProps = {
  children: React.ReactNode;
};

const AuthenticatedLayout = ({ children }: AuthenticatedProps) => {
  return (
    <div className="authenticated-layout">
    {children}
  </div>

  );
}

export default AuthenticatedLayout;