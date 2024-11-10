import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <div id="service-container" >
      <h1 id="service-title">My Services</h1>
      <p>Our services include expert web development, seamless mobile app development, and innovative web design to create engaging, high-performance digital solutions tailored to elevate your online presence and user experience.</p>

      <div id="service-box">

        <div className="service-item">
            <FaLaptopCode className="service-icon" />
            <h1 className='service-item-title'>Web Development</h1>
            <p>We build responsive, fast, and scalable websites tailored to your needs, ensuring optimal performance and user-friendly experiences for your audience.</p>
        </div>
        <div className="service-item">
            <TbDeviceMobileCode className="service-icon"/>
            <h1 className="service-item-title">App Development</h1>
            <p>Our mobile app development services deliver custom, feature-rich applications for iOS and Android, providing a seamless and engaging user experience.</p>
        </div>
        <div className="service-item">
            <MdOutlineDesignServices className="service-icon"/>
            <h1 className="service-item-title">Web Design</h1>
            <p >Experience creative web design that prioritizes aesthetics, functionality, and user interaction, making your brand stand out with a unique, professional look.</p>
        </div>
      </div>

      <button>
      <Link href='/contact'>Hire Me</Link>
      </button>
    </div>
  )
}

export default page
