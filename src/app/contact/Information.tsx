import { Mail, MapPin, Phone } from 'lucide-react'

type InformationType = {
  icon: JSX.Element
  name: string
  value: string
}

const informations: InformationType[] = [
  {
    icon: <Phone />,
    name: 'Phone',
    value: '(+84) 377 813 805'
  },
  {
    icon: <Mail />,
    name: 'Email',
    value: 'nguyenkimquocnam@gmail.com'
  },
  {
    icon: <MapPin />,
    name: 'Address',
    value: 'Hoc Mon District, Ho Chi Minh City'
  }
]

const Information = () => {
  return (
    <div className="col-span-5 flex flex-col gap-10">
      {informations.map((info, index) => (
        <div key={index} className="flex items-center gap-6">
          {/* Icon */}
          <div className="w-[72px] h-[72px] xs:w-[52px] xs:h-[52px] rounded bg-[#27272c] flex items-center justify-center text-textColor">
            {info.icon}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            <p className="text-white/60">{info.name}</p>
            <p className="text-xl">{info.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Information
