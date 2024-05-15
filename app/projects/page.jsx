import Image from "next/image"
import Link from "next/link"
import projectData from "@/components/largeProject"

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-2">
      <h1 className="text-3xl font-bold text-white mb-12 sm:text-xl">/project</h1>
      <h1 className="text-2xl font-semibold mb-5 sm:text-lg"><span className="text-primary">#</span>projects</h1>
      <div className="flex lg:flex-wrap sm:flex-col">
        {projectData.map(project => (
          <div key={project.id} className="lg:max-w-72 border lg:mr-3 sm:mb-5">
            <Image src={project.image} alt={project.description} width={250} height={20} className="w-fit" />
            <ul className="flex flex-wrap border border-primary p-2">
              {project.stacks.map((item, index) => (
                <li key={index} className="mr-1 text-sm">{item}</li>
              ))}
            </ul>
            <h1 className="text-2xl border border-primary p-2">{project.title}</h1>
            <button className="m-5"><Link className="p-2 capitalize border border-primary hover:bg-primary hover:text-white" href={project.url} >{project.status}</Link></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
