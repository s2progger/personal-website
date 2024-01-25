import {Button} from "~/components/ui/button";
import {Link} from "@remix-run/react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export default function TopNav() {
  return (
    <header className="print:hidden">
      <nav>
        <div className="flex flex-wrap justify-evenly md:justify-between justify-items-stretch items-center gap-2">
          <Link to="/" className="flex items-center left space-x-3 rtl:space-x-reverse hover:text-blue-600">
            <svg width="1em" height="1em" viewBox="0 0 256 256" className="size-8" data-icon="ph:wave-triangle-duotone">
              <symbol id="ai:ph:wave-triangle-duotone">
                <g fill="currentColor">
                  <path d="m76 56l52 72H24Zm156 72H128l52 72Z" opacity=".2"/>
                  <path d="m238.48 132.68l-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135l45.51-63a8 8 0 1 1 13 9.36Z"/>
                </g>
              </symbol>
              <use xlinkHref="#ai:ph:wave-triangle-duotone"></use>
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Simon Twogood</span>
          </Link>
          <div className="flex items-center">
            <Button variant="ghost" asChild>
              <Link to="/resume" aria-label="Résumé">Résumé</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="https://www.linkedin.com/in/simon-twogood" aria-label="LinkedIn Profile"><LinkedInLogoIcon className="size-6" /></a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="https://github.com/s2progger" aria-label="GitHub Profile"><GitHubLogoIcon className="size-6" /></a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
