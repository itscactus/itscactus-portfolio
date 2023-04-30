'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function Sidebar() {
    const [isOpen, setOpen] = useState(false);
    const [collapsedNavbarItem, setCollapseNavbarItem] = useState(true);
    const path = usePathname();
    return (
        <>
         <div className={`w-96 ${isOpen ? 'bg-[rgb(30,37,40)]' : ''}`}>
            <div className="md:hidden block">
                <button onClick={() => setOpen(!isOpen)}>
                    {isOpen ? 
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="80" height="10"></rect>
                        <rect y="20" width="80" height="10"></rect>
                        <rect y="40" width="80" height="10"></rect>
                    </svg>
                    : 
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="80" height="10"></rect>
                        <rect y="20" width="80" height="10"></rect>
                        <rect y="40" width="80" height="10"></rect>
                    </svg>
                    }
                </button>
            </div>
            <aside className={`${isOpen ? 'block' : 'hidden'} absolute md:relative z-50 md:block h-[100vh]  w-96 bg-[rgb(30,37,40)] p-2`}>
              <div className={`flex flex-col gap-1 items-start`}>
                <button onClick={() => setCollapseNavbarItem(!collapsedNavbarItem)}>
                    <div className="flex flex-row gap-2 items-center">
                        {collapsedNavbarItem ? <div className="rotate-90 font-mono">&#62;</div> : <div className=" font-mono">&#62;</div> }
                        ITSCACTUS
                    </div>
                </button>
                <div className={`${collapsedNavbarItem ? 'flex flex-col gap-[0.5px]' : 'hidden'} ml-3`}>
                    <div className={`${path == '/' ? 'bg-white/25' : ''} hover:bg-white/25 pr-2 pl-2`}>
                        <Link href='/'>
                            <div className="flex flex-row items-center gap-2">
                                <Image width={1024} height={1024} className={'w-4 h-4'} alt='.js' src={'/js.png'} />
                                <span>anasayfa.js</span>
                            </div>
                        </Link>
                    </div>
                    <div className={`${path == '/hakkimda' ? 'bg-white/25' : ''} hover:bg-white/25 pr-2 pl-2`}>
                        <Link href='/hakkimda'>
                            <div className="flex flex-row items-center gap-2">
                                <Image width={1024} height={1024} className={'w-4 h-4'} alt='.js' src={'/js.png'} />
                                <span>hakkımda.js</span>
                            </div>
                        </Link>
                    </div>
                    <div className={`${path == '/projeler' ? 'bg-white/25' : ''} hover:bg-white/25 pr-2 pl-2`}>
                        <Link href='/projeler'>
                            <div className="flex flex-row items-center gap-2">
                                <Image width={1024} height={1024} className={'w-4 h-4'} alt='.js' src={'/js.png'} />
                                <span>projelerim.js</span>
                            </div>
                        </Link>
                    </div>
                </div>
              </div>
            </aside>
          </div>
        </>
    )
}