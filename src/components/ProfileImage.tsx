import React, {useEffect} from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
  initials: string
  photo: string
  size: number
}

export const ProfileImage = ({initials, photo, size}: Props) => {
  let style = "w-36 h-36";

  useEffect(() => {
    console.log("ProfileImage mounted");
    style = `w-${size} h-${size}`;
  }, [size]);

  return (
    <Avatar className={style}>
      <AvatarImage src={photo} alt={initials}/>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}