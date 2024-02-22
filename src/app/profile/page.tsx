"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data, status }: { data: any; status: any } = useSession();

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="card text-bg-dark">
        <Image
          src="next2.svg"
          className="card-img "
          width={0}
          height={0}
          style={{ width: "100px", height: "100px" }}
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title fw-bold ">
            Welcome: {data?.user?.fullName}
          </h5>
          <p className="card-text fw-bold ">Status: {status}</p>
        </div>
      </div>
    </div>
  );
}
