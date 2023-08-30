'use client'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface IconDialogProps {
  icon: React.ReactNode
  iconTitle?: string
  title: string
  subTitle?: string
  content: React.ReactNode
}

export default function IconDialog({
  icon,
  iconTitle,
  title,
  subTitle,
  content,
}: IconDialogProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-col items-center justify-center gap-1">
          <Button className="h-18 w-18 p-4" variant="outline" size="icon">
            {icon}
          </Button>
          {iconTitle && (
            <p className="text-xs text-muted-foreground">{iconTitle}</p>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="h-full w-full" side={'bottom'}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {subTitle && <SheetDescription>{subTitle}</SheetDescription>}
        </SheetHeader>
        {content}
      </SheetContent>
    </Sheet>
  )
}
