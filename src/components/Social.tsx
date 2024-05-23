import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const socials: { icon: JSX.Element; path: string }[] = [
  {
    icon: <Linkedin size={16} />,
    path: 'https://www.linkedin.com/in/nguyenkimquocnam/'
  },
  {
    icon: <Github size={16} />,
    path: 'https://github.com/namdevfe'
  }
]

const Social = () => {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          className="text-textColor border border-textColor rounded-full p-2 hover:bg-textColor-hover hover:text-mainColor transition-colors"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
