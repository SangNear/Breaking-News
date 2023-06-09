
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NewsArticle, NewsResponse } from '@/models/NewArticles'
import { GetServerSideProps } from 'next'
import NewsArticles from '@/components/NewsArticles'

interface BreakingNewProps {
  newsArticles : NewsArticle[]
}
export const getServerSideProps : GetServerSideProps<BreakingNewProps> = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  const data:NewsResponse = await response.json()

  return {
    props: {newsArticles: data.articles}
  }
}
export default function BreakingNew({newsArticles} : BreakingNewProps) {
  console.log(newsArticles);
  
  return (
    <>
      <main>
        <h1>Breaking News Pages</h1>
        <NewsArticles articles={newsArticles}/>
      </main>
    </>
  )
}
