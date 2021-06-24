import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Jaskaran Singh",
            username: "_deltaJ",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media.giphy.com/media/Y2sPsW7aC3vfcPd27k/giphy.gif"
        });

        setTweetMessage("");
        setTweetImage("");

    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://previews.123rf.com/images/prettyvectors/prettyvectors1702/prettyvectors170200022/71079316-young-programmer-man-character-coding-vector-flat-cartoon-illustration.jpg"></Avatar>
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        type="text" value={tweetMessage} placeholder="What's happening?"></input>
                </div>

                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput" type="text" placeholder="Optional: Enter Image URL"></input>

                <Button
                    type="submit"
                    onClick={sendTweet}
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
