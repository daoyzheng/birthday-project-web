import { MouseEvent, useEffect, useState } from "react"
import { Message } from "../../interfaces/message"
import request from "../../utils/request"
import Dialog from "../common/Dialog"

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [action, setAction] = useState<string>('')
  const [selectedMessage, setSelectedMessage] = useState<Message|null>(null)
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
  const handleEdit = (message: Message) => {
    setShowDialog(true)
    setAction('edit')
  }
  const cellFormat = 'border border-slate-600 p-2'
  return (
    <div className="bg-slate-800 min-h-screen min-w-screen flex justify-center ">
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
                  <tr key={message.id}>
                    <td className={cellFormat}>{message.from}</td>
                    <td className={cellFormat}>{message.body}</td>
                    <td className={cellFormat}>{getLocalDateTime(message.createdAt)}</td>
                    <td className={cellFormat}>{message.city}</td>
                    <td className={cellFormat}>{message.country}</td>
                    <td className={cellFormat}>
                      <div className="cursor-pointer text-blue-300" onClick={() => handleEdit(message)}>Edit</div>
                      <div className="cursor-pointer text-red-400">Delete</div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      {
        showDialog &&
        <Dialog className="fixed left-auto top-1/3 bg-slate-400 w-1/4 h-1/4 rounded">
          HELLO
        </Dialog>
      }
    </div> 
  )
}

export default Admin