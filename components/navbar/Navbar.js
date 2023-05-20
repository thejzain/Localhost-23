"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import { signIn, useSession } from "next-auth/react";

const Navbar = (props) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  });
  const [enabled, setEnabled] = useState(false);
  const navItems = [
    {
      key: 0,
      name: "Home",
      link: "/home",
    },
    {
      key: 1,
      name: "Events",
      link: "/events",
    },
    {
      key: 2,
      name: "FAQ",
      link: "#",
    },
  ];
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const router = useRouter();
  if (router.pathname != "/")
    return (
      <div className="w-full border top-0 absolute z-10 bg-transparent flex justify-between px-6">
        <div className="items grid ">
          <ul>
            {navItems.map((item) => {
              return (
                <li
                  className={`${styles.item} hover:cursor-pointer`}
                  key={item.key}
                  onClick={() => {
                    router.push(item.link);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-auto font-bold text-xl">Brand</div>
        <div className="toggleswitch flex my-auto gap-4">
          {session ? (
            <div onClick={() => router.push("/profile")}>
              <img
                src={session.user?.image}
                className="rounded-full "
                width={50}
              />
            </div>
          ) : (
            <button onClick={(e) => handleSignin(e)}>Login</button>
          )}
        </div>
      </div>
    );
};

export default Navbar;
