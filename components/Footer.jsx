import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <hr className="mt-12" />
            <footer className="p-5">
                <div className="">
                    <div className="flex lg:justify-between md:justify-between sm:flex-col">
                        <div>
                            <div className="flex my-3">
                                <Image src={'/assets/Union.svg'} alt="Portfolio Logo" width={10}
                                    height={10} />
                                <h3 className="ml-3 text-sm">Trialer.js</h3>
                            </div>
                            <p className="text-xs">Web Designer and Full Stack Developer</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl text-white">Media</h3>
                            <div className="">
                                <Link href={'https://github.com/Emie-Boro'} className="hover:text-primary"><i className="bi bi-github"></i>
                                </Link>
                                <Link href={'https://twitter.com/trialerjs'} target="_blank" className="mx-3 hover:text-primary"><i className="bi bi-twitter"></i></Link>
                                <Link href={'https://www.instagram.com/trialerjs/'}className="hover:text-primary mr-3"><i className="bi bi-instagram"></i></Link>
                                <Link href={'https://www.linkedin.com/in/emiedonmokumo-dick-boro-a191a0269/'}className="hover:text-primary"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-10 text-center text-xs">&copy; Copyright 2022. Designed by <Link href={'https://www.figma.com/@elias_dev'} target="_blank" className="text-primary hover:text-gray">Elias</Link></p>
            </footer>
        </>
    )
}

export default Footer
