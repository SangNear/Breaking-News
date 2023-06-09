import NewsArticles from "@/components/NewsArticles";
import { NewsArticle } from "@/models/NewArticles";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const Search = () => {
    const [searchResultQuery, setSearchResultQuery] = useState<NewsArticle[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [searchResultLoadingErrors, setsearchResultLoadingErrors] = useState(false)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
        const searchQuery = formData.get("searchQuery")?.toString().trim()

        if(searchQuery){
            try {
                setSearchResultQuery(null);
                setLoading(true)
                const res = await fetch("/api/search-news?q=" + searchQuery)
                const data: NewsArticle[] = await res.json() 
                setSearchResultQuery(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
                
            }
        }
    }
    return ( 
        <main>
            <Form className="mt-3" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Search News</Form.Label>
                    <Form.Control name="searchQuery" placeholder="E.g, Sports,..."></Form.Control>
                </Form.Group>
                <Button type="submit" className="mt-3">
                    Search
                </Button>
            </Form>
            <div className="mt-3">
                {loading && <Spinner animation="border"/>}
                {searchResultQuery && <NewsArticles articles={searchResultQuery} />}
            </div>
        </main>
    );
}
 
export default Search;