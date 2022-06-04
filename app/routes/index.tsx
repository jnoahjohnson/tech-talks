import { Link } from "remix";

export default function Index() {
  return (
    <>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </>
  );
}
