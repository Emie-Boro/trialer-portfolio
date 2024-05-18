import Image from "next/image"
import Link from "next/link"
import projectData from "@/components/projects"

const ProjectsPage = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-white mb-12 md:text-xl sm:text-xl">/project</h1>
      <h1 className="text-2xl font-semibold mb-5 md:text-lg sm:text-lg"><span className="text-primary">#</span>projects</h1>
      <div className="flex lg:flex-wrap md:flex-row md:flex-wrap sm:flex-col">
        {projectData.map(project => (
          <div key={project.id} className="lg:max-w-72 md:max-w-56 border lg:m-3 md:m-2 sm:mb-5">
            <Image src={project.image} alt={project.description} width={250} height={20} className="w-fit" />
            <ul className="flex flex-wrap border border-primary p-2">
              {project.stacks.map((item, index) => (
                <li key={index} className="mr-1 text-sm md:text-xs">{item}</li>
              ))}
            </ul>
            <h1 className="text-2xl border border-primary p-2 md:text-lg sm:text-lg">{project.title}</h1>
            <h5 className="text-sm p-2">{project.description}</h5>
            <div className="flex justify-between">
              <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white md:text-sm" href={project.url} >{project.status}</Link></button>
              <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white md:text-sm" href={project.github}><i className="bi bi-github"></i></Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
