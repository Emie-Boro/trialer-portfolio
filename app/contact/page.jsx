import Link from "next/link"


const ContactPage = () => {
  return (
    <div className="md:p-5">
      <h1 className="text-3xl font-bold text-white mb-12 md:text-lg sm:text-sm sm:font-semibold">/contact</h1>
      <div className="sm:text-sm">
        <div className="flex justify-between lg:items-center md:items-center sm:flex-col">
          <div className="lg:w-96 md:w-80 md:m-5 sm:w-full">
            <h1 className="text-justify">I’m interested in job role, internships and/or freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</h1>
          </div>
          <div className="border p-5 lg:2/4 sm:mt-12">
            <h3 className="mb-2 text-white font-semibold">Message me here</h3>
            <div className="hover:text-primary">
              <i className="bi bi-envelope lg:mr-1"></i>boro2dev@gmail.com
            </div> 
            <div className="hover:text-primary">
              <i className="bi bi-twitter lg:mr-1"></i><Link href={'https://twitter.com/trialerjs'} target="_blank">Trialer.js</Link>
            </div> 
            <div className="hover:text-primary">
              <i className="bi bi-instagram lg:mr-1"></i><Link href={'https://www.instagram.com/trialerjs/'} target="_blank">Trialer.js</Link>
            </div>
            <div className="hover:text-primary">
              <Link href={'https://www.linkedin.com/in/emiedonmokumo-dick-boro-a191a0269/'} className="hover:text-primary"><i className="bi bi-linkedin"></i> Emiedonmokumo Dick-Boro</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
