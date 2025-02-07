import Image from 'next/image';

const Banner = () => {

    return (
        <div className='bg-header'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        <Image src="/assets/banner/star.svg" alt="image de l'étoile" width={95} height={97} className='absolute top-[-74px] right-[51px]' />
                        <Image src="/assets/banner/lineone.svg" alt="image de la ligne" width={190} height={148} className='absolute top-[-74px] right-[51px]' />
                        <h1 className='text-red-500 text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'>Mettez fin aux factures impayées.</h1>
                        <h3 className='text-red-500 opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                    </div>

                    <div className='col-span-5 flex justify-center pt-10 lg:pt-0'>
                        <Image src="/face.png" alt="nothing" width={800} height={645} className="object-contain" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner;
