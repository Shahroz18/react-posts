import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

function Posts() {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    useEffect(() => {

        getPosts();

        async function getPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            setPosts(data);
            setLoading(false);
        }
    });

    if (loading) {
        return (
            <div>
                <Container fluid className="text-center p-4 m-4"><h5>Loading...</h5></Container>
            </div>
        )
    }

    return (
        <div>
            {posts && (
                <Container fluid>
                    <Row className='justify-content-center'>
                        {posts.map((post) => (
                            <Col key={post.id} className='col-3 p-4 m-4 border shadow text-center'>
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    )
}

export default Posts;