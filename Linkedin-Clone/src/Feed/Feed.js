import React, { useState, useEffect } from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from '../InputOption/InputOptions';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ImageIcon from "@material-ui/icons/Image"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import { db } from "../firebase"
import firebase from 'firebase';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState("")
    const [post, setPost] = useState([])

    useEffect(() => {
        db.collection("post").orderBy("timestam", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("post").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || " ",
            timestam: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photos" color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {/* Post */}
            <FlipMove>
                {
                    post.map(({ id, data: { name, description, message, photoUrl } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    ))
                }
            </FlipMove>

        </div>
    )
}

export default Feed;
