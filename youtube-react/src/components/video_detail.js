import React from 'react'
import '../style/style.css';

export default function VideoDetail({video}) {
    if(!video){
        return <h1>Lodding....</h1>;
    } 
    const videoId = video.id.videoId;
    const url ='https://www.youtube.com/embed/'+videoId;
    console.log(url);
    return (
        <div className="video-detail col-md-8">
            {url}
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameborder="0" className="embed-responsive-item"></iframe>
            </div>
            <div className="detail">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}
