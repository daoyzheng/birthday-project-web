import { useEffect, useRef, useState } from "react"
import { MusicPlayerWrapper } from "./home.styled"
import song1 from '/src/assets/songs/your-lie-in-april.mp3'
import song2 from '/src/assets/songs/Your-name.mp3'
import song3 from '/src/assets/songs/moonlight-shadow.mp3'
import song4 from '/src/assets/songs/above-the-treetops.mp3'

interface Song {
  name: string
  src: string
}

interface Props {
  onPlay?: () => void
}

const MusicPlayer = ({ onPlay }: Props) => {
  const playlist : Song[] = [
    {
      name: 'Your lie in april',
      src: song1
    },
    {
      name: 'Your Name',
      src: song2
    },
    {
      name: 'Moonlight Shadow',
      src: song3
    },
    {
      name: 'Above the treetops',
      src: song4
    }
  ]
  const player = useRef<HTMLAudioElement>(new Audio())
  player.current.loop = true
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [selectedSong, setSelectedSong] = useState<Song>(playlist[0])
  const [currentDuration, setCurrentDuration] = useState<number|null>(null)
  const [currentTime, setCurrentTime] = useState<number|null>(null)
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isTest, setIsTest] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  useEffect(() => {
    function updateDuration() {
      setCurrentDuration(player.current.duration)
      player.current.addEventListener('ended', playNextSong)
    }
    function updateTime() {
      setCurrentTime(player.current.currentTime)
    }
    player.current.addEventListener('loadedmetadata', updateDuration)
    player.current.addEventListener("timeupdate", updateTime)
    player.current.addEventListener("ended", playNextSong)
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize)
    return () => {
      player.current.removeEventListener('loadedmetadata', updateDuration)
      player.current.removeEventListener('timeupdate', updateTime)
      player.current.removeEventListener("ended", playNextSong)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  function playNextSong () {
    const index = playlist.findIndex(song => song.src === selectedSong.src)
    if (index + 1 === playlist.length) {
      playSelectedSong(playlist[0])
    } else {
      playSelectedSong(playlist[index+1])
    }
  }
  function playPrevSong () {
    const index = playlist.findIndex(song => song.src === selectedSong.src)
    if (index === 0) {
      playSelectedSong(playlist[playlist.length - 1])
    } else {
      playSelectedSong(playlist[index-1])
    }

  }
  const togglePlay = () => {
    if (!isPlaying) {
      if (!player.current.src)
        playSelectedSong(selectedSong)
      else
        player.current.play()
    } else {
      player.current.pause()
    }
    setIsPlaying(!isPlaying)
  }
  const playSelectedSong = (song: Song) => {
    if (isShow) setIsShow(false)
    onPlay && onPlay()
    setIsTest(true)
    setSelectedSong(song)
    player.current.src = song.src
    player.current.play()
    setIsPlaying(true)
  }
  const toggleDialog = () => {
    setIsShow(!isShow)
  }

  const toggleExpand = () => {
    setIsExpand(!isExpand)
  }
  function formatDuration(durationInSeconds: number) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return (
    <>
      <MusicPlayerWrapper 
        isInit={isTest}
        className="shadow-md z-40 bg-pink-400/40 backdrop-blur-sm" 
        height={ isExpand ? '360px' : '65px'}
      >
      {
        isShow &&
        <div className="w-[300px] rounded h-96 absolute right-0 top-12 lg:right-0 lg:top-8 bg-pink-300 z-50 overflow-y-auto backdrop-blur-md p-2 space-y-1">
          {
            playlist.map((p, index) => (
              <div 
                className={`cursor-pointer hover:bg-red-400/40 px-3 rounded flex justify-between w-full ${selectedSong.name === p.name ? 'bg-red-400/40' : 'bg-none'}`}
                key={index}
                onClick={() => playSelectedSong(p)}
              >
                <div>{p.name}</div>
                {
                  selectedSong.name === p.name &&
                  <div className="flex items-center">
                    <div>{currentTime ? formatDuration(currentTime) : '0:00'} /</div>
                    <div className="ml-1">{currentDuration ? formatDuration(currentDuration) : '0:00'}</div>
                  </div>
                }
              </div>
            ))
          }
        </div>
      }
        <div className="flex items-center justify-center gap-x-3 lg:h-8 h-12 w-full bg-pink-800/80 backdrop-blur-sm shadow-md relative">
          <i className="material-icons cursor-pointer text-sm" onClick={playPrevSong}>fast_rewind</i>
          <div className="bg-red-400/70 w-6 h-6 flex items-center justify-center rounded-full" onClick={togglePlay}>
            {
              isPlaying 
              ? <i className="material-icons cursor-pointer text-sm">pause</i>
              : <i className="material-icons cursor-pointer text-sm">play_arrow</i>
            }
          </div>
          <i className="material-icons cursor-pointer text-sm" onClick={playNextSong}>fast_forward</i>
          <div className="absolute right-3 top-2 cursor-pointer lg:top-1" onClick={toggleDialog}>
            <i className="material-icons text-md">menu</i>
          </div>
        </div>
        {
          <div className="flex items-center w-full px-3 mt-1 justify-between">
            <div>{ selectedSong.name }</div>
            <div className="flex items-center">
              <div>{currentTime ? formatDuration(currentTime) : '0:00'} /</div>
              <div className="ml-1">{currentDuration ? formatDuration(currentDuration) : '0:00'}</div>
            </div>
          </div>
        }
      </MusicPlayerWrapper>
    </>
  )
}

export default MusicPlayer