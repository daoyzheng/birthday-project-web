import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"
import { Message } from "../../interfaces/message"
import request from "../../utils/request"
import { MessageList } from "./home.styled"

interface Props {
  className?: string
  isMinimizable?: boolean
}

const Messages = ({ className, isMinimizable }: Props) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [messageToShow, setMessageToShow] = useState<Message|null>(null)
  const [messagesLeft, setMessagesLeft] = useState<Message[]>([])
  const [isMinimized, setMinimize] = useState<boolean>(false)
  async function fetchMessages () {
    const url = `${import.meta.env.VITE_CLIENT_API}/api/messages`
    const method = 'get'
    const config = {
      url,
      method
    }
    const res = await request(config)
    const { data } = res
    const shuffledMessags = shuffle(data)
    setMessages([...shuffledMessags])
    setMessagesLeft([...shuffledMessags])
  }
  function shuffle (messages: Message[]) {
    let currentIndex = messages.length, randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--

      [messages[currentIndex], messages[randomIndex]] = [
        messages[randomIndex], messages[currentIndex]]
    }
    return [...messages]
  }
  const swapMessage = useCallback(
    (msg: Message, timeOutTime: number) => {
      setMessageToShow(msg)
      setTimeout(() => {
        setMessageToShow(null)
      }, timeOutTime)
    },
    [setMessageToShow]
  )

  function rotateMessage (timeOutTime: number) {
    const currentMessage = messagesLeft.shift()
    console.log(messagesLeft.length)
    if (messagesLeft.length === 0) {
      const shuffledMessags = shuffle(messages)
      setMessagesLeft(shuffledMessags)
    } else {
      setMessagesLeft(messagesLeft)
    }
    if (!currentMessage) return
    swapMessage(currentMessage, timeOutTime)
  }
  let interval : any
  useEffect(() => {
    fetchMessages()
  }, [])
  useEffect(() => {
    clearInterval(interval)
    if (messages.length > 0) {
      if (!messageToShow) {
        setTimeout(() => {
          rotateMessage(9000)
        }, 500)
      }
      interval = setInterval(() => {
        rotateMessage(9500)
      }, 10000)
    }
    return () => clearInterval(interval)
  }, [messages, messagesLeft])

  const toggleView = () => {
    setMinimize(!isMinimized)
  }

  const handleMouseLeave = () => {
    const messageListEl = document.getElementById('message-list')
    if (!messageListEl) return
    const divs = messageListEl.querySelectorAll('.minimize')
    for (let i = 0; i<divs.length; i++) {
      divs[i].removeEventListener('click', toggleView)
      divs[i].remove()
    }
  }
  const handleMouseOver = () => {
    const messageListEl = document.getElementById('message-list')
    if (!messageListEl) return
    const firstChild = messageListEl.firstChild as HTMLDivElement
    if (firstChild)
      if (firstChild.classList.contains('minimize')) return
    const div = document.createElement('div')
    div.classList.add('mt-3', 'cursor-pointer', 'w-fit', 'ml-4', 'minimize')
    div.textContent = 'Min'
    messageListEl.insertBefore(div, messageListEl.firstChild)
    div.addEventListener('click', toggleView)
  }
  return (
    <div className={className}>
      {
        isMinimized &&
        <div 
          onClick={toggleView} 
          className="mr-5 w-fit bg-white/30 backdrop-blur-md shadow-md px-3 py-1 rounded-tr-md rounded-tl-md cursor-pointer hover:bg-white/50"
        >HELLO</div>
      }
        {
          !isMinimized &&
          <AnimatePresence>
            <motion.div 
              exit={{ 
                opacity: isMinimized ? 0 : 1,
                scale: isMinimized ? 0 : 1
              }} 
              transition={{ duration: 2 }}
            >
              <MessageList 
                id="message-list"
                className="hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:rounded-md p-2" 
                onMouseLeave={handleMouseLeave} 
                onMouseEnter={handleMouseOver}
              >
                {
                  messageToShow &&
                  <AnimatePresence>
                    <motion.div 
                      layout
                      exit={{ opacity: 0, scale: .8 }} 
                      key={messageToShow.id} 
                      initial={{ opacity: 0, scale: .8}} 
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        ease: "easeIn", 
                        duration: 0.3, 
                      }}
                    >
                      <div className="bg-white/20 backdrop-blur-md shadow-sm w-full my-3 p-4 rounded-md overflow-y-auto max-h-32 lg:overflow-y-none lg:max-h-none">
                        <div className="">{messageToShow.from}:</div>
                        <div className="ml-12 my-2" dangerouslySetInnerHTML={{__html: messageToShow.body}}></div>
                        <div className="flex items-center gap-x-1 justify-end mr-6">
                          <div className="">{messageToShow.city},</div>
                          <div className="">{messageToShow.country}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                }
              </MessageList>
            </motion.div>
          </AnimatePresence>
        }
    </div>
  )
}

export default Messages