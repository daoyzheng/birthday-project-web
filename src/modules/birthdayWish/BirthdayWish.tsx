import { Circle, Img, Page, ScrollDown, Title } from "./birthdayWish.styled"

const BirthdayWish = () => {
  return (
    <Page className="min-h-screen lg:grid lg:grid-cols-7">
      <div className="lg:col-span-4 h-full min-h-full p-3">
        <div className="bg-red-600/20 min-h-screen lg:min-h-full rounded-lg relative">
          {/* <div className="absolute top-20 -left-10">
            <Circle 
              borderRadius="42% 58% 45% 55% / 34% 35% 65% 66% "
              className="w-16 h-16 bg-red-600/20 relative top-0 left-10 shadow-lg"/>
            <Img 
              className="rotate-6 relative -top-14 left-10 -scale-x-100"
              src="/src/assets/bunny1.png" 
              width={60} 
              height={70}
            />
          </div>
          <div className="absolute top-8 left-10">
            <Img 
              className="relative left-2"
              src="/src/assets/sponge-bob.png" 
              width={70} 
              height={70}
            />
            <Circle 
              borderRadius="42% 58% 45% 55% / 67% 35% 65% 33% "
              className="w-10 h-10 bg-red-600/20 relative -top-8 left-6 shadow-lg"/>
          </div>
          <div className="absolute top-16 right-4">
            <Img 
              className="relative top-0 right-0 rotate-6"
              src="/src/assets/drink2.png" 
              width={70} 
              height={100} 
            />
            <Circle 
              borderRadius="68% 32% 65% 35% / 34% 35% 65% 66% "
              className="w-16 h-16 bg-red-600/20 absolute top-0 right-0 shadow-lg"/>
          </div>
          <div className="absolute bottom-0 left-2">
            <Img 
              className="relative rotate-12"
              src="/src/assets/bubble-tea.png" 
              width={100} 
              height={150}
            />
            <Circle 
              borderRadius="62% 38% 34% 66% / 39% 47% 53% 61% "
              className="w-20 h-20 bg-red-600/20 relative bottom-20 shadow-lg"/>
          </div>
          <Img 
            className="absolute bottom-10 right-2 rotate-12"
            src="/src/assets/bunny.png" 
            width={170} 
            height={170}
          /> */}
          <div className="absolute bottom-4 w-full lg:hidden">
            <div className="text-center animate-bounce">Scroll Down</div>
            <ScrollDown/>
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 flex flex-col items-center justify-center relative min-h-screen text-rose-300/90 pb-20">
        <Title className="font-semibold mb-10 text-center">Write a birthday wish</Title>
        <div className="h-11/12 min-h-content lg:w-4/5 w-11/12 max-w-lg lg:mx-0 backdrop-blur-2xl rounded shadow-2xl shadow-red-300/90 lg:p-10 p-4">
          <Img 
            className="absolute -top-3 -right-5 rotate-12"
            src="/src/assets/heart2.png" 
            width={40} 
            height={30}
          />
          <Img 
            className="absolute -top-3 -left-5 -rotate-12"
            src="/src/assets/heart2.png" 
            width={40} 
            height={30}
          />
          <Img 
            className="absolute -bottom-3 -left-5 rotate-12"
            src="/src/assets/heart2.png" 
            width={40} 
            height={30}
          />
          <Img 
            className="absolute -bottom-3 -right-5 -rotate-12"
            src="/src/assets/heart2.png" 
            width={40} 
            height={30}
          />
          <div className="text-xl">
            <form>
              <div className="mb-2">Name</div>
              <input
                className="focus:outline-none bg-transparent border-bottom border-rose-300/90 w-full border-b-2 mb-8"
              />
              <div className="mb-2">Birthday Wish</div>
              <textarea 
                rows={10}
                placeholder="Happy birthday 🎂 🍰"
                className="p-2 focus:outline-none border-2 border-rose-300/90 bg-transparent w-full max-h-50 min-h-50 rounded-lg resize-none placeholder:text-rose-300/50"
              />
              <div className="flex justify-end w-full mt-4">
                <button 
                  className="transition-colors	bg-rose-300/20 hover:bg-rose-300/30 hover:border-none focus:outline-none">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BirthdayWish