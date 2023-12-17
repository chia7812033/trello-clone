import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full border-t flex items-center p-2">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="flex space-x-2 mx-2 w-full justify-between md:justify-end">
          <Button size="sm" variant="ghost" asChild>
            <Link href="/sign-in">Privacy Policy</Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/sign-up">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
    )
}