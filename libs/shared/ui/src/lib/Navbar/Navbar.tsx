import Link from 'next/link';
import { Popover } from '@credence/ui';
import { BellDot } from 'lucide-react';

const Navbar = ({appName, navLinks}:any) => {
  return (
    <header className="text-gray-600 body-font border-b border-solid border-gray-300">
        <div className="mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            <span className="ml-3 text-xl">
                <Link key={'/'} href='/'>{appName}</Link>
            </span>
            </div>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                {
                    navLinks.map((el:any) =>(
                        <Link key={el.link} href={el.link} className="mr-5 hover:text-blue-500">
                            {el.name}
                        </Link>
                    ))
                }
            </nav>
            <div className='cursor-pointer'>
                <Popover.Popover>
                    <Popover.PopoverTrigger><BellDot size={20} /></Popover.PopoverTrigger>
                    <Popover.PopoverContent>Place content for the popover here.</Popover.PopoverContent>
                </Popover.Popover>
            </div>
        </div>
    </header>
  )
}

export default Navbar;