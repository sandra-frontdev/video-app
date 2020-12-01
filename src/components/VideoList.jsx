import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect1 }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} onVideoSelect2={onVideoSelect1} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
