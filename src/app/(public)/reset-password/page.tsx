"use client";
import React from "react";
import PublicLayout from "../layout";
import { Button, Flex, Input, Typography } from "antd";
import Link from "next/link";

const ResetPassword: React.FC = () => {
  return (
    <PublicLayout>
      <form>
        <Typography.Title level={1}> Meu Nutri </Typography.Title>
        <Typography.Paragraph>
          Esqueceu a sua senha? Digite seu e-mail que enviaremos um link para
          definir uma nova senha
        </Typography.Paragraph>
        <Input placeholder="E-mail" size="large" />
        <Flex className="mt-2 ml-1 ml-0" justify="flex-start" align="center">
          <Link href={"/reset-password"}>Esqueci minha senha</Link>
        </Flex>
        <Flex className="mt-3  ml-0" justify="space-between" align="center">
          <Link href={"/"}>
            <Button type="link">Voltar</Button>
          </Link>
          <Button size="large" type="primary">
            Enviar
          </Button>
        </Flex>
      </form>
    </PublicLayout>
  );
};

export default ResetPassword;
