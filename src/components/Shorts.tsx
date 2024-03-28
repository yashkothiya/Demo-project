import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const videoUrls = [
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid1.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid2.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid3.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid4.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid5.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid6.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid7.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid8.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid9.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid10.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid11.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid12.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid13.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid14.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid15.mp4",
];

const Shorts: React.FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const handleVideoClick = (videoIndex: number) => {
    router.push(`/video/${videoIndex}`);
  };

  const videosToShow = isMobile ? 2: 5;
  const videoHeight = isMobile ? "300px" : "400px";
  const videoWidth = isMobile ? "170px" : "px";

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">SHORTS</h2>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex">
          {videoUrls.slice(0, Math.floor(videosToShow)).map((videoUrl, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden mx-2 my-2"
              style={{ height: videoHeight, width:videoWidth }}
              onClick={() => handleVideoClick(index)}
            >
              <video autoPlay loop muted className="w-full h-full" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        {isMobile && (
          <div className="flex">
            {videoUrls.slice(Math.floor(videosToShow), Math.ceil(videosToShow)).map((videoUrl, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden mx-2 my-2"
                style={{ height: videoHeight,width: videoWidth }}
                onClick={() => handleVideoClick(Math.floor(videosToShow) + index)}
              >
                <video autoPlay loop muted className="w-full h-full" >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shorts;
