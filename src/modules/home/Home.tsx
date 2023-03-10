import { RefObject, useEffect, useRef, useState } from "react"
import { Img, Title } from "../birthdayWish/birthdayWish.styled"
import Countdown from "./Countdown"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import Messages from "./Messages"
import Meteor from "./Meteor"
import Star from "./Star"
import { Canvas, Container, Frame, MessageList } from "./home.styled"
import BirthdayCake from "./BirthdayCake"
import MusicPlayer from "./MusicPlayer"
import img5 from '/src/assets/5.png'
import img6 from '/src/assets/6.png'
import img7 from '/src/assets/7.png'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Edmonton')

const SLIDES_COUNT = 6

const Home = () => {
  const [isBirthday, setIsBirthday] = useState<boolean>(false)
  const refsArray :RefObject<HTMLDivElement>[] = []
  const radioRefsArray: RefObject<HTMLInputElement>[] = []
  const [isInitMusic, setIsInitMusic] = useState<boolean>(false)
  const [isEnter, setIsEnter] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)
  const [isInitializing, setIsInitializing] = useState<boolean>(true)
  const [initText, setInitText] = useState<string>('')

  for (let i=0; i<SLIDES_COUNT; i++) {
    radioRefsArray[i] = useRef<HTMLInputElement>(null)
  }

  for (let i=0; i<SLIDES_COUNT; i++) {
    refsArray[i] = useRef<HTMLDivElement>(null)
  }
  useEffect(() => {
    const birthday = dayjs.tz('2023-03-11T00:00:00', 'America/Edmonton').utc()
    const now = dayjs().tz('America/Edmonton').utc();
    setIsBirthday(now >= birthday)
    setInitText('Initializing...')
    setTimeout(() => {
      setInitText('Setting up stage...')
      setTimeout(() => {
        setInitText('Setting up music...')
        setTimeout(() => {
          setInitText('Setting up cake...')
          setTimeout(() => {
            setInitText('Setting up messages...')
            setTimeout(() => {
              setInitText('Ready...')
              setTimeout(() => {
                setIsInitializing(false)
              }, 450) 
            }, 530)
          }, 640)
        }, 780)
      }, 650)
    }, 850)
  }, [])

  const navigate = (index: number) => {
    refsArray[index+1].current?.scrollIntoView()
    if (index+1 === refsArray.length - 1) {
      if (radioRefsArray[radioRefsArray.length - 1].current) {
        const ref = radioRefsArray[radioRefsArray.length - 1].current as HTMLInputElement
        ref.checked = true
      }
      setTimeout(() => {
        setShowNav(true)
      }, 1000)
    }
    if (showNav) {
      radioRefsArray.forEach(ref => {
        if (ref.current)
          ref.current.checked = false 
      })
      if (radioRefsArray[index+1].current) {
        const ref = radioRefsArray[index+1].current as HTMLInputElement
        ref.checked = true
      }
    }
  }
  const handleRadioClick = (index: number) => {
    radioRefsArray.forEach(ref => {
      if (ref.current)
        ref.current.checked = false 
    })
    if (!showNav) return
    if (radioRefsArray[index].current) {
      const ref = radioRefsArray[index].current as HTMLInputElement
      ref.checked = true
      navigate(index-1)
    }
  }
  const handleOnPlay = () => {
    if (!isInitMusic) {
      setIsInitMusic(true)
    }
  }
  return !isBirthday ? 
    (
      isInitializing 
      ? <div className="bg-stone-900 min-h-screen flex items-center justify-center">
        <div className="fill-white">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" rx="1" width="10" height="10"><animate id="spinner_c7A9" begin="0;spinner_23zP.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_Acnw" begin="spinner_ZmWi.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_iIcm" begin="spinner_zfQN.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_WX4U" begin="spinner_rRAc.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/></rect><rect x="1" y="13" rx="1" width="10" height="10"><animate id="spinner_YLx7" begin="spinner_c7A9.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_vwnJ" begin="spinner_Acnw.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_KQuy" begin="spinner_iIcm.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_arKy" begin="spinner_WX4U.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/></rect><rect x="13" y="13" rx="1" width="10" height="10"><animate id="spinner_ZmWi" begin="spinner_YLx7.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_zfQN" begin="spinner_vwnJ.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_rRAc" begin="spinner_KQuy.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_23zP" begin="spinner_arKy.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/></rect></svg>
        </div>
        <div className="ml-10 text-lg">{initText}</div>
      </div>
      : <div>
        <Frame>
          <Canvas>
            <Meteor/>
            <Star/>
          </Canvas>
        </Frame>
        <MusicPlayer onPlay={handleOnPlay}/>
        <div className="min-h-screen h-screen flex justify-center items-center relative">
          <div className={`h-5/6 w-5/6 flex overflow-hidden scroll-smooth snap-x snap-mandatory 
            lg:mt-0 ${isInitMusic ? 'mt-10' : 'mt-0'} transition-all duration-300`}>
            {
              refsArray.map((ref, index) => (
                <div key={index} ref={ref} className="h-full w-full min-w-full snap-center snap-always">
                  {
                    index === 0 && 
                    <div className="w-full h-full backdrop-blur-sm bg-birthday bg-cover bg-center bg-no-repeat shadow-md rounded-lg">
                      <div className="pt-32 h-fit lg:ml-[500px]">
                        <Title
                          fontSize="50px"
                          fontSizeLg="60px"
                          fontSizeXl="120px"
                          className="text-center rounded-md text-rose-700/30"
                        >Happy Birthday</Title>
                        <Title
                          fontSize="50px"
                          fontSizeLg="60px"
                          fontSizeXl="90px"
                          className="text-center rounded-md text-rose-700/30"
                        >Langlang</Title>
                      </div>
                      <div className="flex lg:items-end lg:justify-end h-32 lg:mr-20 lg:mt-40 mt-20 items-center justify-center">
                        <div className="flex flex-col justify-center items-center">
                          <div
                            className={`py-2 px-10 w-fit bg-red-400 rounded-md hover:-translate-y-1 
                              duration-300 hover:shadow-md transition-all 
                              animate-bounce
                              ${isInitMusic ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            onClick={() => isInitMusic && navigate(index)}
                            onMouseEnter={() => !isInitMusic && setIsEnter(true)}
                            onMouseLeave={() => !isInitMusic && setIsEnter(false)}
                          >Start</div>
                          <div 
                            className={`${isEnter ? 'opacity-100' : 'opacity-0'} 
                            transition-opacity duration-500 mt-3 text-lg`}
                          >Some music to set the mood?</div>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    index === 1 &&
                    <div className="h-full w-full rounded bg-gradient-to-br from-violet-400 
                      to-fuchsia-400 flex items-center lg:justify-around relative flex-col lg:flex-row overflow-x-hidden overflow-y-auto lg:overflow-y-hidden">
                      <div className="lg:w-[1700px] w-[900px] lg:h-96 h-64 bg-blue-300 absolute rounded-lg rotate-45 -left-72 lg:left-0">
                      </div>
                      <Img
                        className="lg:h-[95%] h-[50%] mt-10"
                        src={img6}
                      />
                      <div className="mt-10 lg:mt-40 z-10 lg:mr-10">
                        <div className="lg:text-[50px] text-[18px]">
                          Wish you always vibrant and lively.
                        </div>
                        <div className="lg:text-[50px] text-[18px]">
                          希望阳光的你永远朝气蓬勃 快快乐乐
                        </div>
                        <div className="lg:mt-52 flex justify-end mt-12">
                          <div
                            className="py-2 px-10 w-fit bg-red-400 rounded-md hover:-translate-y-1
                              duration-300 hover:shadow-md transition-all 
                              animate-bounce
                              cursor-pointer
                            "
                            onClick={() => isInitMusic && navigate(index)}
                          >Continue</div>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    index === 2 &&
                    <div className="h-full w-full bg-gradient-to-br from-amber-500 to-emerald-300 rounded
                      flex items-center lg:justify-around relative flex-col lg:flex-row overflow-x-hidden overflow-y-auto lg:overflow-y-hidden">
                      <div className="lg:w-[900px] w-[400px] lg:h-[800px] h-[600px] bg-purple-600/40 absolute rounded-3xl rotate-[40deg] 
                        -left-72 lg:left-[800px]">
                      </div>
                      <Img
                        className="lg:h-[95%] h-[60%] mt-0 lg:mt-10"
                        src={img7}
                      />
                      <div className="mt-10 lg:mt-40 z-10 ">
                        <div className="lg:text-[50px] text-[16px] text-center">
                          Hope your wishes come true and you receive more of the good things in life.
                        </div>
                        <div className="lg:text-[50px] text-[16px] text-center">
                          希望善良的你心想事成  收获更多的美好
                        </div>
                        <div className="lg:mt-48 flex justify-end mt-12 mr-20">
                          <div
                            className="py-2 px-10 w-fit bg-red-400 rounded-md hover:-translate-y-1
                              duration-300 hover:shadow-md transition-all 
                              animate-bounce
                              cursor-pointer
                            "
                            onClick={() => isInitMusic && navigate(index)}
                          >Continue</div>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    index === 3 &&
                    <div className="h-full w-full bg-gradient-to-br from-rose-400 to-red-200 rounded
                      flex items-center lg:justify-around relative flex-col lg:flex-row overflow-x-hidden overflow-y-auto lg:overflow-y-hidden">
                      <div className="lg:w-[800px] w-[400px] lg:h-[800px] h-[600px] bg-purple-600/30 absolute rounded-3xl rotate-[80deg] 
                        -left-72 lg:left-[900px]">
                      </div>
                      <div className="mt-10 lg:mt-40 z-10">
                        <div className="lg:text-[50px] text-[16px] text-center">
                          Hope you will always be healthy and confident.
                        </div>
                        <div className="lg:text-[50px] text-[16px] text-center">
                          希望可爱的你永远健康自信
                        </div>
                        <div className="lg:mt-48 flex justify-end mt-12 mr-3 lg:mr-0">
                          <div
                            className="py-2 px-10 w-fit bg-red-400 rounded-md hover:-translate-y-1
                              duration-300 hover:shadow-md transition-all 
                              animate-bounce
                              cursor-pointer
                            "
                            onClick={() => isInitMusic && navigate(index)}
                          >Continue</div>
                        </div>
                      </div>
                      <Img
                        className="lg:h-[100%] h-[70%] lg:mt-10 lg:ml-10 mt-0"
                        src={img5}
                      />
                    </div>
                  }
                  {
                    index === 4 && 
                    <div className="h-full w-full bg-gradient-to-br from-stone-500/30 to-gray-600/50 rounded
                      flex relative flex-col lg:overflow-y-hidden overflow-x-hidden overflow-y-auto">
                      <div className="mt-14 flex justify-center">
                        <div className="lg:w-[60%] w-[95%]">
                          <video controls>
                            <source src="https://birthday-project.s3.us-west-2.amazonaws.com/birthday-project.mp4" type="video/mp4"/>
                          </video>
                        </div>
                      </div>
                      <div className="lg:mt-16 flex justify-end lg:mr-52 mt-52 mr-5">
                        <div
                          className="py-2 px-10 w-fit bg-red-400 rounded-md hover:-translate-y-1
                            duration-300 hover:shadow-md transition-all 
                            animate-bounce
                            cursor-pointer
                          "
                          onClick={() => isInitMusic && navigate(index)}
                        >Continue</div>
                      </div>
                    </div>
                  }
                  {
                    index === 5 &&
                    <div className="h-full w-full bg-transparent rounded
                      flex items-center lg:justify-around relative flex-col lg:flex-row overflow-hidden">
                      <div className="w-full h-full flex items-center lg:justify-around flex-col lg:flex-row overflow-y-auto overflow-x-hidden">
                        <BirthdayCake/>
                        <Messages/>
                      </div>
                    </div>
                  }
                </div>
              ))
            }
          </div>
          <div className={`w-64 h-10 z-20 absolute lg:bottom-24 bottom-8 flex 
            transition-opacity
            duration-500
            justify-around items-center opacity-0 ${showNav ? 'opacity-100' : 'opacity-0'}`}>
            {
              radioRefsArray.map((ref, index) => (
                <input 
                  key={index}
                  ref={ref}
                  className={`h-4 w-4 duration-700
                    -tranlate-x-10 ${showNav ? 'translate-x-0 cursor-pointer' : '-translate-x-10 cursor-default'}`}
                  type="radio"
                  onClick={() => handleRadioClick(index)}
                />
              ))
            }
          </div>
          <div className="absolute lg:bottom-5 bottom-2 text-[12px] text-blue-200 flex items-center space-x-1">
            <div>Designed and built by</div>
            <a 
              target="_blank"
              href="https://www.daozheng.me" 
              className="underline text-blue-200 hover:text-blue-300"
            >Dao Yuan Zheng</a>
          </div>
        </div>
      </div>
    ) :
    (
      <Countdown/>
    )
}

export default Home