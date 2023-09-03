'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function FormRegisterIncome() {
  return (
    <div className="grid grid-cols-1 gap-6 py-14">
      <Input placeholder="Title" />
      <Input placeholder="Value" />
      <Button className="mt-6">Create</Button>
      <Button variant={'secondary'}>Cancel</Button>
    </div>
  )
}
