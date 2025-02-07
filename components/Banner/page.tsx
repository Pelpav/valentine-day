import Image from 'next/image';

const Banner = () => {

    return (
        <div className='bg-header' style={{height: '100%', touchAction: 'pan-y' }}>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        <Image src="/assets/banner/star.svg" alt="image de l'étoile" width={95} height={97} className='absolute top-[-74px] right-[51px]' />
                        <Image src="/assets/banner/lineone.svg" alt="image de la ligne" width={190} height={148} className='absolute top-[-74px] right-[51px]' />
                        <h1 className='text-red-500 text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'>À toi, mon amour, Renée.</h1>
                        <h2 className='text-red-500 opacity-75 text-lg font-normal text-center lg:text-start pt-8'>C&apos;est bien plus qu&apos;un simple jour sur le calendrier. C&apos;est l&apos;occasion de célébrer ce que nous construisons ensemble, ces instants partagés qui illuminent nos vies. Chaque regard, chaque sourire, chaque souvenir que nous créons renforce cette évidence : tu es celle qui fait battre mon cœur.</h2>
                        <h2 className='text-red-500 opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Que cette journée soit à l&apos;image de notre amour : sincère, tendre et inoubliable. Peu importe où nous sommes, tant que nous sommes ensemble, chaque moment devient magique. Aujourd&apos;hui, je veux simplement te rappeler combien tu comptes pour moi, combien tu embellis ma vie, et combien je suis heureux de partager ce chemin à tes côtés.</h2>
                    </div>

                    <div className='col-span-5 flex justify-center pt-10 lg:pt-0'>
                        <Image src="/face.png" alt="Renée" width={800} height={645} className="object-contain" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner;
