import { useState } from "react";

import "./ChatWindow.css";


function ChatWindow(){


const [message,setMessage]=useState("");


const chats=[

{
sender:"AI",
text:"Hello! How can I help you today?"
},

{
sender:"You",
text:"Explain binary search"
},

{
sender:"AI",
text:"Binary search works by repeatedly dividing a sorted array into halves."
}

];



return(

<div className="chat-container">


<div className="messages">


{

chats.map((chat,index)=>(


<div 
key={index}
className={
chat.sender==="AI"
?
"message ai-message"
:
"message user-message"
}
>


<strong>
{chat.sender}
</strong>


<p>
{chat.text}
</p>


</div>


))

}


</div>



<div className="chat-input">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask something..."

/>


<button>

Send

</button>


</div>



</div>

);

}


export default ChatWindow;