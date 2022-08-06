export const Video = (video: {src: string}) => {

    return <video className="video-player__video" src={video.src} width="100%" height="100%" />

}