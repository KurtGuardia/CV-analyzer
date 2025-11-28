import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='w-[90%] mx-auto mt-16'>
      <div className='flex flex-col items-center gap-5 rounded-t-3xl bg-gradient-to-b from-light-blue-200 to-light-blue-100 px-10 py-8 shadow-sm'>
        <p className='text-center text-base text-dark-200 md:text-2xl'>
          This app was developed by{' '}
          <a
            href='https://kurtguardia.com'
            target='_blank'
            rel='noreferrer'
            className='font-semibold text-gradient hover:opacity-80'
          >
            Kurt{' '}
          </a>
          based on a JS Mastery course.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-4 text-base font-semibold text-dark-200 md:text-lg'>
          <a
            href='https://instagram.com/kurt.guardia'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-black'
          >
            <FaInstagram className='text-xl' />
            Instagram
          </a>
          <span className='text-gray-300'>•</span>
          <a
            href='https://facebook.com/kurt.guardia'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-black'
          >
            <FaFacebook className='text-xl' />
            Facebook
          </a>
          <span className='text-gray-300'>•</span>
          <a
            href='https://linkedin.com/in/kurt-guardia-creative'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-black'
          >
            <FaLinkedin className='text-xl' />
            LinkedIn
          </a>
          <span className='text-gray-300'>•</span>
          <a
            href='https://github.com/KurtGuardia'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 hover:text-black'
          >
            <FaGithub className='text-xl' />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
