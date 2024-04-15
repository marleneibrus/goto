import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import "./Video.css";

class Video extends Component {
    render () {
        return (
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url= '/videos/marleneibrus.mp4'
                    width='60%'
                    height='60%'
                    controls = {true}
                    />
                </div>
        
        )
    }
}

export default Video;
