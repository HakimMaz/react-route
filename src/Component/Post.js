import React,{Component} from "react";
import Axios from "axios";

class Post extends Component{
    state={
        post:null
    }
    componentDidMount(){
        console.log("the props",this.props);
        let id= this.props.match.params.post_id;
        Axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(result =>{
            console.log("result ",result)
            this.setState({
               post:result.data
            })
        })
    }
    render(){
        const post = this.state.post? 
        (
            <div className="post">
              <h4 className="center"> {this.state.post.title}</h4>
              <p>{this.state.post.body}</p>

            </div>

        ):
        (
            <div className="center"> Loading post....</div>
            )
        return (
          <div className="container">
            {post}
          </div>
        );
    }



}
export default Post;