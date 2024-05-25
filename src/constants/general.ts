import { path } from '@/constants/path'

type MenuType = {
  name: string
  path: string
}

export const menus: MenuType[] = [
  {
    name: 'home',
    path: path.HOME
  },
  {
    name: 'services',
    path: path.SERVICES
  },
  {
    name: 'resume',
    path: path.RESUME
  },
  {
    name: 'work',
    path: path.WORK
  },
  {
    name: 'contact',
    path: path.CONTACT
  }
]

// About data
export type AboutType = {
  title: string
  description: string
  info: {
    fieldName: string
    fieldValue: string
  }[]
}

export const about: AboutType = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rem deleniti, repellat ab esse sapiente adipisci inventore ipsam voluptas dolor blanditiis nemo ipsa ex maxime recusandae doloribus delectus quam autem?',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Nguyễn Kim Quốc Nam'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+84) 377 813 805'
    },
    {
      fieldName: 'Email',
      fieldValue: 'nguyenkimquocnam@gmail.com'
    },
    {
      fieldName: 'Address',
      fieldValue: 'Hoc Mon District, Ho Chi Minh City'
    },
    {
      fieldName: 'Experience',
      fieldValue: '1+ Years'
    }
  ]
}

// Experience data
export type ExperienceType = {
  icon: string
  title: string
  description: string
  item: {
    company?: string
    position: string
    duration: string
    project?: string
  }[]
}

export const experience: ExperienceType = {
  icon: '',
  title: 'My Experience',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rem deleniti, repellat ab esse sapiente adipisci inventore ipsam voluptas dolor blanditiis nemo ipsa ex maxime recusandae doloribus delectus quam autem?',
  item: [
    {
      position: 'Front-End Developer',
      duration: 'Jan 2024 - Feb 2024',
      company: 'CFD Circle',
      project: 'CFD Shop'
    },
    {
      position: 'Front-End Developer',
      duration: 'Oct 2023 - Nov 2023',
      company: 'CFD Circle',
      project: 'CFD Courses'
    },
    {
      position: 'Front-End Developer',
      duration: 'Oct 2023 - Nov 2023',
      project: 'Finance Flow',
      company: 'CFD Circle'
    },

    {
      position: 'Front-End Developer',
      duration: 'Oct 2023 - Nov 2023',
      project: 'Wooder Landing Page',
      company: 'CFD Circle'
    },
    {
      position: 'Front-End Developer',
      duration: 'Mar 2024 - Apr 2024 ',
      company: 'Martech JSC Company'
    }
  ]
}

// Education data
export type EducationType = {
  icon: string
  title: string
  description: string
  item: {
    institution: string
    degree: string
    duration: string
  }[]
}

export const education: EducationType = {
  icon: '',
  title: 'My Education',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rem deleniti, repellat ab esse sapiente adipisci inventore ipsam voluptas dolor blanditiis nemo ipsa ex maxime recusandae doloribus delectus quam autem?',
  item: [
    {
      institution: 'Nguyen Tat Thanh University',
      degree: `Bachelor's degree in information technology`,
      duration: '2023 - Present'
    },
    {
      institution: 'CFD Circle',
      degree: 'Fron-End master certificate',
      duration: '2023 - Present'
    }
  ]
}

// Skills data
export type SkillsType = {
  title: string
  description: string
  skillList: {
    icon: string
    name: string
  }[]
}

export const skills: SkillsType = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rem deleniti, repellat ab esse sapiente adipisci inventore ipsam voluptas dolor blanditiis nemo ipsa ex maxime recusandae doloribus delectus quam autem?',
  skillList: [
    {
      icon: '/img/icon-html.svg',
      name: 'HTML'
    },
    {
      icon: '/img/icon-css.svg',
      name: 'CSS'
    },
    {
      icon: '/img/icon-javascript.svg',
      name: 'JavaScript'
    },

    {
      icon: '/img/icon-tailwindcss.svg',
      name: 'TailwindCss'
    },
    {
      icon: '/img/icon-sass.svg',
      name: 'Sass'
    },
    {
      icon: '/img/icon-reactjs.svg',
      name: 'ReactJS'
    },
    {
      icon: '/img/icon-nextjs.svg',
      name: 'Next.js'
    },
    {
      icon: '/img/icon-figma.svg',
      name: 'Figma'
    },
    {
      icon: '/img/icon-reactjs.svg',
      name: 'ReactJS'
    },
    {
      icon: '/img/icon-nodejs.svg',
      name: 'Node.js'
    },
    {
      icon: '/img/icon-mysql.svg',
      name: 'MySQL'
    }
  ]
}
