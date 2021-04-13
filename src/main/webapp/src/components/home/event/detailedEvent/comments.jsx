import React ,{useState,useEffect}from 'react';
import axios from "axios";
import useToken from "../../../login/useToken";

function CommentList({groupId}) {


    let commentData = ["Hello i am interasted in event",
        "is there any fees for the event","It sounds interesting","Lets rock the party"]

    let [comments,setComments] = useState(commentData);
    let [tempComment,setTempComment] = useState("");

    useEffect(async ()=>{
        let res = await axios.get(`/group/{groupId}/comments`);
        setComments(res.data);
        
    },[]);
    
    const singleUser = (comment) => {
        return (
            <li className="list-group-item">{comment}</li>
        );
    };
    let LoggedUser = useToken().getLoggedUser()
    const addComment = async () =>{

        let res = await axios.post(`/comment`,
            {
                "commentId": "",
                "createdBy": {
                    "name": LoggedUser.userName || "",
                    "Id": LoggedUser.id|| ""
                },
                "description": tempComment,
                "type": "comment",
                "name": "comment",
                "createdOn": null,
                "status":true,
                "groupId": groupId
            })
        setComments([tempComment,...comments]);
        setTempComment("");
    };

    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary" onClick={addComment}>Add Comment</button>
                <br/>
                <br/>
                <textarea className="form-control comment-textarea" value={tempComment}
                          aria-label="With textarea" onChange={e=>setTempComment(e.target.value)}></textarea>
            </div>
            <br/>
            <br/>

            <div className="detailed-view-comment-list">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-success">Users Comments</li>
                    {comments.map(comment => singleUser(comment.description))}
                </ul>
            </div>
        </div>


    )
}

export default CommentList;