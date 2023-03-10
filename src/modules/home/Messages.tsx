import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"
import { Message } from "../../interfaces/message"
import request from "../../utils/request"
import { MessageList } from "./home.styled"
import staticMessages from "../../assets/static/messages.json"

interface Props {
  className?: string
}
interface ILocation {
  city: string
  country: string
}

const Messages = ({ className }: Props) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [messagesToShow, setMessagesToShow] = useState<Message[]>([])
  const [messagesLeft, setMessagesLeft] = useState<Message[]>([])
  const [location, setLocation] = useState<ILocation>()
  async function fetchMessages () {
    const url = `${import.meta.env.VITE_CLIENT_API}/api/messages`
    const method = 'get'
    const config = {
      url,
      method
    }
    const res = await request(config)
    const { data } = res
    const shuffledMessags = shuffle([...data])
    setMessages([...shuffledMessags])
    setMessagesLeft([...shuffledMessags])
  }
  async function getLocation () {
    const geoPluginKey = import.meta.env.VITE_GEOPLUGIN
    const url =`https://ssl.geoplugin.net/json.gp?k=${geoPluginKey}`
    const method = 'get'
    const config = {
      url,
      method
    }
    const { data } = await request(config)
    const location = {
      city: data.geoplugin_city,
      country: data.geoplugin_countryName
    }
    setLocation(location)
  }

  function shuffle (messages: Message[]) {
    for (let i = messages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [messages[i], messages[j]] = [messages[j], messages[i]];
    }
    return messages
  }
  const swapMessage = useCallback(
    (msg: Message, timeOutTime: number) => {
      setMessagesToShow(messages => [msg, ...messages])
      setTimeout(() => {
        setMessagesToShow(current => {
          const n = [...current]
          n.pop()
          return n
        })
      }, timeOutTime)
    },
    [setMessagesToShow]
  )

  function rotateMessage (timeOutTime: number) {
    const currentMessage = messagesLeft.shift()
    if (messagesLeft.length === 0) {
      const shuffledMessags = shuffle([...messages])
      setMessagesLeft(shuffledMessags)
    } else {
      setMessagesLeft(messagesLeft)
    }
    if (!currentMessage) return
    swapMessage(currentMessage, timeOutTime)
  }
  let interval : any
  useEffect(() => {
    getLocation()
  }, [])
  useEffect(() => {
    if (location && location.country === 'China') {
      const shuffledMessags = shuffle([...staticMessages])
      setMessages([...shuffledMessags])
      setMessagesLeft([...shuffledMessags])
    } else {
      fetchMessages()
    }
  }, [location])
  useEffect(() => {
    clearInterval(interval)
    if (messages.length > 0) {
      interval = setInterval(() => {
        rotateMessage(23000)
      }, 8000)
    }
    return () => clearInterval(interval)
  }, [messages, messagesLeft])

  return (
    <div className={className}>
      <MessageList 
        id="message-list"
        className="p-5 flex flex-col lg:p-0"
      >
        {
          <AnimatePresence>
          {
            messagesToShow.map((message, index) => {
              return (
                index < 3 &&
                <motion.div 
                  layout
                  exit={{ translateX: 400 }} 
                  key={message.id} 
                  initial={{ translateX: 400 }} 
                  animate={{ translateX: 0 }}
                  transition={{ 
                    ease: "easeIn", 
                    duration: 0.6, 
                  }}
                >
                  <div className="bg-custom backdrop-blur-sm shadow-sm w-full my-3 p-4 rounded-md">
                    <div className="">{message.from}:</div>
                    <div className="ml-12 my-2" dangerouslySetInnerHTML={{__html: message.body}}></div>
                    <div className="flex items-center gap-x-1 justify-end mr-6">
                      <div className="">{message.city},</div>
                      <div className="">{message.country}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })
          }
          </AnimatePresence>
        }
      </MessageList>
    </div>
  )
}

export default Messages