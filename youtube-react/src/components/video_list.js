import React, { Component } from 'react'
import VideoListItem from './video_list_item'
import '../style/style.css';

export default function VideoList(props) {
    const videoItem = props.videos.map((video)=>{
        return <VideoListItem 
        onVideoSelect={props.onSelectVideo}
        key={video.etag} video={video}></VideoListItem>
    })
    return (
        <ul className="col-md-8 list-group">
            {videoItem}
        </ul>
    )
}