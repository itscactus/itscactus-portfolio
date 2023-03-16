export default function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='text-red-400'>const <span className='text-blue-400'>email</span> = <span className='text-blue-300'>{"'itscactusdev@proton.me'"}</span><span className='text-white'>;</span></div>
        <div className='text-red-400'>const <span className='text-blue-400'>isim</span> = <span className='text-blue-300'>{"'Eyyüp'"}</span><span className='text-white'>;</span></div>
        <div className='text-red-400'>const <span className='text-blue-400'>soyisim</span> = <span className='text-blue-300'>{"'Gülen'"}</span><span className='text-white'>;</span></div>
        <div className="text-red-400">export default function <span className='text-purple-500'>AnaSayfa()</span> <span className='text-blue-500'>&#123;</span></div>
        
        <div className='ml-4 text-red-400'>return <span className='text-orange-500'>(</span></div>
        <div className='ml-6 text-green-500'><span className='text-white'>{'<'}</span>body{' '}
        <span className='text-purple-500'> 
              className<span className='text-red-500'>=</span>
              <span className='text-blue-500'>{'{'}</span>
              <span className='text-blue-400'>{'`bg-zinc-800 font-mono`'}</span>
              <span className='text-blue-500'>{'}'}</span>
            </span>
        <span className='text-white'>{'>'}</span></div>
        {/* İsim Soyisim */}
        <div className='ml-8 text-green-500'>
          <span className='text-white'>{'<'}</span>div{' '}
            <span className='text-purple-500'> 
              className<span className='text-red-500'>=</span>
              <span className='text-blue-500'>{'{'}</span>
              <span className='text-blue-400'>{'`flex flex-col gap-2 text-md md:text-xl`'}</span>
              <span className='text-blue-500'>{'}'}</span>
            </span>
          <span className='text-white'>{'>'}</span>
          <div className='ml-2 text-white'>İsmin ne oç?</div>
          <span className='ml-2 text-white'>{'<'}</span>div{' '}
            <span className='text-purple-500'> 
              className<span className='text-red-500'>=</span>
              <span className='text-blue-500'>{'{'}</span>
              <span className='text-blue-400'>{'`text-sm md:text-md text-bold`'}</span>
              <span className='text-blue-500'>{'}'}</span>
            </span>
          <span className='text-white'>{'>'}</span>
          <div className='ml-4'>
            <span className='text-blue-400'>{'ismim {`${isim}`} {`${soyisim}`} ama nickname\'im cactusdev\'dir'}</span>
          </div>
          <span className='ml-2 text-white'>{'</'}</span>div<span className='text-white'>{'>'}</span>
          <div></div>
          <span className='text-white'>{'</'}</span>div<span className='text-white'>{'>'}</span>
        </div> 
        {/* E-Posta */}
        <div className='ml-8 text-green-500'>
          <span className='text-white'>{'<'}</span>div{' '}
            <span className='text-purple-500'> 
              className<span className='text-red-500'>=</span>
              <span className='text-blue-500'>{'{'}</span>
              <span className='text-blue-400'>{'`flex flex-col gap-2 text-md md:text-xl`'}</span>
              <span className='text-blue-500'>{'}'}</span>
            </span>
          <span className='text-white'>{'>'}</span>
          <div className='ml-2 text-white'>E-Posta adresim;</div>
          <span className='ml-2 text-white'>{'<'}</span>div{' '}
            <span className='text-purple-500'> 
              className<span className='text-red-500'>=</span>
              <span className='text-blue-500'>{'{'}</span>
              <span className='text-blue-400'>{'`text-sm md:text-md text-bold`'}</span>
              <span className='text-blue-500'>{'}'}</span>
            </span>
          <span className='text-white'>{'>'}</span>
          <div className='ml-4'>
            <span className='text-blue-400'>{'{`${email}`}'}</span>
          </div>
          <span className='ml-2 text-white'>{'</'}</span>div<span className='text-white'>{'>'}</span>
          <div></div>
          <span className='text-white'>{'</'}</span>div<span className='text-white'>{'>'}</span>
        </div> 
        <div className='ml-6 text-green-500'><span className='text-white'>{'</'}</span>body<span className='text-white'>{'>'}</span></div>
        <div className='ml-4 text-orange-500'>)</div>
        <div className='text-blue-500'>&#125;</div>
      </div>
    </>
  )
}
