

import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import eye from '@/public/icons/eye.png'
import { categoriesType } from '@/types/categories'
import MagicBento from '@/components/common/ui_components/magicBento/MagicBento'
import Magnet from '@/components/common/ui_components/Magnet/Magnet'



const Categories = async ({ data }: { data: categoriesType[] }) => {




    return (
        <section className="mt-2 sm:mt-4 py-6 sm:py-12">



            <div className="mx-auto px-1 sm:px-4 md:px-6 max-w-7xl text-center">

                <h2 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-6 sm:mb-10 font-extrabold text-transparent text-xl sm:text-2xl md:text-4xl">
                    دسته‌بندی مقالات علمی و آموزشی
                </h2>
                <div className='flex justify-center items-center p-1 border-purple-600/40 rounded-3xl'>
                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                        uniformGrid={true}
                        items={data.slice(0, 8).map((cat) => ({
                            label: cat.title,
                            backgroundColor: 'transparent',
                            element: (
                                <div className="p-1 border-purple-600/40 hover:border-purple-400/70 rounded-xl transition-colors duration-300 ease-in-out">
                                    <h3 className="mb-1 font-semibold text-purple-100 text-sm sm:text-base md:text-lg lg:text-xl">{cat.title}</h3>
                                    <p className="hidden sm:block text-purple-200/80 text-sm leading-6">{cat.description}</p>
                                </div>
                            )
                        }))}
                    />
                </div>
            </div>


            <Magnet padding={30} disabled={false} magnetStrength={3}>
                <Button variant='contained' color='primary' sx={{ 
                    mt: 2, 
                    borderRadius: 2, 
                    textTransform: 'none', 
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    paddingX: 3,
                    paddingY: 1,
                    '@media (max-width: 768px)': {
                        fontSize: '0.75rem',
                        paddingX: 2,
                        paddingY: 0.75,
                    }
                }}>
                    <Link href={'/categories'} className='flex justify-center items-center gap-2 sm:gap-4 text-white'>
                        <Image
                            src={eye}
                            alt=''
                            width={20}
                            height={20}
                            className="rounded-lg sm:w-[30px] sm:h-[30px] object-cover"
                        />
                        مشاهده همه </Link >
                </Button>
            </Magnet>

        </section>
    )
}

export default Categories

