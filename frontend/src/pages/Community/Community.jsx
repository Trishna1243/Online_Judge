import { useEffect, useState } from "react";

import {
    getCommunityPosts
} from "../../services/communityService";

import DiscussionCard from "../../components/community/DiscussionCard/DiscussionCard";

import "./Community.css";


function Community(){

    const [posts,setPosts] = useState([]);

    const [loading,setLoading] = useState(true);


    useEffect(()=>{


        const fetchPosts = async()=>{

            try{

                const response = await getCommunityPosts();

                setPosts(response.posts || []);

            }

            catch(error){

                console.log(error);

            }

            finally{

                setLoading(false);

            }

        };


        fetchPosts();


    },[]);



    if(loading){

        return <h2>Loading Community...</h2>;

    }



    return(

        <div className="community-page">


            <h1>
                Community
            </h1>



            {
                posts.length === 0 ?

                (

                    <p>
                        No discussions available yet.
                    </p>

                )

                :

                (

                    posts.map((post,index)=>(


                        <DiscussionCard

                            key={index}

                            post={post}

                        />


                    ))

                )

            }


        </div>


    );


}


export default Community;