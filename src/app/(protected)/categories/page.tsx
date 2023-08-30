'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SheetClose } from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'

export default function FormCategory() {
  return (
    <div className="grid grid-cols-1 gap-6 py-14">
      <Input placeholder="Title" />
      <Textarea rows={8} placeholder="Description..."></Textarea>
      <Button className="mt-3">Create</Button>
      <SheetClose asChild>
        <Button variant={'secondary'}>Cancel</Button>
      </SheetClose>
    </div>
  )
}
