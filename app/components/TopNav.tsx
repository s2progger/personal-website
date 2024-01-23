import {Button} from "~/components/ui/button";
import { Icon } from '@iconify/react';
import {Link} from "@remix-run/react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export default function TopNav() {
  return (
    <header className="print:hidden">
      <nav>
        <div className="flex flex-wrap justify-evenly md:justify-between justify-items-stretch items-center gap-2">
          <Link to="/" className="flex items-center left space-x-3 rtl:space-x-reverse">
            <Icon icon="ph:wave-triangle-duotone" className="text-2xl" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Simon Twogood</span>
          </Link>
          <div className="flex items-center gap-1">
            <Button variant="outline" asChild>
              <Link to="/resume">Resume</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/simon-twogood" aria-label="LinkedIn Profile"><LinkedInLogoIcon /></a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/s2progger" aria-label="GitHub Profile"><GitHubLogoIcon /></a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}