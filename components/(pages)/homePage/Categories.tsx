

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
        <section className="mt-4 py-12">



            <div className="mx-auto px-0 max-w-7xl text-center">

                <h2 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-10 font-extrabold text-transparent text-3xl md:text-4xl">
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
                                    <h3 className="mb-1 font-semibold text-purple-100 text-xl">{cat.title}</h3>
                                    <p className="text-purple-200/80 text-sm leading-6">{cat.description}</p>
                                </div>
                            )
                        }))}
                    />
                </div>
            </div>


            <Magnet padding={50} disabled={false} magnetStrength={3}>
                <Button variant='contained' color='primary' sx={{ mt: 4, borderRadius: 3, textTransform: 'none', fontWeight: 'bold' }}>
                    <Link href={'/categories'} className='flex justify-center items-center gap-4 text-white'>
                        <Image
                            src={eye}
                            alt=''
                            width={30}
                            height={30}
                            className="rounded-lg object-cover"
                        />
                        مشاهده همه </Link >
                </Button>
            </Magnet>

        </section>
    )
}

export default Categories

