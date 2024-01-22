import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
  initials: string
  photo: string
}

export const ImageHero = ({ initials, photo }: Props) => {
  return (
    <Avatar className="w-36 h-36">
      <AvatarImage src={ photo } alt={ initials }/>
      <AvatarFallback>{ initials }</AvatarFallback>
    </Avatar>
  )
}