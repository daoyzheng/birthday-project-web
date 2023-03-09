import { useEffect, useRef, useState } from "react"
import { Circle, Img } from "../birthdayWish/birthdayWish.styled"
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { FlipCardWrapper } from "./home.styled"
import img from '/src/assets/4.png'
import advanced from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advanced)
dayjs.tz.setDefault('America/Edmonton')

const Countdown = () => {
  const [days, setDays] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [timeZoneName, setTimeZoneName] = useState<string>()
  const [hasValue, setHasValue] = useState<boolean>(false)
  let interval : any
  useEffect(() => {
    const timeZoneName = dayjs().tz().format('z')
    setTimeZoneName(timeZoneName)
    const birthday = dayjs.tz('2023-03-11T00:00:00', 'America/Edmonton').utc()
    const initialize = () => {
      const now = dayjs().tz('America/Edmonton').utc()
      const distance = birthday.diff(now)
      if (now <= birthday) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / (1000))
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }
    initialize()
    interval = setInterval(() => {
      flipAllCards(birthday)
    }, 500)
    return () => {
      clearInterval(interval)
    }
  }, [])
  function flipAllCards (birthday: Dayjs) {
    const now = dayjs().tz('America/Edmonton').utc();
    const distance = birthday.diff(now);
    if (now > birthday) location.reload()
    if (now <= birthday) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / (1000))
      flipCard(document.querySelector('[data-second-ones]'), seconds % 10)
      flipCard(document.querySelector('[data-second-tens]'), Math.floor(seconds / 10))
      flipCard(document.querySelector('[data-minute-ones]'), minutes % 10)
      flipCard(document.querySelector('[data-minute-tens]'), Math.floor(minutes / 10))
      flipCard(document.querySelector('[data-hour-ones]'), hours % 10)
      flipCard(document.querySelector('[data-hour-tens]'), Math.floor(hours / 10))
      flipCard(document.querySelector('[data-day-ones]'), days % 10)
      flipCard(document.querySelector('[data-day-tens]'), Math.floor(days / 10))
      setHasValue(true)
    }
  }

  function flipCard (flipCard : HTMLDivElement | null, newNumber: number) {
    if (!flipCard) return
    const bottomCard = flipCard.querySelector('.bottom')
    const topCard = flipCard.querySelector('.top')
    if (bottomCard && topCard) {
      const startNumber = parseInt(topCard.textContent || '')
      if (newNumber === startNumber) return
      const topFlip = document.createElement('div')
      topFlip.classList.add('top-flip')
      const bottomFlip = document.createElement('div')
      bottomFlip.classList.add('bottom-flip')


      topCard.textContent = `${startNumber}`
      topFlip.textContent = `${startNumber}`
      bottomCard.textContent = `${startNumber}`
      bottomFlip.textContent = `${newNumber}`

      flipCard.dataset.currentNumber = `${startNumber}`
      flipCard.dataset.nextNumber = `${newNumber}`

      topFlip.addEventListener('animationstart', e => {
        if (topCard)
          topCard.textContent = `${newNumber}`
      })
      topFlip.addEventListener('animationend', () => {
        topFlip.remove()
      })
      bottomFlip.addEventListener('animationend', e => {
        if (bottomCard)
          bottomCard.textContent = `${newNumber}`
        bottomFlip.remove()
      })
      flipCard.append(topFlip, bottomFlip)
    }
  }

  const handleClick = () => {
    window.location.href = "/birthday-wish"
  }
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-screen-2xl w-full flex justify-center items-center relative">
        <button 
          onClick={handleClick}
          className="absolute top-0 lg:right-48 right-5 lg:mt-20 mt-5 focus:outline-none border-none bg-white/30"
        >Write a birthday wish</button>
        { 
          hasValue ? 
          <div className="flex items-center flex-col relative mt-48">
            <div className="bg-amber-200/70 lg:w-96 w-64 rounded-full lg:h-96 h-64 shadow-amber-300/70 shadow-2xl absolute lg:-top-72 -top-32"/>
            <Img
              src={img}
              className="absolute lg:w-80 lg:-top-72 w-64 -top-32"
            />
            <div className="flex items-center flex-wrap lg:gap-x-10 gap-x-5 justify-center z-10 mt-10 gap-y-5">
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2">
                  <FlipCardWrapper>
                    <div className="flip-card" data-day-tens>
                      <div className="top">{ Math.floor(days / 10)}</div>
                      <div className="bottom">{ Math.floor(days / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-day-ones>
                      <div className="top">{ days % 10 }</div>
                      <div className="bottom">{ days % 10 }</div>
                    </div>
                  </FlipCardWrapper>
                </div>
                <div className="text-center text-white/80">Days</div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2">
                  <FlipCardWrapper>
                    <div className="flip-card" data-hour-tens>
                      <div className="top">{ Math.floor(hours / 10)}</div>
                      <div className="bottom">{ Math.floor(hours / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-hour-ones>
                      <div className="top">{ hours % 10 }</div>
                      <div className="bottom">{ hours % 10 }</div>
                    </div>
                  </FlipCardWrapper>
                </div>
                <div className="text-center text-white/80">Hours</div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2">
                  <FlipCardWrapper>
                    <div className="flip-card" data-minute-tens>
                      <div className="top">{ Math.floor(minutes / 10)}</div>
                      <div className="bottom">{ Math.floor(minutes / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-minute-ones>
                      <div className="top">{ minutes % 10}</div>
                      <div className="bottom">{ minutes % 10} </div>
                    </div>
                  </FlipCardWrapper>
                </div>
                <div className="text-center text-white/80">Minutes</div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2">
                  <FlipCardWrapper>
                    <div className="flip-card" data-second-tens>
                      <div className="top">{ Math.floor(seconds / 10)}</div>
                      <div className="bottom">{ Math.floor(seconds / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-second-ones>
                      <div className="top">{ seconds % 10 }</div>
                      <div className="bottom">{ seconds % 10 }</div>
                    </div>
                  </FlipCardWrapper>
                </div>
                <div className="text-center text-white/80">Seconds</div>
              </div>
              {/* <div>{timeZoneName}</div> */}
            </div>
            <div className="mt-16 mb-5 text-center">Come back on March 11<sup>th</sup>, 2023 (MST) to celebrate Langlang's Birthday</div>
          </div> : 
          <div className="fill-white">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" rx="1" width="10" height="10"><animate id="spinner_c7A9" begin="0;spinner_23zP.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_Acnw" begin="spinner_ZmWi.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_iIcm" begin="spinner_zfQN.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_WX4U" begin="spinner_rRAc.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/></rect><rect x="1" y="13" rx="1" width="10" height="10"><animate id="spinner_YLx7" begin="spinner_c7A9.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_vwnJ" begin="spinner_Acnw.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_KQuy" begin="spinner_iIcm.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_arKy" begin="spinner_WX4U.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/></rect><rect x="13" y="13" rx="1" width="10" height="10"><animate id="spinner_ZmWi" begin="spinner_YLx7.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_zfQN" begin="spinner_vwnJ.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze"/><animate id="spinner_rRAc" begin="spinner_KQuy.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze"/><animate id="spinner_23zP" begin="spinner_arKy.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze"/></rect></svg>
          </div>
        }
      </div>
    </div>
  )
}

export default Countdown