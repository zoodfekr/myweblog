import axios from "axios";


const ServerUrl = 'http://localhost:4004/api/articles'

export const getAllArticles = async () => {
    const res = await axios.get(ServerUrl);
    const data = JSON.stringify(res.data);
    return data;
}

export const GetArticlesById = async (id: string) => {
    const res = await axios.get(`${ServerUrl}/${id}`);
    const data = JSON.stringify(res.data);
    return data;
}



export const AddNewArticle = async (value) => {

    const body = {
        title: value.title,
        content: value.content,
        image: value.image,
        categoryId: value.categoryId,
        author: value.author,
    }

    const res = axios.post(ServerUrl, body)
    const data = JSON.stringify(res.data);
    return data
}