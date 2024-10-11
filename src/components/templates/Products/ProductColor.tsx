import { Button } from '../../ui/button'

export default function ProductColor() {
  return (
    <div className="space-x-2 space-y-2">
    <span className="">Colors :</span>
    <Button className='px-2.5' variant={"secondary"} ><span className="size-4 rounded-full bg-white"></span></Button>
    <Button className='px-2.5' variant={"secondary"} ><span className="size-4 rounded-full bg-red-400"></span></Button>
    <Button className='px-2.5' variant={"secondary"} ><span className="size-4 rounded-full bg-blue-500"></span></Button>
    <Button className='px-2.5' variant={"secondary"} ><span className="size-4 rounded-full bg-gray-500"></span></Button>
    <Button className='px-2.5' variant={"secondary"} ><span className="size-4 rounded-full bg-green-500"></span></Button>
</div>
  )
}
