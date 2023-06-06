import Link from "next/link";

function MainNavigation() {
  return (
    //header padding sorunlu
    <header className="p-[10%] py-0 w-full h-20 flex items-center justify-between bg-[#77002e]">
      <Link href="/">
        <div className="text-3xl text-white font-bold">React Meetups</div>
      </Link>
      <nav>
        <ul className="list-none m-0 p-0 flex items-center [&>li]:ml-12 text-[#fcb8d2] text-2xl">
          <li className="hover:text-white">
            <Link href="/">All Meetups</Link>
          </li>
          <li className="hover:text-white">
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
