import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addLike} from "../action/post.action";
import {addUserLike} from "../action/user.action";

const Like = ({ post }) => {
    const user = useSelector((state) => state.userReducer)[0]
    const dispatch = useDispatch();

    const handleLike = () => {
        const postData = {
            title: post.title,
            author: post.author,
            content: post.content,
            likes: ++post.likes,
            id: post.id,
        };
        dispatch(addLike(postData));
        if(post.author === user.pseudo){
            const userData = {
                pseudo: user.pseudo,
                likes: ++user.likes,
                id: user.id,
            };
            dispatch(addUserLike(userData))
        }
    }

  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
