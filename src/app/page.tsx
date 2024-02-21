import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";
// import styles from "./page.module.css";

function Slide() {
  return (
    <section>
      <div className="my-5" style={{ marginBottom: "360px" }}>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                target="_blank"
              >
                <Image
                  src="/js.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item ">
              <a href="https://www.typescriptlang.org/" target="_blank">
                <Image
                  src="/ts.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://jestjs.io/" target="_blank">
                <Image
                  src="/jest.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.docker.com/" target="_blank">
                <Image
                  src="/docker.svg"
                  className="d-block w-100"
                  alt="..."
                  width={450}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://nextjs.org/" target="_blank">
                <Image
                  src="/next.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://nodejs.org/en" target="_blank">
                <Image
                  src="/node.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://getbootstrap.com/" target="_blank">
                <Image
                  src="/bootstrap.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.mongodb.com/es" target="_blank">
                <Image
                  src="/mongo.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://jwt.io/introduction" target="_blank">
                <Image
                  src="/jwt.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://zod.dev/" target="_blank">
                <Image
                  src="/zod.svg"
                  className="d-block w-100"
                  alt="..."
                  width={0}
                  height={0}
                  style={{ width: "450px", height: "450px" }}
                />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Slide />
    </>
  );
}
