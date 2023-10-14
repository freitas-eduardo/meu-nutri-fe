"use client";
import React from "react";
import AuthenticatedLayout from "../layout";
import Header from "@/components/Header";
import styles from "./home.module.scss";
import {
  Button,
  Card,
  Col,
  Dropdown,
  MenuProps,
  Row,
  Statistic,
  Typography
} from "antd";
import { MoreOutlined } from "@ant-design/icons";
import CountUp from "react-countup";
// import { Container } from './styles';

const Home: React.FC = () => {
  const fullName = "Juliana Cardoso";
  const formatter = (value: number) => <CountUp end={value} separator="." />;
  const items: MenuProps["items"] = [
    {
      key: "pacient_1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Fazer Pacientes
        </a>
      )
    }
  ];

  return (
    <AuthenticatedLayout>
      <Header fullName={fullName} />
      <section className={`${styles["home-container"]}`}>
        <h1 className={`${styles["home-container-title"]}`}> Home</h1>
        <section className={`${styles["home-container-pacientes"]}`}>
          <Card
            title="Meus pacientes"
            extra={
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
              >
                <Button type="text">
                  <MoreOutlined style={{ fontSize: "36px" }} />
                </Button>
              </Dropdown>
            }
            bordered={false}
          >
            <Row>
              <Col xs={24} md={8}>
                <Statistic
                  title="Meus Pacientes"
                  value={90}
                  formatter={formatter}
                />
                <Button className={'mt-5'} type="primary" size={'large'}>
                  Adicionar Paciente
                </Button>
              </Col>
              <Col xs={24} md={16}>
                0 1 300px
              </Col>
            </Row>
          </Card>
        </section>
        <section className={`${styles["home-container-consultas"]}`}>
          {/* <Card
            title="Próximas Consultas"
            extra={<a href="#">More</a>}
            bordered={false}
          >
            Card content
          </Card> */}
        </section>
      </section>
    </AuthenticatedLayout>
  );
};

export default Home;
