import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import beatzLogo from "@/public/beatzLogo.png";

export function ArtistAvatar() {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage src={beatzLogo.src} alt="artist avatar" />
      <AvatarFallback>BZ</AvatarFallback>
    </Avatar>
  );
}
