"use client";

import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button/button.component";
import Text from "../../atoms/text/text.component";
import { NavigationNames } from "../../navigation/navigation.type";

const UserCard = () => {
  const navigate = useNavigate();

  const dummyUserData = {
    name: "Merve Güzel",
    title: "Front End Developer",
  };

  return (
    <div className="bg-white shadow-xl rounded-lg text-gray-900 w-full sm:w-80 md:w-96 lg:w-1/4">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full h-full"
          src="https://media.licdn.com/dms/image/v2/D4D16AQF6HwdRMyrSQw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1720436844715?e=1748476800&v=beta&t=anZYvIHE6uYnuch6yfwKuvHemIDyuBxKJDiauV_PGiY"
          alt="Mountain"
        />
      </div>

      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZElMNFXv-lQzkLqtLk7l1k090WNrupIZCw&s"
          alt="Profile Picture"
        />
      </div>

      <div className="text-center mt-2">
        <h2 className="font-semibold text-lg">{dummyUserData.name}</h2>
        <Text className="text-gray-500 text-sm" text={dummyUserData.title} />
      </div>
      <div className="p-4 border-t mx-8 mt-2">
        <Button
          text="settings"
          className="w-full sm:w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
          onClick={() => navigate(NavigationNames.SETTINGS)}
        />
      </div>
    </div>
  );
};

export default UserCard;
