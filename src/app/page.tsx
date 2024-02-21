import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";
// import styles from "./page.module.css";

function Slide() {
  return (
    <section>
      <div className="my-5">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="/js.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item ">
              <Image
                src="/ts.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/jest.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/docker.svg"
                className="d-block w-100"
                alt="..."
                width={450}
                height={450}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/next.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/node.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/bootstrap.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/mongo.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/jwt.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/zod.svg"
                className="d-block w-100"
                alt="..."
                width={0}
                height={0}
                style={{ width: "450px", height: "450px" }}
              />
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
