import React from "react";
import {useSelector} from "react-redux";
import {isEmpty} from "./Utils";

const User = () => {
    const user = useSelector((state) => state.userReducer);

    return (
        <div className="user-container">
            <div className="user">
                <h3>{!isEmpty(user) && user[0].pseudo}</h3>
                <img src="http://pm1.narvii.com/6538/ab1e252b9b45b9e1bb64a2a60a3d5dc3250357ec_00.jpg" alt="" />
                <p>Age : 18 ans</p>
                <p>Like{!isEmpty(user) && user[0].likes > 1 ? "s" : null} : {!isEmpty(user) && user[0].likes}</p>
            </div>
        </div>
    );
};

export default User;
