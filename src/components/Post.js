import React, {useState} from "react";
import Like from "./Like";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "./Utils";
import {deletePost, editPost} from "../action/post.action";

const Post = ({ post }) => {
    const [editToggle, setEditToggle] = useState(false);
    const [editContent, setEditContent] = useState(post.content);
    const user = useSelector((state) => state.userReducer)[0];
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault()

        if(post.content !== editContent){
            const postData = {
                title: post.title,
                author: user.pseudo,
                content: editContent,
                likes: post.likes,
                id: post.id,
            };
            dispatch(editPost(postData))
        }
        setEditToggle(!editToggle)
    };

    return (
        <div className="post">
            {!isEmpty(user) && user.pseudo === post.author && (
                <div className="edit-delete">
                    <img onClick={() => setEditToggle(!editToggle)} src="./icons/edit.svg" alt="edit"/>
                    <img onClick={() => dispatch(deletePost(post.id))} src="./icons/delete.svg" alt="delete"/>
                </div>
            )}
            <h2>{post.title}</h2>
            <img
                src="https://picsum.photos/1500/400"
                className="post-img"
                alt="img-post"
            />
            {editToggle ? (
                <form onSubmit={e => handleEdit(e)}>
                    <textarea defaultValue={post.content} onChange={e => setEditContent(e.target.value)}/>
                    <input type="submit" value="Valider modification"/>
                </form>
            ) : (
                <p>{post.content}</p>
            )}
            <div className="author">
                <h5>{post.author}</h5>
                <Like post={post} />
            </div>
        </div>
    );
};

export default Post;
