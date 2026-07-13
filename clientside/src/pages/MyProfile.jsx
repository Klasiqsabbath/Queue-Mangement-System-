import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const {
    userData,
    setUserData,
    token,
    backendUrl,
    loadUserProfileData,
    darkMode,
    toggleTheme,
  } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-lg flex flex-col gap-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg transition-colors duration-300">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <>
                <span className="text-lg">☀️</span>
                <span className="text-sm font-medium">Light</span>
              </>
            ) : (
              <>
                <span className="text-lg">🌙</span>
                <span className="text-sm font-medium">Dark</span>
              </>
            )}
          </button>
        </div>
        {isEdit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer">
              <img
                className="w-36 rounded opacity-75"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="Profile"
              />
              <img
                className="w-10 absolute bottom-12 right-12"
                src={image ? "" : assets.upload_icon}
                alt="Upload"
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img className="w-36 rounded" src={userData.image} alt="User Profile" />
        )}

        {isEdit ? (
          <input
            className="bg-gray-50 dark:bg-gray-800 dark:text-white text-3xl font-medium max-w-60 mt-4 rounded"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800 dark:text-neutral-100 mt-4">
            {userData.name}
          </p>
        )}

        <hr className="bg-zinc-400 dark:bg-zinc-600 h-[1px] border-none" />
        <div>
          <p className="text-neutral-500 dark:text-neutral-400 underline mt-3">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 dark:text-neutral-300">
            <p className="font-medium">Email id:</p>
            <p className="text-blue-500 dark:text-blue-400">{userData.email}</p>

            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 dark:bg-gray-800 dark:text-white max-w-52 rounded"
                type="text"
                value={userData.phone || ""}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400 dark:text-blue-300">{userData.phone || "Not added"}</p>
            )}

            <p className="font-medium">Address:</p>
            {isEdit ? (
              <p>
                <input
                  className="bg-gray-50 dark:bg-gray-800 dark:text-white rounded"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address?.line1 || ""}
                  type="text"
                  placeholder="Address Line 1"
                />
                <br />
                <input
                  className="bg-gray-50 dark:bg-gray-800 dark:text-white rounded"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address?.line2 || ""}
                  type="text"
                  placeholder="Address Line 2"
                />
              </p>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                {userData.address?.line1 || "Not added"}
                <br />
                {userData.address?.line2 || ""}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-neutral-500 dark:text-neutral-400 underline mt-3">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 dark:text-neutral-300">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="max-w-20 bg-gray-100 dark:bg-gray-800 dark:text-white rounded"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender || "Not Selected"}
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400 dark:text-gray-500">{userData.gender || "Not Selected"}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                className="max-w-28 bg-gray-100 dark:bg-gray-800 dark:text-white rounded"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob || ""}
              />
            ) : (
              <p className="text-gray-400 dark:text-gray-500">{userData.dob || "Not added"}</p>
            )}
          </div>
        </div>

        <div className="mt-10">
          {isEdit ? (
            <button
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white dark:border-blue-400 dark:hover:bg-blue-500 transition-all"
              onClick={updateUserProfileData}
            >
              Save information
            </button>
          ) : (
            <button
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white dark:border-blue-400 dark:hover:bg-blue-500 transition-all"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default MyProfile;
