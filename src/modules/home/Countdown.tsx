import { useEffect, useRef, useState } from "react"
import { Circle, Img } from "../birthdayWish/birthdayWish.styled"
import { FlipCardWrapper } from "./home.styled"

const Countdown = () => {
  const [days, setDays] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [hasValue, setHasValue] = useState<boolean>(false)
  let interval : any
  useEffect(() => {
    const birthday = new Date(new Date('2023-03-11T00:00:00').toLocaleString('en-US', { timeZone: 'Canada/Mountain'}))
    const initialize = () => {
      const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Canada/Mountain'}))
      const distance = birthday.getTime() - now.getTime()
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
  function flipAllCards (birthday: Date) {
    const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Canada/Mountain'}))
    const distance = birthday.getTime() - now.getTime()
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
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-screen-2xl w-full flex justify-center items-center mt-36">
        { 
          hasValue ? 
          <div className="flex items-center flex-col relative">
            <div className="bg-amber-200/70 lg:w-96 w-64 rounded-full lg:h-96 h-64 shadow-amber-300/70 shadow-2xl absolute lg:-top-72 -top-32"/>
            <Img
              src="/src/assets/4.png"
              className="absolute lg:w-80 lg:-top-72 w-64 -top-32"
            />
            <div className="flex items-center flex-wrap lg:gap-x-10 gap-x-5 justify-center z-10 mt-10 gap-y-5">
              <div className="flex flex-col gap-y-2">
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
              <div className="flex flex-col gap-y-2">
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
              <div className="flex flex-col gap-y-2">
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
              <div className="flex flex-col gap-y-2">
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
            </div>
          </div> : 
          <div className="animate-spin">LOADING</div>
        }
      </div>
    </div>
  )
}

export default Countdown