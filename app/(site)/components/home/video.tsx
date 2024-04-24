"use client";

import React, { useState, useRef, FC } from "react";
import { InView } from "react-intersection-observer";

interface VideoProps {
  id: string;
}

const Video: FC<VideoProps> = ({ id }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const handleIntersection = (inView: boolean): void => {
    if (inView && !isVideoPlaying) {
      setVideoPlaying(true);
    }
  };

  return (
    <div className="w-full">
      <InView
        as="div"
        onChange={handleIntersection}
        delay={100}
        initialInView={false}
        threshold={0.6}
        trackVisibility={true}
      >
        <div className="youtube-video w-full pb-[56.25%] relative">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${id}?autoplay=${
                isVideoPlaying ? 1 : 0
              }&mute=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </InView>
    </div>
    // <div className="w-full">
    //   <InView
    //     as="div"
    //     onChange={handleIntersection}
    //     delay={100}
    //     initialInView={false}
    //     threshold={0.8}
    //     trackVisibility={true}
    //   >
    //     <div className="aspect-w-16 aspect-h-9">
    //       <video
    //         ref={videoRef}
    //         className="object-contain w-full h-full"
    //         autoPlay={false}
    //         muted
    //         playsInline
    //         loop
    //         controls
    //       >
    //         <source src="/video.mp4" type="video/mp4" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //   </InView>
    // </div>
  );
};

export default Video;
