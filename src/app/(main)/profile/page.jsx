"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import avatarImage from "../../../assets/user.png";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center py-20">
          <div className="bg-orange-50 px-4 md:px-20 lg:px-32 py-4 md:py-8 mx-auto rounded-md shadow-md space-y-4 text-center flex flex-col justify-center items-center">
            <figure className="mx-auto">
              <Image
                src={user?.image ? user.image : avatarImage}
                referrerPolicy="no-referrer"
                alt="avatarImg"
                width={120}
                height={120}
                className="rounded-full"
              />
            </figure>
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold text-center mb-2">
                {user?.name}
              </h2>
              <p className="text-gray-500 text-center">{user?.email}</p>
              <Link href={"/update"}>
                <button className="btn rounded-[20px] my-6 border-0 text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-300/40 hover:scale-[1.03] hover:shadow-orange-400/50 transition-all duration-200 px-4 md:px-8 w-fit">
                  <BiEdit className="text-lg" /> Update Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
