import { FaGithub , FaLinkedin , FaDev } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <p>all right reserved <span>Shehzad Rahim</span> 2024</p>
      <ul >
        <li>
            <Link  href="https://github.com/Shehzad-Rahim"> <FaGithub />  </Link>
        </li>
        <li>
            <Link href="https://www.linkedin.com/in/shahzad-rahim-37932b2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /> </Link>
        </li>
        <li>
            <Link href="https://dev.to/srahimm33"> <FaDev /> </Link>
        </li>
      </ul>
      <p>shehzadrahim33@gmail.com</p>
    </footer>
  )
}

export default Footer
