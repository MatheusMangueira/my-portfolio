import { useState } from "react"
import { B } from "../../assets/image/B"
import emailjs from '@emailjs/browser'

export const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')



  const handleSubmitContact = (e: any) => {
    e.preventDefault()

    const templateParams = {
      name: name,
      email: email,
      message: message
    }

    emailjs.send('service_ud5yblr', 'template_mxyu4gv', templateParams, 'kfHkAUeV-Tbmm2-9C')
      .then(res => {
        console.log(res.status, 'status')
        setEmail('')
        setName('')
        setMessage('')
      })
      .catch(err => console.log(err))

  }



  return (
    <div className="py-10 lg:py-36 h-full w-full
    bg-[url('https://cdn.discordapp.com/attachments/949389628413206589/1071221793249046598/image_5.png')]
    bg-black
    bg-cover
    bg-bottom
    ">
      <div className="px-5 xl:px-20 xl:mb-0 h-full ">
        <div className="mb-[40px] w-full h-full">
          <div className=" hidden lg:flex justify-center mb-[-20px] ml-[300px]">
            <B
              hight='124px'
              width='124px'
            />
          </div>
          <h1 id="Contact" className=" text-center w-full text-[48px] font-inter text-accent">
            Contact
          </h1>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-around lg:items-center">
          <div className="w-full">
            <p className="text-white text-[18px]">If you want to have a successful business and reach your goals, don't hesitate to get in touch with me. I offer creative and effective solutions to help you overcome challenges and drive the success of your company. Let's work together and get remarkable results.
              <br /> <br />
              With my extensive experience and unique skills, I can help you achieve your business objectives and turn your dreams into reality. Don't waste any more time, contact me now to find out how I can help you.</p>
          </div>
          <form
            onSubmit={handleSubmitContact}
            className="text-white my-10 lg:mx-16 flex justify-center items-center w-full flex-col ">
            <div className="flex flex-col w-full ">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 mb-5 rounded-sm bg-transparent border-2 border-accent" type="text" placeholder="Name" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 mb-5 rounded-sm bg-transparent border-2 border-accent" type="text" placeholder="Email" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" resize-none	h-[200px] p-2 mb-5 rounded-sm bg-transparent border-2 border-accent" name="form" placeholder="Message"></textarea>

            </div>
            <div className="mt-2 w-full">
              <input
                value="submit"
                className="font-inter text-[22px] bg-accent hover:bg-secondary w-full p-2 rounded-sm cursor-pointer text-primary hover:text-accent duration-300 "
                type="submit" />


            </div>
          </form>
        </div>


      </div >
    </div >
  )
}