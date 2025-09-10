import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { articleType } from '@/types/articles';
import { IconButton } from '@mui/material';

import { TiEdit } from "react-icons/ti";
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, red } from '@mui/material/colors';
import ShowCategoryById from '@/components/common/ShowCategoryById';


interface ShowArticlesTableType {
    data: articleType[],
    handleEdit: (type: 'add' | 'edit', value: articleType) => void
    deleteFunction: (id: string) => void,
    handleShow: (value: articleType) => void
}



const ShowArticlesTable = ({ data, handleEdit, deleteFunction, handleShow }: ShowArticlesTableType) => {




    return (
        <div className="bg-stone-900/95 shadow p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
                <ArticleIcon className="bg-green-100 p-1 rounded-full text-green-600 text-2xl" />
                <h2 className="font-bold text-green-800 text-lg">لیست مقالات</h2>
            </div>
            <table className="w-full text-right border-collapse">
                <thead>
                    <tr className="bg-green-50 text-green-800">
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">عنوان</th>
                        <th className="px-4 py-2">نویسنده</th>
                        <th className="px-4 py-2">بازدید</th>
                        <th className="px-4 py-2">تاریخ ایجاد</th>
                        <th className="px-4 py-2">دسته بندی</th>
                        <th className="px-4 py-2">عملگر </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((article, idx) => (
                        <tr key={article.id} className="hover:bg-green-50 border-b cursor-pointer" onClick={() => handleShow(article)} >
                            <td className="px-4 py-2 font-bold text-green-700">{idx + 1}</td>
                            <td className="px-4 py-2 text-white">{article.title}</td>
                            <td className="px-4 py-2 text-white">{article.author}</td>
                            <td className="px-4 py-2 font-semibold text-green-700">{article.views}</td>
                            <td className="px-4 py-2 font-semibold text-green-700">{article.createdAt}</td>
                            <td className="px-4 py-2 font-semibold text-green-700">
                                <ShowCategoryById id={article.categoryId} />
                            </td>

                            <td className="flex gap-2 px-4 py-2 font-semibold text-green-700">
                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation(); // جلوی onClick ردیف رو می‌گیره
                                        handleEdit("edit", article);
                                    }}
                                >
                                    <TiEdit style={{ fontSize: "25px", color: blue[500] }} />
                                </IconButton>
                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation(); // جلوی onClick ردیف رو می‌گیره
                                        deleteFunction(article.id);
                                    }}
                                >
                                    <DeleteIcon sx={{ fontSize: "25px", color: red[500] }} />
                                </IconButton>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default ShowArticlesTable