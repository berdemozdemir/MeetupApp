import Link from "next/link";

import classes from "./MainNavigaton.module.css";

function MainNavigation() {
  //"w-full h-20 flex items-center justify-between bg-[#77002e] py-0 px-10"
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>React Meetups</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
