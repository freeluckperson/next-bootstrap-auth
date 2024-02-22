"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export default function RegisterPage() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (user) => {
    try {
      const response = await axios.post("/api/auth/signup", user);
      const res = await signIn("credentials", {
        email: response.data.email,
        password: user.password,
        redirect: false,
      });
      if (res?.ok) return router.push("/profile");
    } catch (error: any) {
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

        <h3 className="fw-bold text-secondary ">Register</h3>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            {...register("fullName", { required: true })}
            placeholder="Full Name"
          />
          {errors.fullName && <p>This field is required</p>}
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
          />
          {errors.email && <p>This field is required</p>}
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && <p>This field is required</p>}
        </div>
        <p>
          Already have an account click <Link href="/login">here</Link>
        </p>
        <div className="mb-2">
          <button className="btn btn-outline-dark " type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
