import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function IndvPost() {
  const { id } = useParams();

  const [postDetails, setPostDetails] = useState({});

  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/posts/${id}`).then((response) => {
      setPostDetails(response.data);
    });

    Axios.get(`http://localhost:3001/api/comments/${id}`).then((response) => {
      setCommentList(response.data);
    });
  }, []);

  const addComment = (e) => {
    Axios.post(`http://localhost:3001/api/comments/`, {
      commentId: id,
      comment: newComment,
    }).then((response) => {
      setCommentList([
        ...commentList,
        {
          commentId: id,
          comment: newComment,
        },
      ]);
    });

    setNewComment("");
  };

  return (
    <div className="indvPostPage">
      <div className="postSide">
        <div className="userFullName">{postDetails.userFullName}</div>
        <div className="location">Location: {postDetails.location}</div>
        <div className="menuItem">
          Favorite Food/Drink: {postDetails.menuItem}
        </div>
      </div>

      <div className="reviewSide">
        <h2>Reviews/Comments</h2>
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Add Comment</button>
          <div className="listOfCommentsContainer">
            {commentList.map((comment, key) => {
              return <div key={key}>{comment.comment}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndvPost;
