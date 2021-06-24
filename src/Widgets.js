import React from 'react'
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="Widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1219046165792133120"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ShawnMendes"
                    options={{ height: 400 }}
                />
            </div>
        </div>
    )
}

export default Widgets

