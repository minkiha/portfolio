import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="flex flex-row h-16 justify-center items-center text-lg z-40 max-w-2xl w-full fixed">
        <div className="basis-1/4 text-center">
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
        <div className="basis-1/4 text-center">
            <Link href="/store">
                <a>Projects</a>
            </Link>
        </div>
        <div className="basis-1/4 text-center">
            <Link href="/blog">
                <a>Blog</a>
            </Link>
        </div>
    </div>
    )
}