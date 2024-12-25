'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const navItems = [
        {
            name: 'dashboard',
            href: '/'
        },
        {
            name: 'properties',
            href: '/properties'
        },
        {
            name: 'about',
            href: '/about'
        },
        {
            name: 'contacts',
            href: '/contacts',
        },
    ]
    return (
        <nav className="flex flex-row justify-between px-4 py-6 items-center border-b border-purple-800">
            <h1 className="text-3xl text-purple-800 font-bold"><Link href={'/'}>Elysium Property</Link></h1>
            <ul className="hidden md:flex flex-row space-x-2">
                {
                    navItems.map(navItem => (
                        <li key={navItem?.name}><Link className={`capitalize ${pathname == navItem?.href ? 'text-purple-800' : 'text-black'}`} href={navItem?.href}>{navItem?.name}</Link></li>
                    ))
                }
            </ul>
            <Image className="hidden md:block md:rounded-lg" src={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='profile-image' width={40} height={20}/>
            <ul className="flex flex-col md:hidden space-y-2">
                {
                    navItems.map(navItem => (
                        <li key={navItem?.name}><Link className={`capitalize ${pathname == navItem?.href ? 'text-purple-800' : 'text-black'}`} href={navItem?.href}>{navItem?.name}</Link></li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;