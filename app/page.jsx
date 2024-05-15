import Image from "next/image";
import Link from "next/link";
import projectData from "@/components/largeProject";

export default function Home() {
  return (
    <main className="">
      <div className="flex sm:flex-col justify-between lg:items-center">
        <div className="lg:w-2/3 lg:mr-10">
          <h1 className="text-3xl sm:text-xl">Emiedonmokumo is a <strong className="text-primary">web designer</strong> and <strong className="text-primary">full stack developer</strong></h1>
          <h4 className="text-sm my-5 sm:text-sm">He crafts responsive websites where technologies meet creativity</h4>
          <div className="flex sm:text-sm">
            <Link href={'/contact'} className="border border-primary p-2 hover:bg-primary hover:text-white mr-5">Contact me !!</Link>
            <Link href={''} className="border border-primary p-2 bg-primary text-white hover:bg-background hover:text-gray" download={''}>View Resume</Link>
          </div>
        </div>
        <div className="sm:mt-16 lg:w-2/3">
          <Image src={'/assets/Group 46.png'} alt="Hero Section Image Logo" width={400} height={10} />
          <p className="my-2 border p-2 text-sm sm:text-xs"><span className="bg-primary px-3 mr-3"></span> Currently working on <strong>Portfolio</strong></p>
        </div>
      </div>
      <div>
        <div className="relative my-16 text-center lg:w-5/6 mx-auto">
          <Image src={'/assets/Vector.png'} alt="Quotation Logo" width={20} height={10} className="absolute left-10 -top-2 sm:w-4" />
          <h3 className="border-2 lg:p-6 sm:p-3 font-bold sm:border sm:text-sm">It is possible to do great things from a small place</h3>
          <Image src={'/assets/Vector.png'} alt="Quotation Logo" width={20} height={10} className="absolute right-10 -bottom-2 sm:w-4" />

          <div className=" absolute lg:w-38 right-0">
            <h3 className="border-2 lg:p-6 sm:p-3 font-bold text-right sm:border sm:text-sm">by Tunde Onakoya</h3>
          </div>
        </div>
        <div className="mt-28">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white sm:text-xl"><span className="text-primary">#</span>projects</h1>
            <Link href={'/projects'} className="hover:text-primary text-lg text-white sm:text-sm">view all</Link>
          </div>
          <div className="mt-4 flex justify-center flex-wrap sm:flex-col sm:justify-center">
            <div className="border lg:mr-3 sm:w-82">
              <Image src={projectData[0].image} alt={projectData[0].description} width={300} height={20} className="sm:w-fit" />
              <div className="border border-primary p-2">
                {projectData[0].stacks.map((item, index) => (
                  <span key={index} className="mr-1 text-sm">{item}</span>
                ))}
              </div>
              <h1 className="text-2xl border border-primary p-2 sm:text-xl">{projectData[0].title}</h1>
              <p className="p-2 max-w-72 text-sm">{projectData[1].note}</p>
              <div className="flex justify-between">
                <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={projectData[2].url} target="_blank">{projectData[2].status}</Link></button>
                <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={projectData[2].github} target="_blank"><i className="bi bi-github"></i></Link></button>
              </div>
            </div>
            <div className="border lg:mr-3 sm:my-5">
              <Image src={projectData[1].image} alt={projectData[1].description} width={300} height={20} className="" />
              <div className="flex sm:flex-wrap border border-primary lg:p-2">
                {projectData[1].stacks.map((item, index) => (
                  <span key={index} className="lg:mr-1 text-sm sm:m-1">{item}</span>
                ))}
              </div>
              <h1 className="text-2xl border border-primary p-2 sm:text-xl">
                {projectData[1].title}</h1>
              <p className="p-2 max-w-72 text-sm">{projectData[1].note}</p>
              <div className="flex justify-between">
                <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={projectData[2].url} target="_blank">{projectData[2].status}</Link></button>
                <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={projectData[2].github} target="_blank"><i className="bi bi-github"></i></Link></button>
              </div>
            </div>
            <div className="border mr-3">
              <Image src={projectData[2].image} alt={projectData[2].description} width={300} height={20} className="" />
              <div className="border border-primary p-2">
                {projectData[2].stacks.map((item, index) => (
                  <span key={index} className="mr-1 text-sm">{item}</span>
                ))}
              </div>
              <h1 className="text-2xl p-2 sm:text-xl">{projectData[2].title}</h1>
              <p className="p-2 max-w-72 text-sm">{projectData[2].note}</p>
              <div className="flex justify-between">
                <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={projectData[2].url} target="_blank">{projectData[2].status}</Link></button>
                <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={projectData[2].github} target="_blank"><i className="bi bi-github"></i></Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="mt-16">
        <h1 className="text-3xl font-bold text-white sm:text-xl"><span className="text-primary">#</span>skills</h1>
        <div className="flex justify-evenly sm:flex-col sm:justify-center">
          <div className="relative lg:w-1/3 sm:hidden">
            <Image src={'/assets/frame 31.svg'} alt={'viewbox logo'} width={50} height={20} className="absolute left-16 top-8" />
            <Image src={'/assets/logo-outline.svg'} alt={'viewbox logo'} width={80} height={20} className="absolute right-5 top-16" />
            <Image src={'/assets/frame 31.svg'} alt={'viewbox logo'} width={40} height={20} className="absolute left-12 -bottom-8" />
          </div>
          <div className="lg:w-96">
            <ul className="flex flex-wrap sm:justify-between">
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={'#'}>Javascript</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={'#'}>Typescript</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={'#'}>VueJS</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>ReactJS</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>NextJS</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>TailwindCss</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>HTML</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>CSS</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>Sass</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>Firebase</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>NodeJS & Express</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>MongoDB</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>MySQL</Link></li>
              <li className="hover:bg-primary sm:text-xs hover:text-primary m-2 border p-2"><Link href={''}>Git & GitHub</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="mt-20">
        <div className="flex mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-xl"><span className="text-primary">#</span>contact</h1>
        </div>
        <div className=" flex justify-around sm:flex-col sm:text-sm">
          <div className="lg:w-2/4">
            <h1 className="text-justify">I’m interested in a new role, internship and/or freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</h1>
            <button className="mt-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={'/contact'}>Send Message</Link></button>
          </div>
          <div className="border p-5 lg:2/4 sm:mt-12">
            <h3 className="mb-2 text-white font-semibold">Message me here</h3>
            <span className="hover:text-primary">
              <i className="bi bi-envelope mr-1"></i>boro2dev@gmail.com
            </span> <br />
            <span className="hover:text-primary">
              <i className="bi bi-twitter mr-1"></i><Link href={'https://twitter.com/trialerjs'} target="_blank">Trialer.js</Link>
            </span> <br />
            <span className="hover:text-primary">
              <i className="bi bi-instagram mr-1"></i><Link href={'https://www.instagram.com/trialerjs/'} target="_blank">Trialer.js</Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
