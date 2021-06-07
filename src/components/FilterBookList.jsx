import {Form, FormControl, Button, Container, Row, Col} from 'react-bootstrap'
import {Component} from 'react'
import SingleBook from './SingleBook'

class FilterBooklist extends Component {

    state = {
        search: "",
        books: [],
    }

    inputChange = (e) => {

        this.setState({

                search: e.target.value.toLowerCase()

        })
    }

    searchBooks =(e)=>{
        e.preventDefault()
        console.log(this.props['book'].filter(book => book["title"].toLowerCase().includes(this.state.search)).map(filterBook => (<SingleBook name={filterBook}/> )))
        console.log(this.state.search.length);        
        let filterBooks = this.props['book'].filter(book => book["title"].toLowerCase().includes(this.state.search))
        console.log(filterBooks)
        if(this.state.search.length>2){
            this.setState({
                books:filterBooks
            })
        }else{
            this.setState({
                books:[]
            })
        }
        
    }

    render() {
      return (<>  <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form className="text-center" inline onSubmit={(e) => this.searchBooks(e)}>
                            <FormControl id="search" 
                                type="text" 
                                value={this.state.search} 
                                placeholder="Search" 
                                className="mr-sm-2 my-3 ml-auto"  
                                onChange={e => this.inputChange(e)}/>
                            <Button id="searchbtn" className="mr-auto" variant="outline-success" type="submit">Search</Button>
                        </Form>
                        </Col>
                    </Row>
                 </Container>
                   
                  <Container fluid className="search-books">
                        {this.state.books.length>0 && <SingleBook name ={this.state.books}/>}
                  </Container>
           
            </>)
    }
}

export default FilterBooklist