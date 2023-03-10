import { FormEvent, useEffect, useState } from "react"
import { Circle, Img, Page, Title } from "./birthdayWish.styled"
import spongeBob from '/src/assets/sponge-bob.png'
import img1 from '/src/assets/1.png'
import splash2 from '/src/assets/splash2.png'
import img2 from '/src/assets/2.png'
import splash1 from '/src/assets/splash1.png'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Notification } from "../admin/adminLogin.styled"
import request from "../../utils/request"
import { AxiosResponse } from "axios"

interface ILocation {
  city: string
  country: string
}

const BirthdayWish = () => {
  const [location, setLocation] = useState<ILocation>()
  const [error, setError] = useState<string>('')
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [showSuccessNotification, setShowSuccessNotification] = useState<boolean>(false)

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

  useEffect(() => {
    getLocation()
  }, [])
  const createMessage = async (from: string, body: string) => {
    const url = `${import.meta.env.VITE_CLIENT_API}/api/messages`
    const method = 'post'
    const data = { 
      from, 
      body,
      country: location?.country,
      city: location?.city
    }
    const config = {
      url,
      method,
      data
    }
    try {
      await request(config)
      setShowSuccessNotification(true)
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    } catch (e: any) {
      const response = e.response as AxiosResponse
      setError(response.data.message)
      setShowNotification(true)
      notificationTimeout = setTimeout(() => {
        setError('')
        setShowNotification(false)
      }, 2000)
    }
  }
  let notificationTimeout: any
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    clearTimeout(notificationTimeout)
    const formElements = (e.target as HTMLFormElement).elements
    const name = (formElements[0] as HTMLInputElement).value
    const message = (formElements[1] as HTMLInputElement).value
    if (!message) {
      setError('Please enter a birthday wish, thank you')
      setShowNotification(true)
      notificationTimeout = setTimeout(() => {
        setShowNotification(false)
      }, 2000)
      return
    }
    if (!name) {
      setError('We would love to know who sent the birthday wish')
      setShowNotification(true)
      notificationTimeout = setTimeout(() => {
        setShowNotification(false)
      }, 2000)
      return
    }
    await createMessage(name, message)
    const nameInput = document.getElementById('name') as HTMLInputElement
    if (nameInput) nameInput.value = ''
    const messageInput = document.getElementById('message') as HTMLInputElement
    if (messageInput) messageInput.value = ''
  }

  return (
    <Page className="min-h-screen flex items-center justify-center lg:h-screen overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-7 max-w-screen-2xl w-full bg-white/20 backgdrop-blur-lg shadow-md rounded h-3/4 mx-4 my-10">
        <div className="lg:col-span-4 backdrop-blur-lg rounded-sm min-h-screen lg:min-h-full w-full z-20">
          <Title 
            fontSize="40px"
            fontSizeLg="70px"
            className="text-center rounded-md text-red-500/40 pt-3 z-50 mt-5 lg:mt-0"
          >Langlang's Birthday</Title>
          <Circle
            borderRadius="100%" 
            isUpdown
            duration={5}
            className="w-16 h-16 absolute top-30 -left-3 bg-rose-300/20 backdrop-blur-md shadow z-0"
          />
          <Circle
            borderRadius="100%" 
            isUpdown
            duration={10}
            className="w-12 h-12 absolute top-32 right-12 bg-rose-200/30 backdrop-blur-md shadow z-0"
          />
          <Circle
            borderRadius="100%" 
            duration={8}
            className="w-14 h-14 absolute top-32 lg:top-12 right-32 bg-rose-300/30 backdrop-blur-md shadow z-0"
          />
          <Circle
            borderRadius="100%" 
            duration={5}
            className="w-14 h-14 absolute top-64 left-32 bg-pink-200/30 backdrop-blur-md shadow z-0"
          />
          <Circle
            borderRadius="100%" 
            duration={5}
            isUpdown
            className="w-32 h-32 absolute top-64 lg:right-72 right-24 bg-pink-200/20 backdrop-blur-md shadow z-0"
          />
          <Circle
            borderRadius="100%" 
            duration={8}
            isUpdown
            className="w-20 h-20 absolute -bottom-5 right-24 bg-pink-400/20 backdrop-blur-md shadow z-0"
          />
          <div className="relative lg:right-10 bg-red-300 lg:top-0 top-12">
            <Img
              className="absolute right-10 lg:top-2 z-10 w-1/5 max-w-6 rotate-12"
              src={spongeBob}
            />
            <Img
              className="absolute right-10 top-5 z-10 w-2/4 max-w-20"
              src={img1}
            />
            <Img
              className="absolute right-8 top-5 w-2/4 max-w-20"
              src={splash2}
            />
          </div>
          <div className="relative lg:top-36 lg:left-20 left-8 top-72">
            <Img
              className="absolute left-0 top-0 z-10 w-2/3 max-w-24"
              src={img2}
            />
            <Img
              className="absolute left-0 top-0 w-2/3 max-w-26"
              src={splash1}
            />
          </div>
          {/* <div className="absolute bottom-10 w-full lg:hidden">
            <div className="text-center animate-bounce">Scroll Down</div>
            <ScrollDown/>
          </div> */}
        </div>
        <div className="lg:col-span-3 flex flex-col items-center justify-center relative py-10 mx-4 lg:mx-2 min-h-screen lg:min-h-0">
          <div className="backdrop-blur-md rounded lg:p-6 p-4 w-full lg:max-w-lg max-w-sm">
            <Title 
              fontSize="30px"
              fontSizeLg="50px"
              className="font-semibold mb-10 text-center text-red-500/40"
            >Write a birthday wish</Title>
            <div className="text-xl">
              <form onSubmit={handleSubmit} id="form">
                <input
                  id="name"
                  className="focus:outline-none bg-white/20 rounded-md h-12 px-2 text-slate-500 w-full mb-4"
                  placeholder="Name"
                />
                <textarea 
                  id="message"
                  rows={10}
                  placeholder="Happy birthday????????"
                  className="p-2 focus:outline-none bg-white/20 w-full max-h-36 min-h-36 rounded-lg resize-none text-slate-500"
                />
                <div className="flex justify-end w-full mt-4">
                  <button 
                    type="submit"
                    className="transition-colors	bg-rose-300/20 hover:bg-rose-300/30 hover:border-none focus:outline-none">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
      <Notification className="w-fit h-12 bg-orange-400 rounded text-lg text-center p-2" show={showNotification}>
        {error}
      </Notification>
      <Notification className="w-fit h-12 bg-green-400/80 rounded text-lg text-center p-2" show={showSuccessNotification}>
        Thank you very much
      </Notification>
    </Page>
  )
}

export default BirthdayWish