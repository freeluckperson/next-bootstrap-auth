import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [actualStatus, setActualStatus] = useState(false);

  const { status } = useSession();

  const handleOnClick = async () => {
    await signOut();
  };

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
    if (status === "authenticated") {
      setActualStatus(true);
    } else {
      setActualStatus(false);
    }
  }, [status]);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <Link href="/">
            <Image
              className="navbar-brand"
              src="/logo.png"
              alt="Next.js Logo"
              width={35}
              height={35}
              style={{
                width: "auto",
                height: "auto",
              }}
              priority
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <>
                <li className="nav-item">
                  <Link href="/tasks" className="nav-link " aria-current="page">
                    Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/createTask"
                    className="nav-link "
                    aria-current="page"
                  >
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/profile"
                    className="nav-link "
                    aria-disabled="true"
                  >
                    Profile
                  </Link>
                </li>
              </>

              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            {actualStatus ? (
              <div className="d-flex ">
                <button
                  className="btn btn-outline-dark me-2"
                  onClick={handleOnClick}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="d-flex ">
                <Link href="/login" className="btn btn-outline-dark me-2">
                  Login
                </Link>
                <Link href="/register" className="btn btn-outline-dark ">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
