import React, { Component } from 'react'

import Search_bar from './components/search_bar.js';  
import YoutubeSearch from "youtube-api-search";
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import './style/style.css'; 
 
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class App extends Component {

  constructor(props){
    super (props); 
    console.log(API_KEY);
    this.state = {videos:[], selectedVideo:null} 
    this.videoSearch('songs')
  }

  videoSearch(term){
    //YoutubeSearch({key:API_KEY,part:'snippet',term:'songs',type:'video'})
    YoutubeSearch({key:API_KEY ,term:term},(videos)=>{
      this.setState({videos:videos, selectedVideo: videos[0]}) 
      console.log(videos)
    }) 
  }

  render() {
    return (
      <div>
         <Search_bar onSearchChange={term=> this.videoSearch(term)}/>
         <VideoDetail video={this.state.selectedVideo}/>
         <VideoList videos={this.state.videos}  onSelectVideo={selectedVideo=>this.setState({selectedVideo})}></VideoList>
      </div>
    )
  }
}
