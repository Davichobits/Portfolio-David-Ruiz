import Image from 'next/image';
//components
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton';
// images
import profileImg from '@/assets/profile_green.webp'
// icons
import { BsArrowDownCircle } from 'react-icons/bs'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <Image className='rounded-full w-40 h-40' src={profileImg} alt="Descripción de la imagen" />
          <h2 className='uppercase tracking-widest text-2xl text-center text-blue-100 max-w-80'>
            David Ruiz
          </h2>
          <TextGenerateEffect className='mb-8' words={'Frontend Developer'} />

          <a href="#about">
            <MagicButton 
              title="My work"
              otherClasses='gap-2'
              icon={<BsArrowDownCircle size={20} />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero