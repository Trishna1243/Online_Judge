import {useEffect,useState} from "react";

import {
    getCommunityPosts
} from "../../services/communityService";



function Community(){


    const [posts,setPosts]=useState([]);



    useEffect(()=>{


        getCommunityPosts()

        .then(res=>{

            setPosts(res.posts);

        });


    },[]);




    return(


        <div>


            <h1>
                Community
            </h1>



            {
                posts.map((post,index)=>(


                    <div key={index}>


                        <h3>
                            {post.title}
                        </h3>


                        <p>
                            {post.content}
                        </p>


                        <small>
                            {post.author}
                        </small>


                    </div>


                ))
            }



        </div>


    );


}


export default Community;