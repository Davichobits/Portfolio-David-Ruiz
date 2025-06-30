import GithubIcon from '/assets/images/icon-github.svg'
import FrontEndMentorIcon from '/assets/images/icon-frontend-mentor.svg'
import LinkedinIcon from '/assets/images/icon-linkedin.svg';
import twitterIcon from '/assets/images/icon-twitter.svg';

import imageProfile from '/assets/images/david-profile.png';

export const Hero = () => {
  return (
    <section className='flex flex-col items-center px-4 text-center'>
      <ul className='flex gap-4 my-6'>
        <li>
          <a href="https://github.com/Davichobits" target="_blank">
            <img src={GithubIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.frontendmentor.io/profile/Davichobits" target="_blank">
            <img src={FrontEndMentorIcon} alt="Front End Mentor" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davidirc/" target="_blank">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://x.com/CodingTube" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </li>
      </ul>
      <img className='w-[174px] mb-10 mask-t-from-70%' src={imageProfile} alt="Profile" />
      <p className='text-[40px]/[1] mb-6'>Nice to meet you! I'm <span className='underline decoration-Green decoration-[4px]'>David Ruiz</span>.</p>
      <p className='font-medium text-Soft-White mb-6'>Based in Ecuador, I’m a front-end developer passionate about building accessible web apps that users love.</p>

      <p className='uppercase underline decoration-Green decoration-2'>Contact me</p>
    </section>
  )
}
