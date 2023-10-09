import Image from "next/image";
import NutriImage from "../../public/nutri.svg";
import InitialCard from "@Components/InitialCard";

export default function InitialPage() {
  return (
    <main className="initial-page">
      <section className="initial-page-card">
        <InitialCard />
      </section>
      <Image
        src={NutriImage}
        className="initial-page-image"
        alt="imagem nutricionista"
      />
    </main>
  );
}
