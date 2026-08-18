import "./DiscussionCard.css";

import { useNavigate } from "react-router-dom";


function DiscussionCard({post}){


    const navigate = useNavigate();



    const openDiscussion = ()=>{


        navigate(`/community/${post._id}`);


    };



    return(


        <div className="discussion-card">


            <div className="discussion-top">


                <h2>
                    {post.title}
                </h2>


                <span>
                    {post.tag}
                </span>


            </div>




            <p>

                {post.content}

            </p>




            <p className="author">

                Posted by {post.author?.name || "User"}

            </p>




            <div className="discussion-footer">




                <button
                    onClick={openDiscussion}
                >

                    View Discussion

                </button>



            </div>


        </div>


    );


}


export default DiscussionCard;