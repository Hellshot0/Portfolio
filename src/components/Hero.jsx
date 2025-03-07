import heroImg from "../assets/hero.svg"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Hero = () => {
  return (
    <div className='bg-violet-300 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>Hello ! I'm Nadeem</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Web Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
           I make web pages come alive .
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href='https://github.com/Hellshot0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/muhammad-nadeem-khan-55a774193/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  )
}
export default Hero
