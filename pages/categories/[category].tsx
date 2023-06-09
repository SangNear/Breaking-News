import NewsArticles from "@/components/NewsArticles";
import { categorySlug } from "@/models/CategoriesSlug";
import { NewsArticle, NewsResponse } from "@/models/NewArticles";
import { GetStaticPaths, GetStaticProps } from "next";

interface CategoryNewPagesProps {
    newArticles: NewsArticle[]
}

export const getStaticPaths: GetStaticPaths = async () => {
    
    const paths = categorySlug.map((slug) => ({ params: { category: slug } }));
    
    
    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps<CategoryNewPagesProps> = async ({params}) => {
    const category = params?.category?.toString()
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)
    const data: NewsResponse = await response.json();
    return { props: { newArticles: data.articles } }
}

const CategoryNewPages = ({ newArticles }: CategoryNewPagesProps) => {
    return (
        <NewsArticles articles={newArticles} />
    );
}

export default CategoryNewPages;