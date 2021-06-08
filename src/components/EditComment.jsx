import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class EditComment extends Component{

    state = {
        editComment:{
            comment:this.props.comment,
            rate:this.props.rate,
            elementId:this.props.commentId
        }
    }

    inputChange =(e)=>{
        let id= e.target.id
        this.setState({
            editComment:{
                ...this.state.editComment,
                [id]:e.target.value
            }
        })
    }

    editComment = async (e) =>{
        e.preventDefault()
        const url = 'https://striveschool-api.herokuapp.com/api/comments/' + this.props.elementId
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"
        console.log('id',this.props.elementId);

            try {
                const response = await fetch (url,{
                    method : 'PUT',
                    body: JSON.stringify(this.state.editComment),
                    headers :{
                        'Authorization' : key,
                        'Content-type' : 'application/json'  
                    }
                })

                console.log('put',response);

                if( response.ok){
                    alert('yay edited')
                    this.setState({
                        editComment:{
                            comment:'',
                            rate:'',
                            elementId:'' 
                        }
                    })
                    this.refresh()
                }else{
                    alert('something is wrong')
                }
                
            } catch (error) {
                console.log(error);
            }

    }
   


    refresh =()=>{
        window.location.reload();
   }
    

render(){
    return (
        <>
        {/* <h6>Add Comments</h6> */}
        <Form className="mb-5 " onSubmit={(e) =>this.editComment(e)}>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={4}
                            value={this.state.editComment.comment}
                            id="comment"
                            onChange={this.inputChange}
                        />
                    </Form.Group>
                 
            
                  <Form.Group>
                        <Form.Label>Rating 1-5</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Rate"
                            value={this.state.editComment.rate}
                            id="rate"
                            onChange={e => this.inputChange(e)}
                        />
                    </Form.Group>
                
              
                   <Form.Group style={{visibility:'hidden'}}>
                        <Form.Label>ElementId</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Book Id"
                            id="elementId"
                            value={this.state.editComment.elementId}
                            onChange={e => this.inputChange(e)}
                        />
                    </Form.Group>
                 
                    
                    
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
        </>

    )
}
}

export default EditComment