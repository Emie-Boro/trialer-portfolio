'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    return (
        <header className="container mx-auto p-5 sm:p-2">
            <nav className="lg:flex lg:justify-between sm:p-2">
                <div className="flex justify-between">
                    <div>
                        <div className="flex items-center">
                            <Image src={'/assets/Union.svg'} alt="Portfolio Logo" width={20} height={10} />
                            <h3 className="ml-3 lg:text-2xl">Trialer.js</h3>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button className="" onClick={() => setShowMenu(!showMenu)}>
                            <span className="block bg-primary w-6 h-0.5 mb-1"></span>
                            <span className={`block bg-primary h-0.5 mb-1 my-1 ${showMenu ? 'w-4' : 'w-6'}`}></span>
                            <span className="block bg-primary w-6 h-0.5"></span>
                        </button>
                    </div>
                </div>
                <div>
                    <ul className="sm:hidden flex md:hidden">
                        <li className="mr-3"><Link href={'/'}><span className="text-primary">#</span>Home</Link></li>
                        <li className="mr-3"><Link href={'/projects'}><span className="text-primary">#</span>projects</Link></li>
                        <li className="mr-3"><Link href={'/about'}><span className="text-primary">#</span>about-me</Link></li>
                        <li className="mr-3"><Link href={'/contact'}><span className="text-primary">#</span>contact</Link></li>
                    </ul>
                    {showMenu && (<div className="lg:hidden flex flex-col py-5">
                        <ul className="flex flex-col">
                            <li className="mb-3"><Link href={'/'} onClick={handleClick}><span className="text-primary">#</span>Home</Link></li>
                            <li className="mb-3"><Link href={'/projects'} onClick={handleClick}><span className="text-primary">#</span>projects</Link></li>
                            <li className="mb-3"><Link href={'/about'} onClick={handleClick}><span className="text-primary">#</span>about-me</Link></li>
                            <li className="mb-3"><Link href={'/contact'} onClick={handleClick}><span className="text-primary">#</span>contact</Link></li>
                        </ul>
                    </div>)}
                </div>
            </nav>
        </header>
    )
}

export default Header
