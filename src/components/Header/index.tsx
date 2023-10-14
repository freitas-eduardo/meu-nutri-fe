"use client";
import React from "react";
import styles from "./Header.module.scss";
import { Avatar, Button, Dropdown, Flex, MenuProps, Typography } from "antd";
import { getInitials } from "@/utils";
// import { Container } from './styles';

type HeaderProps = {
  fullName: string;
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Fazer Log out
      </a>
    )
  }
];

const Header = ({ fullName }: HeaderProps) => {
  const initialWords= getInitials(fullName , 2)
  return (
    <section className={`${styles.header}`}>
      <strong className={`${styles.title}`}>Meu Nutri </strong>
      <Flex align="center" justify="flex-start">
        <Avatar size={"large"} shape="circle">
          {initialWords}
        </Avatar>
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Button type="text">
            <span className={`${styles["header-button"]}`}>
              {fullName}
            </span>
          </Button>
        </Dropdown>
      </Flex>
    </section>
  );
};

export default Header;
