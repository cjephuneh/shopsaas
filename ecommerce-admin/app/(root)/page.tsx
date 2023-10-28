import Image from 'next/image'
import { Button } from "@/components/ui/button"


const SetupPage = () =>{
  return (
    <div className='p-4 flex flex-col '>
      This is a protected route!
      <Button size='sm'> Click me </Button>
    </div>
  )
}


export default SetupPage