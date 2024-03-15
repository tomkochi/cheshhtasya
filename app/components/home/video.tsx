"use client";

import React, { useState, useRef } from "react";
import { InView } from "react-intersection-observer";

function Video() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleIntersection = (inView) => {
    if (inView && !isVideoPlaying) {
      // Start playing the video when fully visible
      setVideoPlaying(true);
      videoRef.current.play();
    }
  };

  return (
    <div className="w-full">
      <InView
        as="div"
        onChange={handleIntersection}
        delay={100}
        initialInView={false}
        threshold={0.8}
        trackVisibility={true}
      >
        <div className="aspect-w-16 aspect-h-9">
          <video
            ref={videoRef}
            className="object-contain w-full h-full"
            autoPlay={false}
            muted
            playsInline
            loop
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </InView>
    </div>
  );
}

export default Video;
