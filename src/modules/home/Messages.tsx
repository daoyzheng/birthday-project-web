import { useEffect, useState } from "react"
import { Message } from "../../interfaces/message"
import request from "../../utils/request"
import { MessageList } from "./home.styled"

interface Props {
  show: boolean
}
const Messages = ({ show }: Props) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [messageToShow, setMessageToShow] = useState<Message[]>([])
  async function fetchMessages () {
    const url = `${import.meta.env.VITE_CLIENT_API}/api/messages`
    const method = 'get'
    const config = {
      url,
      method
    }
    const res = await request(config)
    const { data } = res
    setMessages(data)
  }
  useEffect(() => {
    fetchMessages()
  }, [])

  const toggleView = () => {
    console.log('here')
  }

  const handleMouseLeave = () => {
    console.log('leave')
    const messageListEl = document.getElementById('message-list')
    if (!messageListEl) return
    const div = messageListEl.firstChild
    if (div)
      div.remove()
  }
  const handleMouseOver = () => {
    const messageListEl = document.getElementById('message-list')
    if (!messageListEl) return
    const div = document.createElement('div')
    div.classList.add('mt-3', 'cursor-pointer', 'w-fit', 'ml-4')
    div.textContent = 'Min'
    messageListEl.insertBefore(div, messageListEl.firstChild)
    div.addEventListener('onClick', toggleView)
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
          messages.map((message, index) => {
            return (
              index < 2 &&
              <div key={message.id} className="bg-white/20 backdrop-blur-md shadow-sm w-full my-3 p-4 rounded-md">
                <div className="">{message.from}:</div>
                <div className="ml-12">{message.body}</div>
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