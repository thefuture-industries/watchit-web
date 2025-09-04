import { useState } from "react";
import MenuHeader from "./MenuHeader"

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-5">
                <div className="flex items-center gap-5 bg-[#181818] hover:bg-[#333333] p-1 px-2 pr-4 rounded-full cursor-pointer transition" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <img src="/ic_profile_home.jpg" alt="avatars" className="max-w-12 rounded-full" />
                    <p>noneandundefined</p>
                </div>

                {isOpenMenu && <MenuHeader />}
            </div>
        </div>
    )
}

export default Header
