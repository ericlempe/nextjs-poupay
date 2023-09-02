import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

export default function SettingsPage() {
  return (
    <div className="flex h-full flex-col px-4 py-5">
      <h2 className="flex items-center justify-center pb-14 text-lg font-semibold text-foreground">
        Settings
      </h2>

      <div className="flex items-center justify-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 py-14">
        <p className="text-sm font-medium leading-none">Eric</p>
        <p className="text-sm text-muted-foreground">ericlempe1994@gmail.com</p>
      </div>

      <div className="rounded-xl bg-card">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch id="dark-mode" />
          </div>
          <Separator className="my-5" />
          <div className="flex items-center justify-between">
            <Label htmlFor="notify">Notifications</Label>
            <Switch id="notify" />
          </div>
          <Separator className="my-5" />
          <Button className="mt-14 w-full">Sair</Button>
        </div>
      </div>
    </div>
  )
}
