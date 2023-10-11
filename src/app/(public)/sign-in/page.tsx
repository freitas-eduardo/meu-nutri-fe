"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import PublicLayout from "../layout";
import { Form, Input, Typography, Flex, Segmented, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/publicSchemaValidations";

import styles from "./signin.module.scss";
import Link from "next/link";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const SignIn: React.FC = () => {
  const searchParams = useSearchParams();
  const loginType = searchParams.get("type") || "patient";
  const {
    handleSubmit,
    register,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  return (
    <PublicLayout>
      <form className={styles.signin}>
        <Typography.Title level={1}> Meu Nutri </Typography.Title>
        <Typography.Paragraph>
          {" "}O seu nutricionista a um clique de distância{" "}
        </Typography.Paragraph>
        <Input placeholder="E-mail" size="large" />
        <Input.Password className="mt-3" placeholder="Senha" size="large" />
        <Flex className="mt-2 ml-1 ml-0" justify="flex-start" align="center">
          <Link href={"/reset-password"}>Esqueci minha senha</Link>
        </Flex>
        <Flex className="mt-3  ml-0" justify="space-between" align="center">
          <Link href={"/"}>
            <Button type="link">Voltar</Button>
          </Link>
          <Button size="large" type="primary">
            Entrar
          </Button>
        </Flex>
      </form>
    </PublicLayout>
  );
};

export default SignIn;
