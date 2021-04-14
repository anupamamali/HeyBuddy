import React ,{useState,useEffect}from 'react';
import axios from "axios";
import useToken from "../../../login/useToken";
import swal from "sweetalert";

function CommentList({group}) {


    // let [comments,setComments] = useState(cmt);
    let [tempComment,setTempComment] = useState("");
    let [cmt,setCmt] = useState([]);
    useEffect( ()=>{
        loadCmt();
    },[]);

    const loadCmt = async () => {

        let res1 = await axios.get(`/group/${group.groupId}/comments`);

        setCmt(res1.data);
    }
    
    const singleUser = (comment) => {
        return (
            <li className="list-group-item comment singleUser-comment">
                <span className="input-group-text" id="basic-addon1">{comment.createdBy.name}</span>
                <span>{comment.description}</span>
            </li>
        );
    };
    let LoggedUser = useToken().getLoggedUser()
    const addComment = async () =>{

        await axios.post(`/comment`,
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
                "groupId": group.groupId
            }).then(res => {
            swal({
                title: "Comment Added Successfully",
                icon: "success",
            });
        })

        loadCmt();

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
                    {cmt.map(comment => singleUser(comment))}
                </ul>
            </div>
        </div>


    )
}

export default CommentList;