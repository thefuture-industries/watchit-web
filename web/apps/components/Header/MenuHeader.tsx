import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BookmarkOutline from "../@icons/bookmark-outline";
import Account from "../@icons/account";
import LogoutVariant from "../@icons/logout-variant";

const MenuHeader = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref} className="mt-3 font-normal">
            <div
                className="bg-[#181818] min-w-[14rem] p-2 rounded-[14px] flex flex-col gap-1"
            >
                <Link
                    to="/movies/favourites"
                    className="flex items-center gap-3 py-[9px] px-[70px] pl-2 rounded-[14px] cursor-pointer hover:bg-[#222] transition"
                >
                    <BookmarkOutline fill="#777" size={19} />
                    <p className="text-[13px] text-[#888]">Favourites</p>
                </Link>

                <Link
                    to="/users/me"
                    className="flex items-center gap-3 py-[9px] px-[70px] pl-2 rounded-[14px] cursor-pointer hover:bg-[#222] transition"
                >
                    <Account fill="#777" size={19} />
                    <p className="text-[13px] text-[#888]">Profile</p>
                </Link>

                <div className="w-full h-[1px] bg-[#777] mt-3" />

                <div
                    className="flex items-center gap-3 py-[9px] px-[70px] pl-2 rounded-[14px] cursor-pointer hover:bg-[#222] transition"
                    onClick={() => { }}
                >
                    <LogoutVariant fill="#777" size={19} />
                    <p className="text-[13px] text-[#888]">Sign Out</p>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader
