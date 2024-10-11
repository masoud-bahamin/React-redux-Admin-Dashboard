import { Button } from '../../ui/button'

export default function ProductSize() {
    return (
        <div className="space-x-2 space-y-2">
            <span>Size :</span>
            <Button className='px-2.5' variant={"secondary"} >S</Button>
            <Button className='px-2.5' variant={"secondary"} >M</Button>
            <Button className='px-2.5' variant={"secondary"} >L</Button>
            <Button className='px-2.5' variant={"secondary"} >XL</Button>
            <Button className='px-2.5' variant={"secondary"} >XXL</Button>
        </div>
    )
}
