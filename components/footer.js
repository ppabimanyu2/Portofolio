import Link from 'next/link'

export default function Footer() {
    return (
        <div className="w-screen h-mx py-2 bg-gray-900 flex justify-center items-center">
            <Link href="/auth/login"><a className="text-lg text-white font-bold">by Abimanyu</a></Link>
        </div>
    )
}