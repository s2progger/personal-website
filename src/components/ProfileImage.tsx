import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
  initials: string
  photo: string
  size: number
}

export const ProfileImage = ({initials, photo, size}: Props) => {
  const style = `w-${size} h-${size}`;
  return (
    <Avatar className="h-36 w-36">
      <AvatarImage src={photo} alt={initials}/>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}