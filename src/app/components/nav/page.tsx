import Link from "next/link";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav_main">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/lab">Lab</Link>
        </li>
      </ul>
    </nav>
  );
}
