import React , { forwardRef } from 'react';
import { Avatar } from '@material-ui/core'
import "./Post.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import InputOptions from '../InputOption/InputOptions';



const Post = forwardRef(({ name, description, message, photoUrl },ref) => {
    return (
        <div ref={ref}  className="post">
            <div className="post__header">
                <Avatar  src={photoUrl}>{name[0]}</Avatar>
                <div className="POST__INFO">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__button">
                <InputOptions Icon={ThumbUpAltIcon} title="Like" color="grey" />
                <InputOptions Icon={ChatIcon} title="Chat" color="grey" />
                <InputOptions Icon={ShareIcon} title="Share" color="grey" />
                <InputOptions Icon={SendIcon} title="Send" color="grey" />
            </div>
        </div>
    )
})

export default Post
