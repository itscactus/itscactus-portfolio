const email = 'itscactusdev@proton.me';
const isim = 'Eyyüp';
const soyisim = 'Gülen';
export default function AnaSayfa() {
    return (
        <>
            <div className={`flex flex-col gap-2 text-md md:text-xl`}>
                İsmin ne oç?
                <div className={`text-sm md:text-md text-bold`}>
                    ismim {`${isim}`} {`${soyisim}`} ama nickname{`'`}im cactusdev{`'`}dir
                </div>
            </div>
            <div className={`flex flex-col gap-2 text-md md:text-xl`}>
                E-Posta adresim;
                <div className={`text-sm md:text-md text-bold`}>
                    {`${email}`}
                </div>
            </div>
        </>
    )
}