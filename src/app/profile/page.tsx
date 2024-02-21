"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data, status } = useSession();

  return (
    <>
      <h2 className="text-center">ProfilePage</h2>
      <pre>{JSON.stringify({ data, status }, null, 2)}</pre>
    </>
  );
}
