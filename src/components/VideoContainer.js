import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageToken]);

  const getVideos = async () => {
    try {
      const url =
        nextPageToken !== ''
          ? `${YOUTUBE_API}&pageToken=${nextPageToken}`
          : YOUTUBE_API;
      const data = await fetch(url);
      const json = await data.json();
      setNextPageToken(json?.nextPageToken);
      setVideos([...videos, ...json?.items]);
    } catch (e) {
      console.error(e);
    }
  };

  const infiniteScroll = () => {
    if (
      window.innerHeight + Math.round(document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 300
    ) {
      getVideos();
    }
  };

  if (!videos.length) return <Shimmer />;

  return (
    <div
      className={`flex flex-wrap justify-center ${
        !isMenuOpen ? '' : 'ml-[200px]'
      }`}
    >
      {videos?.map((video) => (
        <Link key={video?.id} to={'/watch?v=' + video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

// videos.length ? <VideoCard videoInfo={videos[0]} /> : null
