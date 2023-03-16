export default function AnaSayfa() {
  return (
    <>
      <div className={`flex flex-col gap-2 text-md md:text-xl`}>
        Hangi Dilleri biliyorsun?
        <div className={`text-sm md:text-md text-bold`}>
          JavaScript, Node JS, Php, Tailwind
        </div>
      </div>
      <div className={`flex flex-col gap-2 text-md md:text-xl text-bold`}>
        Discord adresin nedir?
        <div className={`text-sm md:text-md`}>
          Discord Adresim: cactusdev#8952
        </div>
      </div>
    </>
  );
}
