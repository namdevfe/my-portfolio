import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  return (
    <form className="p-10 rounded-xl bg-[#27272c] col-span-7 sm:order-2">
      {/* Textbox */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-textColor capitalize">
          Let's work together
        </h1>
        <p className="text-white/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime
          ipsa voluptatum explicabo, dolorum consequatur sint porro amet.
          Voluptate perferendis laudantium voluptates quidem impedit sequi quae
          culpa repudiandae asperiores magni.
        </p>
      </div>

      {/* Form inputs */}
      <div className="mt-6 flex flex-col gap-4">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Phone number" />
        <Input placeholder="Email address" />

        {/* Select input */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="uiux">UI/UX Design</SelectItem>
              <SelectItem value="logo">Logo Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* TextArea input */}
        <Textarea
          className="resize-none min-h-[200px]"
          placeholder="Type your message here"
        />
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        className="bg-textColor h-10 mt-7 text-mainColor hover:bg-textColor-hover transition-colors duration-300 capitalize w-full"
      >
        Send message
      </Button>
    </form>
  )
}

export default ContactForm
