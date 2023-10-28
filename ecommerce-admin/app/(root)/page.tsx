import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className='p-4 flex flex-col '>
      hello Admin dashboard
      <Button size='sm'> Click me </Button>
    </div>
  )
}
