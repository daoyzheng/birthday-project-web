import { ChangeEvent, FormEvent, useEffect, useState } from "react"
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
  const updateMessage = async () => {
    if (!selectedMessage) return 
    const url = `${import.meta.env.VITE_CLIENT_API}/api/messages/${selectedMessage.id}`
    const method = 'put'
    const data = selectedMessage
    const config = {
      url,
      method,
      data
    }
    const res = await request(config)
    await fetchMessages()
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
    setSelectedMessage(message)
  }

  const handleNameChange = (e: ChangeEvent) => {
    if (selectedMessage) {
      const message = { 
        ...selectedMessage, 
        from: (e.target as HTMLInputElement).value
      }
      setSelectedMessage(message)
    }
  }

  const handleBodyChange = (e: ChangeEvent) => {
    if (selectedMessage) {
      const message = { 
        ...selectedMessage, 
        body: (e.target as HTMLInputElement).value
      }
      setSelectedMessage(message)
    }
  }

  const handleUpdate = async (event: FormEvent) => {
    event.preventDefault()
    await updateMessage()
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
        <Dialog className="fixed left-auto top-1/4 bg-white/30 w-1/4 min-h-fit h-1/2 rounded backdrop-sepia-0 backdrop-blur-md">
          <div className="p-3 mt-4">
            <form onSubmit={handleUpdate}>
              <div className="font-semibold mb-2">From:</div>
              <input
                readOnly={action === 'delete'}
                className="focus:outline-none bg-transparent w-full border-b-2 mb-8"
                value={selectedMessage?.from}
                onChange={handleNameChange}
              />
              <div className="font-semibold mb-2">Message:</div>
              <textarea 
                readOnly={action === 'delete'}
                rows={10}
                className="focus:outline-none border-b-2 bg-transparent w-full max-h-40"
                value={selectedMessage?.body}
                onChange={handleBodyChange}
              />
              <div className="flex items-center justify-around mt-12">
                <button 
                  onClick={() => setShowDialog(false)}
                  className="focus:outline-none focus:border-none bg-gray-600" 
                >Close</button>
                <button 
                  type="submit"
                  className="bg-blue-500"
                >Update</button>
              </div>
            </form>
          </div>
        </Dialog>
      }
    </div> 
  )
}

export default Admin