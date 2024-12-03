import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Lenna from "../assets/Lenna.png";

const Profile = () => {
  const { userID } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = sessionStorage.getItem("accessToken");
      if (!token) return;

      try {
        const response = await fetch("http://localhost:5000/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.error("Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [userID]);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="flex items-center gap-6 mb-6">
        {/* Hiển thị avatar */}
        <img
          src={Lenna}
          alt="Avatar"
          className="h-24 w-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-semibold">{profile.name}</h2>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold">Phone Number</h3>
          <p className="text-gray-600">{profile.phoneNumber || "N/A"}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Role</h3>
          <p className="text-gray-600">{profile.role}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Blueprints</h3>
          <p className="text-gray-600">{profile.blueprints.length || 0} items</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Order Items</h3>
          <p className="text-gray-600">{profile.orderItems.length || 0} items</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
