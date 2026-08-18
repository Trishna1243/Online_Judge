import {useEffect,useState} from "react";

import {useParams} from "react-router-dom";


import {
    getCommunityPost
} from "../../services/communityService";


import Comments from "../../components/community/Comments/Comments";


import "./Discussion.css";



function Discussion(){


const {id}=useParams();


const [post,setPost]=useState(null);



useEffect(()=>{


getCommunityPost(id)

.then(res=>{

    setPost(res.post);

});


},[id]);




if(!post)

return <h2>Loading...</h2>;





return(


<div className="discussion-page">


<div className="discussion-detail-card">


<h1>

{post.title}

</h1>


<p>

Posted by {post.author?.name}

</p>



<p>

{post.content}

</p>



</div>



<Comments postId={id}/>



</div>


);


}


export default Discussion;