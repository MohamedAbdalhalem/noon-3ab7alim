
export default function Footer() {
  return (
    <div  className="bg-gray-200 p-4 text-center dark:bg-gray-950">
      <h4 className="text-gray-900 font-bold dark:text-white">Copy Right 2025 © By <span className="text-blue-700">Mohamed Abdelhalim</span> All Rights Reserved</h4>
      <p className="text-gray-900 font-bold mt-2 dark:text-white">Designed by React</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mt-2">
        
        <button onClick={() => window.open("https://www.facebook.com/share/19Zu6fQxXM/")} type="button" className="text-white cursor-pointer bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-bold rounded-lg text-md px-5 py-2.5 text-center  dark:focus:ring-[#2557D6]/50 ">
  <i className="fa-brands fa-facebook-f mx-2"></i>
  Follow in Facebook
        </button>
        <button onClick={() => window.open("https://github.com/MohamedAbdalhalem")} type="button" className="text-white cursor-pointer bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-bold rounded-lg text-md px-5 py-2.5 text-center  dark:focus:ring-[#2557D6]/50 ">
  <i className="fa-brands fa-github mx-2"></i>
  Follow in Github
        </button>
        <button onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com")} type="button" className="text-white cursor-pointer bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-bold rounded-lg text-md px-5 py-2.5 text-center  dark:focus:ring-[#2557D6]/50 ">
          <i className="fa-brands fa-google mx-2"></i>
          Follow in Google
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/in/mohamed-abdalhalem-a158922a6/")} type="button" className="text-white cursor-pointer bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-bold rounded-lg text-md px-5 py-2.5 text-center  dark:focus:ring-[#2557D6]/50 ">
  <i className="fa-brands fa-linkedin mx-2"></i>
  Follow In Linkedin
        </button>
      </div>
    </div>
    
  )
}
