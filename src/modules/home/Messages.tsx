import { useCallback, useEffect, useState } from "react"
import { Message } from "../../interfaces/message"
import request from "../../utils/request"
import { MessageList } from "./home.styled"

interface Props {
  show: boolean
}
const Messages = ({ show }: Props) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [messagesToShow, setMessagesToShow] = useState<Message[]>([])
  const [messagesLeft, setMessagesLeft] = useState<Message[]>([])
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
    console.log('hshsh', shuffledMessags)
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
  const addMessage = useCallback(
    (msg: Message) => {
      setMessagesToShow(messages => [...messages, msg])
      setTimeout(() => {
        setMessagesToShow(current => {
          const n = [...current]
          n.shift()
          return n
        })
      }, 13500)
    },
    [setMessagesToShow]
  )

  function rotateMessage () {
    const currentMessage = messagesLeft.shift()
    if (messagesLeft.length === 0) {
      const shuffledMessags = shuffle(messages)
      setMessagesLeft(shuffledMessags)
    } else {
      setMessagesLeft(messagesLeft)
    }
    if (!currentMessage) return
    addMessage(currentMessage)
  }
  let interval : any
  useEffect(() => {
    fetchMessages()
  }, [])
  useEffect(() => {
    if (messages.length > 0) {
      interval = setInterval(() => {
        rotateMessage()
      }, 7000)
    }
    return () => clearInterval(interval)
  }, [messages])

  const toggleView = () => {
    console.log('here')
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
    if (firstChild.classList.contains('minimize')) return
    const div = document.createElement('div')
    div.classList.add('mt-3', 'cursor-pointer', 'w-fit', 'ml-4', 'minimize')
    div.textContent = 'Min'
    messageListEl.insertBefore(div, messageListEl.firstChild)
    div.addEventListener('click', toggleView)
  }
  return (
    <div className="absolute bottom-0 right-0 z-10 mr-4">
      <MessageList 
        id="message-list"
        className="h-fit hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:rounded-md p-2" 
        onMouseLeave={handleMouseLeave} 
        onMouseEnter={handleMouseOver}
      >
        {
          messagesToShow.map((message, index) => {
            return (
              index < 2 &&
              <div key={message.id} className="bg-white/20 backdrop-blur-md shadow-sm w-full my-3 p-4 rounded-md">
                <div className="">{message.from}:</div>
                <div className="ml-12 my-2">{message.body}</div>
                <div className="flex items-center gap-x-1 justify-end mr-6">
                  <div className="">{message.city},</div>
                  <div className="">{message.country}</div>
                </div>
              </div>
            )
          })
        }
      </MessageList>
    </div>
  )
}

export default Messages