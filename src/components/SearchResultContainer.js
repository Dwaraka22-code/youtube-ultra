import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openMenu } from '../redux/menuToggleSlice';
import { useSearchParams, Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from '../utils/constants';

const SearchResultContainer = () => {
  const [searchParams] = useSearchParams();
  const [searchedVideos, setSearchedVideos] = useState([]);

  let searchQuery = searchParams.get('search_query');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
    getSearchedVideosList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchedVideosList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery);
    const searchedVideosJson = await data.json();
    setSearchedVideos(searchedVideosJson?.items);
    console.log(searchedVideosJson?.items?.id);
  };

  return (
    <div className="px-2 col-span-11 mt-10">
      <div className="flex flex-col px-2 items-center">
        <div className="p-2 m-2">
          {searchedVideos?.map((video) => (
            <Link
              key={video?.id?.videoId}
              to={'/watch?v=' + video?.id?.videoId}
            >
              <div className="px-3 m-4 flex">
                <img
                  className="rounded-lg w-[510px] "
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <ul className="flex flex-col justify-start ml-5 w-[33rem]">
                  <li className=" py-2 text-lg ">{video?.snippet?.title}</li>
                  <li className="text-gray-500 text-[12px] mb-2">
                    100 views{' '}
                    {(
                      Math.abs(
                        new Date(video?.snippet?.publishedAt) - new Date()
                      ) /
                      (60 * 60 * 24 * 1000)
                    ).toFixed(1)}{' '}
                    days ago
                  </li>
                  <li className="text-gray-500 text-[13px]">
                    {video?.snippet?.channelTitle}
                  </li>

                  <li className="text-gray-500 mt-2 text-[13px]">
                    {video?.snippet?.description}
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultContainer;
