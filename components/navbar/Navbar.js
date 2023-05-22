"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import { Dropdown, Avatar } from "@nextui-org/react";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = (props) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  },[session]);
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
      link: "/event",
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
            <Dropdown>
              <Dropdown.Trigger>
              <Avatar
              bordered
              size="xl"
              as="button"
              color="gradient"
              src={session.user?.image}
            />
              </Dropdown.Trigger>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item>
                  <div onClick={() => router.push("/profile")}>Profile</div>
                </Dropdown.Item>
                <Dropdown.Item color="error"><div onClick={()=>signOut()}>Signout</div></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <button onClick={(e) => handleSignin(e)}>Login</button>
          )}
        </div>
      </div>
    );
};

export default Navbar;
