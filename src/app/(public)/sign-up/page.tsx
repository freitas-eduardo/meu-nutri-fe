import React from "react";
import PublicLayout from "../layout";
import { useSearchParams } from "next/navigation";
import { Typography } from "antd";

// import { Container } from './styles';

const SignUp: React.FC = () => {
  const searchParams = useSearchParams();
  const signUpType = searchParams.get("type") || "patient";

  return (
    <PublicLayout>
    <Typography.Title level={1}> Meu Nutri </Typography.Title>
    <Typography.Paragraph>
      {" "}O seu nutricionista a um clique de distância{" "}
    </Typography.Paragraph>
  </PublicLayout>
  );
};

export default SignUp;
