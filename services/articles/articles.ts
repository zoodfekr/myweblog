import axios from "axios";

import { articleType } from '@/types/services/articles'
import { ServerUrl } from '@/services/server'


export const getAllArticles = async (): Promise<articleType[]> => {
    const res = await axios.get(`${ServerUrl}/articles`);
    return res.data as articleType[];
}

export const GetArticlesById = async (id: string): Promise<articleType> => {
    const res = await axios.get(`${ServerUrl}/articles/${id}`);
    return res.data as articleType;
}


