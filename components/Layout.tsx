import Link from "next/link"
import React from "react"
import Image from 'next/image'
import bg from '../public/landingbg.svg'
import {Navbar} from './Navbar'
import dexter from '../public/dexter.png'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col h-screen text-slate-100 items-center overflow-y-auto">
            <Image src={bg} layout="fill" objectFit="cover"/>
            <Navbar />
            
            <div className="flex-auto z-40 max-w-2xl w-full px-6">
                <div className="h-16"></div>
                {children}
                <div className="flex justify-center">
                <Image className="rounded-lg" src={dexter}/>
                </div>
                <div className="flex justify-center text-5xl py-16">Under Construction 🚧</div>
            </div>
            
            <div className="flex h-16 w-full bottom-0 z-40 items-center justify-center">
                Made by Minki
            </div>
        </div>
    )
}

export default Layout