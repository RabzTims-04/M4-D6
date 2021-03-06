 import { Component } from 'react'
 import { ListGroup, Button } from 'react-bootstrap'
import PutModal from './PutModal'


class CommentArea extends Component{

    state = {
        commentArr : []
    }

    componentDidMount = async () =>{
        this.fetchData()            
    }

    fetchData = async ()=>{
        const url = this.props['elementId']? ('https://striveschool-api.herokuapp.com/api/comments/' + this.props['elementId']):''
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"
        console.log(this.props['elementId']);
       

        try {
            let response =await fetch (url,{
                headers:{
                    'Authorization' : key
                }
            })
            /* console.log(response); */
            const comments = await response.json()
            console.log(comments);           
            this.setState({
                ...this.state,
                commentArr : comments
            })
         
        } catch (error) {
            console.log(error);
        }
            
    }

    componentDidUpdate = async (prevProps)=> {

        console.log(prevProps);

        if(prevProps.elementId !== this.props.elementId){
           
                this.fetchData()
            
        }  

    }


     deleteComment = async (id)=>{
         console.log(id);

        const url = 'https://striveschool-api.herokuapp.com/api/comments/' + id
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"
        console.log(url);
      
        
            const response = await fetch (url,{
                method : 'DELETE',
                headers :{
                    'Authorization' : key  
                }
            })
            console.log(response);
            if(response.ok){
                alert('oh! deleted')
                 this.refresh() 
            }
                else{
                    alert('nothing deleted')
                    this.refresh()
                }

            

    } 

   refresh =()=>{
         window.location.reload();
    }

    render(){
        return (
            <>
            {
            (!this.state.commentArr.length)
                 ?<p style={{color:'white'}} className="text-center mt-3">Be First to Comment</p>
                 :(this.props.updatedComments.length>0)?
                 this.props.updatedComments.map((comment, i) =>
                 <>

                    <ListGroup
                    /* onClick={this.refresh} */
                     key={comment['_id']}>
                       <ListGroup.Item >
                         User Comments: {comment.comment}
                       </ListGroup.Item>
                       <ListGroup.Item >
                       Rating: {comment.rate}
                       </ListGroup.Item>
                    </ListGroup>

                    <PutModal elementId={comment['_id']} commentId={comment.elementId} comment={comment.comment} rate={comment.rate} bookName={this.props.bookName} image={this.props.image}/>
                    
                    <Button
                    /* style={{position:'absolute', bottom:'10px', left:'19%', width:'140px'}} */
                    variant="primary"
                    id= {comment['_id']} 
                     onClick ={(e)=> this.deleteComment(e.target.id) }>
                    Delete</Button>
                  
                    <hr /> 
                    </>
                 )
                 :this.state.commentArr.map((comment, i) =>
                 <>

                    <ListGroup
                    /* onClick={this.refresh} */
                     key={comment['_id']}>
                       <ListGroup.Item >
                         User Comments: {comment.comment}
                       </ListGroup.Item>
                       <ListGroup.Item >
                       Rating: {comment.rate}
                       </ListGroup.Item>
                    </ListGroup>

                    <PutModal elementId={comment['_id']} commentId={comment.elementId} comment={comment.comment} rate={comment.rate} bookName={this.props.bookName} image={this.props.image}/>
                    
                    <Button
                    /* style={{position:'absolute', bottom:'10px', left:'19%', width:'140px'}} */
                    variant="primary"
                    id= {comment['_id']} 
                     onClick ={(e)=> this.deleteComment(e.target.id) }>
                    Delete</Button>
                  
                    <hr /> 
                    </>
                 )
                 }
           
        </>
        )
    }
}

export default CommentArea 