'use client'
import { useEffect, useRef } from 'react';

const YouTubeVideo = ({ params }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    // Function to enter fullscreen
    const enterFullScreen = () => {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      }
    };

    // Add a click event listener to the iframe to enter fullscreen
    iframe.addEventListener('click', enterFullScreen);

    // Remove the event listener when the component unmounts
    return () => {
      iframe.removeEventListener('click', enterFullScreen);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://www.youtube.com/embed/${params.id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className=' w-full h-screen'
    ></iframe>
  );
};

export default YouTubeVideo;
