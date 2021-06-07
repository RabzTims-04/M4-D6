
import {Container, Row, Card, Col} from 'react-bootstrap'
import {Component} from 'react'
import CommentArea from './CommentArea'
import ModalTemplate from './ModalTemplate'


class SingleBook extends Component{

    state = {
        
        selectId: '',
        selected:false,
        buttonselect:false,
        elementId:'', 
        image:"",
        alt:''
    }

    render(){
        return(
            <Container>

                    
            <Row className="justify-content-center mt-3">
            <Col>
                <div className="text-center" id={this.state.selectId}>
                   < ModalTemplate bookName={this.state.alt} image={this.state.image} bookId={this.state.selectId}/>
                   <CommentArea elementId={this.state.selectId}/>
                   
                </div> 
                </Col> 
           

             {this.props["name"].map ((book,index) => ( 
                  <Col>
                <Card
                id= {book["asin"]}
                className="mt-3 mx-3" 
                key={index}
                style={{width:'14rem', height:'35rem'}}  
                >
            
                <Card.Img 
                id= {book["asin"]}
                onClick={ (e)=> {
                    console.log('target',e.target.alt)
                     this.setState({ 
                         ...this.state,
                         selectId: e.target.id,
                         image:e.target.src,
                         alt:e.target.alt
                        })
                    /*  this.setState({image:e.target.src})
                     this.setState({alt:}) */
                     
                }}
                style={{
                    height: (this.state.selectId === book['asin'])? '19rem':'20rem'
                }}
                variant="top" 
                src={book.img}
                alt={book.title} 
                />
               {/*   {this.state.selectId === book['asin']?<CommentArea elementId={this.state.selectId}/>:  */}
                 
                <Card.Body
                id= {book['asin']}  
                onClick={(e)=>{
                    this.setState({elementId: e.target.id})
                }} 
                style={{position: 'relative'}}>

                    {/* {this.state.elementId === book['asin']?<CommentArea elementId={this.state.elementId}/>: */}
                    
                    <Card.Title
                    style={{fontSize:'15px'}}                    
                    >{book.title}
                    </Card.Title>

                    <Card.Text>
                    <p className="text-center">{book.category}</p> 
                    <span
                    className="text-center"
                    style={{position:'absolute', bottom:'65px', left:'40%'}} 
                    onMouseOver={(e)=>{
                        e.target.innerText = 'Discount 50%'
                    }}
                    onMouseOut={(e)=>{
                        e.target.innerText = book.price  + ' $'
                    }}>{book.price} $</span>
                    </Card.Text>

                
               
            
            </Card.Body>
    
               {/*  <div className="text-center" id={book['asin']}>
                < ModalTemplate bookName={book['title']} image={book['img']} bookId={book['asin']}/>
                </div> */}
                
                </Card>
                </Col> 
                ))
                               
                }

                 

               
              
            </Row>
            </Container>
        )
    }
 
}

        



export default SingleBook