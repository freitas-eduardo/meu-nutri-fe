"use client";
import React from "react";
import styles from "./public-layout.module.scss";

// import { Container } from './styles';
type PublicLayoutProps = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <section className={styles.publicLayout}>
      
      {children}
    </section>
  );
};

export default PublicLayout;
