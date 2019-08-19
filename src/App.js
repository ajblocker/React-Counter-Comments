import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    //this.userComment = this.userComment.bind(this);
    this.state = {
      userComment: "",
      comments: [
        {
          Comment: "Cool!",
          Likes: 2,
          Dislikes: 4,
          ID: 1
        },
        {
          Comment: "No Way!",
          Likes: 2,
          Dislikes: 4,
          ID: 2
        },
      ]
    }
  }

  prevId = 2;
  
  // userComment(e) {
  //   e.preventDefault();
  //   const message = document.getElementById('message').value;
  //   console.log('user commented', message);
  //   this.setState({
  //     userComment: message,
  //   })
  // }

  message = React.createRef();

  //add reply pushes comments to state
  addReply = (Comment) => {
    this.setState(prevState => {
      return{
      comments: [
        ...prevState.comments,
        {
          Comment,
          Likes: 0,
          Dislikes: 0,
          ID: this.prevId += 1
        }
      ]
      }
    })
  }

//handle Submit, when you submit it pushes the ref value to addreply
handleReply = (e) => {
  e.preventDefault();
  this.addReply(this.message.current.value);
  e.currentTarget.reset();
}

//delete player id 
handleRemovePlayer = (id) => {
  this.setState(prevState => {
    return{
      comments: prevState.comments.filter(p => p.ID !== id)
    }
  })
}

  render(){
    return (
      <React.Fragment>
      <div className="App">
        {this.state.comments.map(m => {
          return (
            <div>
              <p>{m.Name}</p>
              <p>{m.Comment}</p>
              <button onClick={() => this.handleRemovePlayer(m.ID)}>Delete</button>
              <FontAwesomeIcon icon={ faThumbsUp } size="1x" />
              <FontAwesomeIcon icon={ faThumbsDown } size="1x" />
            </div>
            

          )
        })}
       <fieldset className="form-group">
         <form onSubmit={this.handleReply}>
             <label>Comment here</label><br/>
             <textarea ref={this.message} className="textarea" id="message" placeholder="Message..." required/><br/>
              <button type="submit" onClick={this.userComment} className="submitbtn">Submit</button><br/>
              <FontAwesomeIcon icon={ faThumbsUp } size="1x" />
              <FontAwesomeIcon icon={ faThumbsDown } size="1x" />
          </form>
        </fieldset>
      </div>
      </React.Fragment>
    );
  }
}
  

export default App;
