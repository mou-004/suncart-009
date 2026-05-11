"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { MdImage, MdPerson } from "react-icons/md";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({ name, image });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated successfully!");
      router.push("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white border border-orange-50 rounded-3xl shadow-xl shadow-orange-100/30 px-8 py-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-base-content mb-8">
            Update Your Profile
          </h1>

          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Full Name
              </label>
              <fieldset className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4 focus-within:border-orange-300 transition-colors">
                <MdPerson size={17} className="text-orange-300 shrink-0" />
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.name || ""}
                  placeholder="Enter Your Name"
                  className="grow bg-transparent text-sm text-base-content placeholder:text-base-content/30 outline-none py-3"
                />
              </fieldset>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Photo URL
              </label>
              <fieldset className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4 focus-within:border-orange-300 transition-colors">
                <MdImage size={17} className="text-orange-300 shrink-0" />
                <input
                  type="url"
                  name="image"
                  defaultValue={user?.image || ""}
                  placeholder="Enter Your Photo URL"
                  className="grow bg-transparent text-sm text-base-content placeholder:text-base-content/30 outline-none py-3"
                />
              </fieldset>
            </div>

            <div className="flex justify-end items-center gap-4">
              <button
                type="button"
                onClick={() => router.push("/profile")}
                className="btn btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-full px-6 transition-all duration-200 shrink-0"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 rounded-full shadow-lg shadow-orange-200/50 hover:scale-[1.02] transition-transform duration-200 mt-1 font-bold tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
