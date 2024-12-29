import { useState } from "react";

const initialUserData = {
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  password: "**********",
  dateOfBirth: "25 January 1990",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  profileImage:
    "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export default function Setting() {
  const [activeTab, setActiveTab] = useState(0);
  const [userData, setUserData] = useState(initialUserData);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const tabs = ["Edit Profile", "Preferences", "Security"];

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSave = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Saved user data:", userData);

      setSaveMessage("Profile updated successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSaveMessage("Error saving profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="py-6 lg:px-10 px-5">
      <div className="mx-auto p-7 rounded-3xl bg-white">
        <div className="flex gap-8 mb-8 border-b">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`pb-2 px-1 ${
                index === activeTab
                  ? "border-b-2 border-black"
                  : "text-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <img
                src={userData.profileImage}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
              <button className="absolute bottom-0 right-0 p-1 bg-gray-800 rounded-full">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <form
            onSubmit={handleSave}
            className="flex-1 grid lg:grid-cols-2 gap-6"
          >
            <div>
              <label className="block mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded-xl"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">User Name</label>
              <input
                type="text"
                name="username"
                className="w-full p-2 border rounded-xl"
                value={userData.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-xl"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded-xl"
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Date of Birth</label>
              <input
                type="text"
                name="dateOfBirth"
                className="w-full p-2 border rounded-xl"
                value={userData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Present Address</label>
              <input
                type="text"
                name="presentAddress"
                className="w-full p-2 border rounded-xl"
                value={userData.presentAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Permanent Address</label>
              <input
                type="text"
                name="permanentAddress"
                className="w-full p-2 border rounded-xl"
                value={userData.permanentAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                className="w-full p-2 border rounded-xl"
                value={userData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                className="w-full p-2 border rounded-xl"
                value={userData.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Country</label>
              <input
                type="text"
                name="country"
                className="w-full p-2 border rounded-xl"
                value={userData.country}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>

        <div className="mt-8 flex flex-col lg:items-end gap-4">
          {saveMessage && (
            <div
              className={`text-sm ${
                saveMessage.includes("Error")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {saveMessage}
            </div>
          )}
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-16 py-3 w-full lg:w-auto bg-gray-900 text-white rounded-xl hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
