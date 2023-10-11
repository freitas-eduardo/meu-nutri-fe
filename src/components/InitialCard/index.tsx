"use client";

import React from "react";
import Link from "next/link";
import style from "./initial-card.module.scss";
import { Card, Typography, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const InitialCard: React.FC = () => {
  return (
    <Card
      title="Escolha a forma que deseja logar"
      className={style.cardLoginType}
    >
      <Card.Grid style={{ width: "100%" }}>
        <Link
          href={"/sign-in?type=patient"}
          style={{ display: "flex", justifyContent: "space-between" }}
          
        >
          <Typography.Title
            level={5}
            style={{ margin: 0, alignSelf: "center" }}
          >
            Logar como paciente
          </Typography.Title>
          <Button
            type="primary"
            shape="circle"
            icon={<RightOutlined />}
            size={"large"}
          />
        </Link>
      </Card.Grid>
      <Card.Grid style={{ width: "100%" }}>
        <Link
          href={"/sign-in?type=nutricionist"}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography.Title
            level={5}
            style={{ margin: 0, alignSelf: "center" }}
          >
            Logar como nutricionista
          </Typography.Title>
          <Button
            type="primary"
            shape="circle"
            icon={<RightOutlined />}
            size={"large"}
          />
        </Link>
      </Card.Grid>
    </Card>
  );
};

export default InitialCard;
