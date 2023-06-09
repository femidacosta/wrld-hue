import Link from "next/link";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav_main">
      <li>
        <Link href="/">Home</Link>
        <Link href="/lab">Lab</Link>
      </li>
    </nav>
  );
}
