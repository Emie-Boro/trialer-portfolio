import Link from "next/link"


const ContactPage = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-white mb-12 sm:text-xl sm:font-semibold">/contact</h1>
      <div className="flex lg:justify-evenly sm:flex-col sm:text-sm">
        {/* <form className="lg:w-2/3 sm:mb-10">
          <div className="flex flex-wrap sm:flex-col">
            <input className="bg-background border border-gray p-1 lg:mr-1 mb-2 lg:w-1/3 sm:w-full sm:py-2" type="text" name="" id="" placeholder="Name" />
            <input className="bg-background border border-gray p-1 lg:lg:mr-2 mb-2 lg:w-1/3 sm:w-full sm:py-2" type="text" name="" id="" placeholder="Email" />
            <input className="bg-background border border-gray p-1 lg:lg:mr-2 mb-2 lg:w-2/3 sm:w-full sm:py-2" type="text" name="" id="" placeholder="Title" />
            <textarea className="bg-background border border-gray p-1 lg:mr-2 lg:w-2/3 sm:w-full" id="" cols="30" rows="10" placeholder="Message"></textarea><br />
          </div>
          <button type="submit" className="border border-primary p-3">Send</button>
        </form> */}
        <div className="lg:w-1/3">
          <h1 className="text-justify">I’m interested in job role, internships and/or freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</h1>
          <div className="border p-5 mt-8 lg:2/4 sm:mt-12">
            <h3 className="mb-2 text-white font-semibold">Message me here</h3>
            <div className="hover:text-primary">
              <i className="bi bi-envelope lg:mr-1"></i>boro2dev@gmail.com
            </div> <br />
            <div className="hover:text-primary">
              <i className="bi bi-twitter lg:mr-1"></i><Link href={'https://twitter.com/trialerjs'} target="_blank">Trialer.js</Link>
            </div> <br />
            <div className="hover:text-primary">
              <i className="bi bi-instagram lg:mr-1"></i><Link href={'https://www.instagram.com/trialerjs/'} target="_blank">Trialer.js</Link>
            </div><br />
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
