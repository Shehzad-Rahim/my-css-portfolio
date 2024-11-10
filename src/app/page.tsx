import Image from "next/image";
import shehzad from '../../public/images/ShehzadRahim.png'
import Link from "next/link";
export default function Home() {
  return (
    <div id="home" >

      <div id="home-content">
      <h2 >i am a professional</h2>
      <h1 >web designer</h1>
     <p >Hey I am <span>Shehzad Rahim</span> From Karachi Pakistan, I am a modern web designer and developer with couple years of experience in IT field, also have giant intrest in Artificial Intelligence.</p>

     <button>
      <Link href='contact'>Hire Me</Link>
      </button>
     </div>
     <div id="home-image">
     <div id="image-div">

      <Image src={shehzad} alt="shehzad rahim"></Image>
      

     </div>
     </div>
    </div>
  );
}
