import {Container,Jumbotron} from 'react-bootstrap'

const Welcome = ()=>(

    <Jumbotron fluid className ="mt-4 jumbotron">
        <Container>
            <h1 className="jumbo-title">Rabz BookCorner</h1>
            <h5>Largest Bookstore in Europe</h5>
            <p className ="mt-4">
            Welcome to my bookstore. You will find all kinds of books here including Fantasy, Horror, Scifi, History, Romance and much more ...
            </p>
        </Container>
</Jumbotron>
)

export default Welcome