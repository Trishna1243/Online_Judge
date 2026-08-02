import "./DiscussionCard.css";


function DiscussionCard({post}){


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




<p className="author">

Posted by {post.author}

</p>




<div className="discussion-footer">


<div>

⬆ {post.votes} votes

</div>


<div>

💬 {post.comments} comments

</div>


<button>

View Discussion

</button>


</div>



</div>

);


}


export default DiscussionCard;