'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Footer() {
    const router = useRouter();
    const path = usePathname();
    function renderPage() {
        let renderPage = path == '/' ? '/rendered' : (path == '/hakkimda' ? '/rendered/hakkimda' : '');
        router.push(renderPage)
    }
    return (
        <>
            <div className='bottom-0 absolute z-[999] bg-[rgb(30,37,40)] w-[100vw] flex flex-row border-t-[1px] border-t-zinc-900'>
                <Link href={'https://github.com/itscactus'} target='_blank' className='font-mono flex flex-row gap-1 items-center cursor-pointer hover:bg-white/20 pt-0 pb-0 pr-2'>
                    <Image width={512} height={512} className='w-4 h-4' alt='gitIcon' src={'/git.png'} />
                    <span>github</span>
                </Link>
                <Link href={'https://instagram.com/itscactusdev'} target='_blank' className='font-mono flex flex-row gap-1 items-center cursor-pointer hover:bg-white/20 pt-0 pb-0 pr-2 pl-2'>
                    <Image width={512} height={512} className='w-4 h-4' alt='instaIcon' src={'/insta.png'} />
                    <span>instagram</span>
                </Link>
                {
                    (path == '/' || path == '/hakkimda') ?  
                    <button onClick={() => renderPage()} className='absolute right-28 hover:bg-white/20 pt-0 pb-0 pr-2 pl-2'>$ npm run dev</button>
                    : ''
                }
                <div className='absolute right-0 hover:bg-white/20 pt-0 pb-0 pr-2 pl-2'>
                    cactusdev ©️
                </div>
            </div>
        </>
    )
}