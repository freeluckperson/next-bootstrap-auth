"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Task {
  title: string;
  description: string;
}

interface CardProps {
  tasks: Task[] | null;
}

function Card(props: CardProps) {
  const { tasks } = props;

  return (
    <>
      {tasks?.map((task, i) => (
        <div className="col-md-4  mt-4" key={i}>
          <div className="card  h-100 ">
            <div className="card-body">
              <div>
                <h2 className="card-title">{task.title.substring(0, 20)}</h2>
                <p className="card-text">{task.description}</p>
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

  useEffect(() => {
    !data
      ? setShow(false)
      : (() => {
          setShow(true);
          axios
            .get<Task[]>(`/api/task/${data!.user?._id}`)
            .then(({ data }) => setTasks(data))
            .catch((error) => console.log(error));
        })();
  }, [data]);

  return (
    <>
      <div className="container" style={{ marginBottom: "360px" }}>
        <div className="row">
          {show ? <Card tasks={tasks} /> : <h2>Please wait...</h2>}
        </div>
      </div>
    </>
  );
}
