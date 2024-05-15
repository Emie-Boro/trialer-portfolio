'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className="sm:p-2">
            <nav className="sm:p-2">
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
                            <span className="block bg-primary w-6 h-0.5 mb-1"></span>
                            <span className="block bg-primary w-6 h-0.5"></span>
                        </button>
                    </div>
                </div>
                {showMenu && (<div className="flex flex-col py-5">
                    <ul className="flex flex-col">
                        <li className="mb-3"><Link href={'/'}><span className="text-primary">#</span>Home</Link></li>
                        <li className="mb-3"><Link href={'/projects'}><span className="text-primary">#</span>projects</Link></li>
                        <li className="mb-3"><Link href={'/about'}><span className="text-primary">#</span>about-me</Link></li>
                        <li className="mb-3"><Link href={'/contact'}><span className="text-primary">#</span>contact</Link></li>
                    </ul>
                </div>)}
                <div>
                    <ul className="sm:hidden flex sm:flex-col">
                        <li className="mr-3"><Link href={'/'}><span className="text-primary">#</span>Home</Link></li>
                        <li className="mr-3"><Link href={'/projects'}><span className="text-primary">#</span>projects</Link></li>
                        <li className="mr-3"><Link href={'/about'}><span className="text-primary">#</span>about-me</Link></li>
                        <li className="mr-3"><Link href={'/contact'}><span className="text-primary">#</span>contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
