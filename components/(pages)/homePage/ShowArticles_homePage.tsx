import ChromaGrid from '@/components/common/ui_components/chroma-grid/ChromaItem '
import Magnet from '@/components/common/ui_components/Magnet/Magnet'
import { ServerUrl_media } from '@/services/server'
import { articleType } from '@/types/articles'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ShowArticles_homePage = ({ data }: { data: articleType[] }) => {


    const palette = ["#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#06B6D4"];
    const items = data.slice(0, 10).map((article: articleType, idx: number) => ({
        image: `${ServerUrl_media}${article.image}`,
        title: article.title,
        subtitle: article.content?.slice(0, 200) || '',
        handle: `${article.author || 'ناشناس'} • ${new Date(article.createdAt).toLocaleDateString('fa-IR')}`,
        borderColor: palette[idx % palette.length],
        gradient: `linear-gradient(145deg, ${palette[idx % palette.length]}, #000)`,
        url: `/articles/${article.id}`
    }));

    return (
        <div className="mx-auto px-2 py-8 container">
            <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-10 font-extrabold text-transparent text-3xl text-center">آخرین مقالات</h1>
            <div style={{ minHeight: '480px', position: 'relative' }}>
                <ChromaGrid
                    items={items}
                    radius={260}
                    damping={0.4}
                    fadeOut={0.5}
                    ease="power3.out"
                />
            </div>


            <div className="flex justify-center mt-10">
                <Magnet padding={50} disabled={false} magnetStrength={3}>
                    <Link href="/articles">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                fontWeight: 'bold',
                                paddingX: 4,
                                paddingY: 1.5,
                                borderRadius: '12px',
                                textTransform: 'none',
                            }}
                        >
                            مشاهده همه مقالات
                        </Button>
                    </Link>
                </Magnet>
            </div>
        </div>
    )
}

export default ShowArticles_homePage