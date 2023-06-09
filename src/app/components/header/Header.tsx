import "./header.css";
import Image from "next/image";
import Logo from "../../../../public/images/4.png";
export default function Header() {
  return (
    <div className="header_container">
      <div className="logo">
        <Image src={Logo} alt="logo" />
      </div>
    </div>
  );
}
