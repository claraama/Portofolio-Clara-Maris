import { useState } from "react";
import { Play, X, Maximize2, Minimize2 } from "lucide-react";


export default function VideoPlayer({ videoSrc, posterImage, altText = "Video preview" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isPlaying) {
    return (
      <div className="relative w-full max-w-2xl mx-auto mt-10">
        <div 
          className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg"
          onClick={handlePlayClick}
        >
          <img
            src={posterImage}
            alt={altText}
            className="w-full h-auto object-cover"
          />
        
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
            <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all">
              <Play size={32} className="text-MainPink ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <div className={`relative bg-black rounded-lg overflow-hidden shadow-2xl ${
          isFullscreen 
            ? "w-full h-full" 
            : "w-full max-w-4xl max-h-[80vh]"
        }`}>
     
          <div className="absolute top-0 right-0 z-10 flex gap-2 p-3 bg-gradient-to-b from-black/50 to-transparent">
            <button
              onClick={toggleFullscreen}
              className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
            <button
              onClick={handleClose}
              className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-contain"
            style={{ maxHeight: isFullscreen ? "100vh" : "80vh" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}