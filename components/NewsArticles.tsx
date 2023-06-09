import { NewsArticle } from "@/models/NewArticles";
import Image from "next/image";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import placeholderImg from "../assets/newsarticle_placeholder.jpg"

interface NewArticlesProps {
    articles: NewsArticle[]
}
const NewsArticles = ({ articles }: NewArticlesProps) => {
    
    return (
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles.map(article => (
                <Col key={article.url}>
                    <a href={article.url}>
                        <Card className="h-100">
                            <Image
                                src={article.urlToImage || placeholderImg}
                                width={500}
                                height={200}
                                alt="Image News"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            ))}
        </Row>
    );
}

export default NewsArticles;