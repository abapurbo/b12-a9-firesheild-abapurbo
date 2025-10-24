import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function MyProfile() {
  const { profileUpdate, user } = useAuth()

  const [currentUser, setCurrentUser] = useState(user)
  const { displayName, email, photoURL } = currentUser
  useEffect(() => {
    setCurrentUser({ ...user })
  }, [user])

  // update profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log(name, image)

    const dialog = document.getElementById('my_modal_2')
    if (name && image) {
      const profile = {
        displayName: name,
        photoURL: image,
      }
      await profileUpdate(profile)
      setCurrentUser({
        ...currentUser,
        displayName: name,
        photoURL: image,
      });

      toast.success('Update your profile successfuly!')

      e.target.reset()
      dialog.close()
    }
    else {
      toast.error('Please fill up you update profile from')
    }
  }
  return (
    <div className="h-[800px] bg-gray-50 flex flex-col">

        <title>
          SkillSwap || My Profile
        </title>
     

      {/* Content */}
      <div className="grow flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-cyan-700 text-3xl font-semibold tracking-wide mb-8">
          My Profile
        </h1>

        <div className="bg-gray-50 max-w-sm w-full rounded-2xl shadow-lg p-10 text-center text-gray-800">
          {/* Profile Image */}
          <img
            src={photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-indigo-500 object-cover shadow-md"
          />

          {/* User Info */}
          <h1 className="text-3xl font-bold mb-2 text-indigo-600">{displayName}</h1>
          <p className="text-indigo-500 text-lg mb-10 font-light">{email}</p>

          {/* Update Button */}
          <button
            onClick={() => document.getElementById('my_modal_2').showModal()}
            className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200 rounded-full px-12 py-3 font-medium text-white shadow-md shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Update Profile"
          >
            Update Profile
          </button>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box relative bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl text-gray-800 rounded-3xl p-8 transition-all duration-300">

          {/* Close Button (Top-right) */}
          <form method="dialog" className="absolute right-4 top-4">
            <button className="btn btn-sm btn-circle btn-ghost hover:bg-indigo-100 hover:text-indigo-600 transition-all">
              ✕
            </button>
          </form>

          {/* Header */}
          <h3 className="font-bold text-3xl text-center text-indigo-700 mb-8 tracking-wide">
            🧑‍💻 Update Profile
          </h3>

          {/* Form */}
          <form onSubmit={handleUpdateProfile} method="dialog" className="space-y-6">

            {/* Name Field */}
            <div>
              <label className="block  font-semibold text-black mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full focus:outline-none rounded-xl bg-white/70 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block  font-semibold text-black mb-2">
                Photo URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full focus:outline-none rounded-xl bg-white/70 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>

            {/* Save Button */}
            <div className="pt-4 flex justify-center">
              <button
                method="dialog"
                type="submit"
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl active:scale-95 transition-all duration-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Background Overlay */}
        <form method="dialog" className="modal-backdrop bg-black/5 backdrop-blur-xs">
          <button>close</button>
        </form>
      </dialog>

    </div>
  );
}
