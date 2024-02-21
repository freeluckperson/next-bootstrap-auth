import Image from "next/image";

export default function AboutPage() {
  return (
    <div
      className=" container "
      style={{ marginTop: "150px", marginBottom: "260px" }}
    >
      <h2 className="text-center text-secondary ">
        👋 Hello! I'm Erick Segura, a fullstack web developer 🌐💻 I'm pleased
        to create web projects with MERN and PERN stacks 📚
      </h2>
      <div className="d-flex justify-content-around  mt-5">
        <a href="https://github.com/freeluckperson" target="_blank">
          <Image src="/github.svg" alt="..." width={60} height={60} />
        </a>
        <a
          href="https://www.linkedin.com/in/erick-daniel-segura-cabello-9b172a129/"
          target="_blank"
        >
          <Image src="/link.svg" alt="..." width={60} height={60} />
        </a>
        <a
          href="https://www.mediafire.com/file/27r41fq07cujz71/hdv.pdf/file"
          target="_blank"
        >
          <Image src="/pdf.svg" alt="..." width={60} height={60} />
        </a>
      </div>
    </div>
  );
}
