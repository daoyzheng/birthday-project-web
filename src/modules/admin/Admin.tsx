import { useEffect, useState } from "react"
import { Message } from "../../interfaces/message"
import request from "../../utils/request"

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const fetchMessages = async () => {
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
  const getLocalDateTime = (createdAt: string) => {
    const localDateTime = new Date(createdAt).toLocaleString()
    return localDateTime
  }
  const cellFormat = 'border border-slate-600 p-2'
  return (
    <div className="bg-slate-800 min-h-screen w-screen flex justify-center ">
      <div className="p-10">
        <div className="mb-10 text-center font-bold text-3xl">Birthday Wishes</div>
        <table className="table-fixed border border-collapse border-slate-600">
          <thead>
            <tr>
              <th className={cellFormat}>From</th>
              <th className={cellFormat}>Message</th>
              <th className={cellFormat}>Date</th>
              <th className={cellFormat}>City</th>
              <th className={cellFormat}>Country</th>
              <th className={cellFormat}></th>
            </tr>
          </thead>
          <tbody>
            {
              messages.map(message => {
                return (
                  <tr>
                    <td className={cellFormat}>{message.from}</td>
                    <td className={cellFormat}>{message.body}</td>
                    <td className={cellFormat}>{getLocalDateTime(message.createdAt)}</td>
                    <td className={cellFormat}>{message.city}</td>
                    <td className={cellFormat}>{message.country}</td>
                    <td className={cellFormat}>
                      <div>delete</div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div> 
  )
}

export default Admin