'use client'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'

export default function FormIncome() {
  return (
    <div className="grid grid-cols-1 gap-6 py-14">
      <div className="grid grid-cols-1 gap-6">
        <Input placeholder="Title" />
        <Input placeholder="Value" />
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Fixed income?</Label>
        </div>
        <Button className="mt-6">Create</Button>
        <SheetClose asChild>
          <Button variant={'secondary'}>Cancel</Button>
        </SheetClose>
      </div>
    </div>
  )
}
