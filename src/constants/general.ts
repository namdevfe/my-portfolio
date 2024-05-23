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
