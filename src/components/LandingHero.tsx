import React from "react"
import { ProfileImage } from "@/components/ProfileImage.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

export const LandingHero = () => {
  return (
    <Card className="p-10">
      <ProfileImage size={36} initials="ST" photo="https://avatars.githubusercontent.com/u/496706"  />
    </Card>
  )
}