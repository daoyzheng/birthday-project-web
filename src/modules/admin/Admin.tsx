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
      data,
      isProtected: true
    }
    const res = await request(config)
    const updatedMessage : Message = res.data
    setMessages(oldMessages => {
      return oldMessages.map(message => {
        if (message.id === updatedMessage.id) {
          return updatedMessage
        }
        return message
      })
    })

  }
  const deleteMessage = async () => {
    if (!selectedMessage) return
    const url = `${import.meta.env.VITE_CLIENT_API}/api/messages/${selectedMessage.id}`
    const method = 'delete'
    const config = {
      url,
      method,
      isProtected: true
    }
    await request(config)
    const updatedMessages = messages.filter(m => m.id !== selectedMessage.id)
    setMessages(updatedMessages)
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
    setAction('update')
    setSelectedMessage(message)
  }
  const handleRemove = (message: Message) => {
    setShowDialog(true)
    setAction('delete')
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

  const handleCityChange = (e: ChangeEvent) => {
    if (selectedMessage) {
      const message = { 
        ...selectedMessage, 
        city: (e.target as HTMLInputElement).value
      }
      setSelectedMessage(message)
    }
  }

  const handleCountryChange = (e: ChangeEvent) => {
    if (selectedMessage) {
      const message = { 
        ...selectedMessage, 
        country: (e.target as HTMLInputElement).value
      }
      setSelectedMessage(message)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    window.location.href="/admin/login"
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (action === 'update') {
      await updateMessage()
    } else {
      await deleteMessage()
    }
    setShowDialog(false)
  }
  const cellFormat = 'border border-slate-600 p-2'
  return (
    <div className="bg-slate-800 min-h-screen min-w-screen flex justify-center ">
      <button className="absolute right-10 top-10 font-bold" onClick={handleLogout}>Logout</button>
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
              <th className={cellFormat}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              messages.length === 0 ?
              <tr><td>Empty</td></tr> :
              messages.map(message => {
                return (
                  <tr key={message.id}>
                    <td className={cellFormat}>{message.from}</td>
                    <td className={cellFormat}>{message.body}</td>
                    <td className={cellFormat}>{getLocalDateTime(message.createdAt)}</td>
                    <td className={cellFormat}>{message.city}</td>
                    <td className={cellFormat}>{message.country}</td>
                    <td className={`${cellFormat} text-center`}>
                      <div className="cursor-pointer text-blue-300" onClick={() => handleEdit(message)}>Edit</div>
                      <div className="cursor-pointer text-red-400" onClick={() => handleRemove(message)}>Delete</div>
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
        <Dialog className="fixed left-auto top-1/4 bg-slate-700/70 backdrop-opacity-70 w-1/4 min-h-fit h-fit rounded backdrop-sepia-0 backdrop-blur-md">
          <div className="p-3 my-4">
            <form onSubmit={handleSubmit}>
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
              <div className="font-semibold mb-2">City:</div>
              <input
                readOnly={action === 'delete'}
                className="focus:outline-none bg-transparent w-full border-b-2 mb-8"
                value={selectedMessage?.city}
                onChange={handleCityChange}
              />
              <div className="font-semibold mb-2">Country:</div>
              <input
                readOnly={action === 'delete'}
                className="focus:outline-none bg-transparent w-full border-b-2 mb-8"
                value={selectedMessage?.country}
                onChange={handleCountryChange}
              />
              <div className="flex items-center justify-around mt-12">
                <button 
                  onClick={() => setShowDialog(false)}
                  className="focus:outline-none focus:border-none bg-gray-600" 
                >Close</button>
                <button 
                  type="submit"
                  className={`${action === 'update' ? 'bg-blue-500' : 'bg-red-800'}`}
                >{ action === 'update' ? 'Update' : 'Delete'}</button>
              </div>
            </form>
          </div>
        </Dialog>
      }
    </div> 
  )
}

export default Admin