"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { data } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (user) => {
    try {
      const response = await axios.post("/api/task", user);
      if (response.statusText === "OK") return router.push("/tasks");
    } catch (error) {
      setError(error?.response.data.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setError(null), 3000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div
      className="container text-center mt-5  "
      style={{
        maxWidth: "360px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <p className="form-control bg-danger text-white fw-bold">{error}</p>
        )}

        <h3 className="fw-bold">Create Task</h3>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            {...register("title", { required: true, maxLength: 25 })}
            placeholder="Title"
          />
          {errors.title && <p>This field is required, max 25 character</p>}
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          {errors.description && <p>This field is required</p>}
        </div>
        <div className="mb-2" style={{ display: "none" }}>
          <input
            className="form-control"
            type="text"
            {...register("user", { required: true })}
            value={data?.user._id}
            placeholder="User"
          />
          {errors.user && <p>This field is required</p>}
        </div>
        <div className="mb-2">
          <button className="btn btn-outline-dark " type="submit">
            Make
          </button>
        </div>
      </form>
    </div>
  );
}
