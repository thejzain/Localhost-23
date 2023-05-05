import { useRouter } from "next/router";
import { Switch } from '@headlessui/react'
import { useState } from "react";
import styles from "./Navbar.module.css"
const Navbar = (props) => {
    const [enabled, setEnabled] = useState(false)
    const navItems = [{
        key: 0,
        name: "About us",
        link: "#"
    },
    {
        key: 1,
        name: "Contacts",
        link: "#"
    },
    {
        key: 2,
        name: "FAQ",
        link: "#"
    },
    ]
    const router = useRouter()
    return (
        <div className="w-full border top-0 absolute z-10 bg-transparent flex justify-between px-6">
            <div className="items grid ">
                <ul>
                    {navItems.map((item) => {
                        return (
                            <li className={`${styles.item} hover:cursor-pointer`} key={item.key} onClick={() => {
                                router.push(item.link)
                            }}>{item.name}</li>
                        )
                    })}

                </ul>
            </div>
            <div className="my-auto font-bold text-xl">Brand</div>
            <div className="toggleswitch flex my-auto gap-4">
                <div className="text-2xl">Sound</div>
                <div className="my-auto mt-2">
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-gray-300' : 'bg-gray-300'}
          relative inline-flex h-[20px] w-[47px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-gray-800 shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Navbar;