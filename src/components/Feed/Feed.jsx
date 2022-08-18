import React from "react";
import "../Feed/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Post from "../Post/Post";
import { useState,useEffect } from "react";
import {db} from '../config'

function Feed() {
    const[input,setInput] = useState('')
  const [post, setPost] = useState([]);

//   useEffect(() => {
//     db.collection("posts").onSnapshot(snapshot => {
//         setPost(
//             snapshot.docs.map(doc => (
//                 {
//                     id:doc.id,
//                     data:doc.data()
//                 }
//             )))
//     })
//   },[])
  
  const sendPost = (e) => {
    e.preventDefault()
    db.collection("posts").add({
        name:'Antony Jaison',
        description:'this is a test two',
        message:input,
        photoUrl:''
    })
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" name="" id="" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarMonthIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      {post.map((post) => {
        return (
          <Post
            name="Antony Jaison"
            description="this is a test"
            message="this is a test message"
          />
        );
      })}

      <Post
        name="Antony Jaison"
        description="this is a test"
        message="this is a test message"
      />
    </div>
  );
}

export default Feed;
