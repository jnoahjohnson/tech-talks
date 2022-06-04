import { Link, useLoaderData } from "remix";
import { getStudents, Student } from "~/student";

export const loader = () => {
  return getStudents();
};

export default function Students() {
  const students: Student[] = useLoaderData();

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.slug}>
            <Link to={student.slug}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
