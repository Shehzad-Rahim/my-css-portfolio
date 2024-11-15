import Link from 'next/link'
import Image from 'next/image'
import project1 from '../../../public/images/project1.png'
import project2 from '../../../public/images/project2.png'
import project3 from '../../../public/images/project3.png'
import project4 from '../../../public/images/project4.png'
import project5 from '../../../public/images/project5.png'
import project6 from '../../../public/images/project6.png'
const page = () => {
  return (
    <div id='portfolio-container'>
      <h1 id='portfolio-title'>PORTFOLIO</h1>
      <p>Explore our diverse portfolio showcasing successful projects in web development, mobile app creation, and web design. Each project highlights our commitment to quality, creativity, and functionality, tailored to meet client needs and goals.</p>
      
      <div id='portfoli-projects-container'>
        <div className='projects-img-container'>
           <Image className='Image' src={project1} alt='project1'></Image>
           <div className="project-details">
            <h2>3d book portfolio</h2>
            <p>This is a 3d book design portfolio website created by Shehzad Rahim</p>
            <Link className='link' href={''}>visit site</Link>
           </div>
        </div>
        <div className='projects-img-container'>
        <Image className='Image' src={project2} alt='project1'></Image>
        <div className="project-details">
            <h2>Online Services</h2>
            <p>This is an online services website created by Shehzad Rahim</p>
            <Link className='link' href={''}>visit site</Link>
           </div>
        </div>
        <div className='projects-img-container'>
        <Image className='Image' src={project3} alt='project1'></Image>
        <div className="project-details">
            <h2>Figma Design</h2>
            <p>This is a portfolio website created with figma design templates by Shehzad Rahim</p>
            <Link className='link' href={''}>visit site</Link>
           </div>
        </div>
        <div className='projects-img-container'>
        <Image className='Image' src={project4} alt='project1'></Image>
        <div className="project-details">
            <h2>Resume Builder</h2>
            <p>This is a Resume Builder website created by Shehzad Rahim</p>
            <Link className='link' href={''}>visit site</Link>
           </div>
        </div>
        <div className='projects-img-container' >
        <Image className='Image' src={project5} alt='project1'></Image>
        <div className="project-details">
            <h2>Dinning on the</h2>
            <p>This is a E-commerce food website created by Shehzad Rahim</p>
            <Link className='link' href={''}>visit site</Link>
           </div>
        </div>
        <div className='projects-img-container'>
        <Image className='Image' src={project6} alt='project1' ></Image>
        <div className="project-details">
            <h2>Photography Agency</h2>
            <p>This is a Photography Agency website created by Shehzad Rahim</p>
            <Link className='link' href={''}>visit site</Link>
           </div>
        </div>
      </div>

      <button>See More</button>
    </div>
  )
}

export default page
