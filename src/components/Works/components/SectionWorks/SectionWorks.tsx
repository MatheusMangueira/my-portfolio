const myWorks = [
  { router: 'https://github.com/MatheusMangueira/Teamsoft', id: '1', image: <img src='https://media.discordapp.net/attachments/949389628413206589/1071213149568647178/image_6.png' alt="Hamburguer" /> },
  { router: 'https://blog.hackingforce.com.br/', id: '2', image: <img src='https://media.discordapp.net/attachments/949389628413206589/1071213150000648192/image_7.png' alt="hrBlog" /> },

]


export const SectionWorks = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center ">
      {myWorks.map((work) => (
        <div key={work.id} className="mx-0 sm:mx-5 my-5 
        border-2 border-accent
        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-primary 
        ">
          <a className="hover:opacity-60 w-full relative" href={work.router} target="_blank" rel="noreferrer" >
            {work.image}
          </a>

        </div>
      ))}
    </div >
  )
}