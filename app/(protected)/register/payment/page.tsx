'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function FormRegisterPayment() {
  return (
    <div className="grid grid-cols-1 gap-6 py-14">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Expense type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Fixed</SelectItem>
          <SelectItem value="2">Unexpected</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Expense" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Despesa 1</SelectItem>
          <SelectItem value="dark">Despesa 2</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="Valor" />
      <div className="py-2">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="attachment">Attachment</Label>
          <Input id="attachment" type="file" />
        </div>
      </div>

      <Button className="mt-6">Create</Button>
      <Button variant={'secondary'}>Cancel</Button>
    </div>
  )
}
