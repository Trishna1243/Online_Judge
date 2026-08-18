import {useEffect,useState} from "react";

import {
    getComments,
    addComment
} from "../../../services/communityService";


import "./Comments.css";



function Comments({postId}){


    const [comments,setComments]=useState([]);

    const [text,setText]=useState("");




    useEffect(()=>{


        loadComments();


    },[]);





    const loadComments=async()=>{


        const response = await getComments(postId);


        setComments(response.comments || []);


    };







    const submitComment=async()=>{


        if(!text.trim())

            return;



        await addComment(

            postId,

            text

        );


        setText("");

        loadComments();


    };





    return(


        <div className="comments-box">


            <h2>
                Comments
            </h2>



            <textarea

                value={text}

                onChange={(e)=>setText(e.target.value)}

                placeholder="Write a comment..."

            />



            <button onClick={submitComment}>

                Add Comment

            </button>





            {

                comments.map((comment)=>(


                    <div className="comment-card" key={comment._id}>


                        <b>

                            {comment.user?.name}

                        </b>


                        <p>

                            {comment.content}

                        </p>


                    </div>


                ))

            }


        </div>


    );


}


export default Comments;