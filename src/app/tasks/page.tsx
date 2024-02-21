"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Task {
  title: string;
  description: string;
  _id: string;
}

interface CardProps {
  tasks: Task[] | null;
  onDelete: (id: string) => void;
}

function Card(props: CardProps) {
  const { tasks, onDelete } = props;

  return (
    <>
      {tasks?.map((task, i) => (
        <div className="col-md-4  mt-4" key={i}>
          <div className="card text-bg-secondary    h-100 ">
            <div className="card-body">
              <div className="text-end mb-3 ">
                <button
                  className="btn btn-outline-dark "
                  onClick={() => onDelete(task._id)}
                >
                  X
                </button>
              </div>
              <div>
                <h2 className="card-title text-center">{task.title}</h2>
                <p
                  className="card-text fw-bold "
                  style={{ textAlign: "justify", textIndent: "1em" }}
                >
                  {task.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [show, setShow] = useState(false);
  const { data } = useSession();

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/task/${id}`);

      setTasks(
        (prevTasks) => prevTasks?.filter((task) => task._id !== id) || null
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!data) {
        setShow(false);
      } else {
        setShow(true);
        try {
          const response = await axios.get<Task[]>(
            `/api/task/${data!.user?._id}`
          );
          setTasks(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [data]);

  return (
    <>
      <div className="container-sm " style={{ marginBottom: "360px" }}>
        <div className="row">
          {show ? (
            <Card tasks={tasks} onDelete={handleDelete} />
          ) : (
            <h2>Please wait...</h2>
          )}
        </div>
      </div>
    </>
  );
}
