import user4 from "../img/user4.png";
import location from "../img/location.svg";
import dotGreen from "../img/dot-green.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import eeuu from "../img/eeuu.svg";
import spanish from "../img/spanish.svg";
import french from "../img/french.svg";

import bg1 from "../img/forest2.avif";
import maps from "../img/maps.jpg";

const languages = [
  { name: "English", level: "B1", img: eeuu },
  { name: "French", level: "Native", img: french },
  { name: "Spanish", level: "C2", img: spanish },
];

function UserProfile() {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        {/* Cover */}
        <div className="relative">
          <img src={bg1} alt="" className="h-58 w-full" />
        </div>

        <div className="relative">
          <img
            src={maps}
            alt=""
            className="absolute opacity-6 object-cover h-full w-full"
          />

          {/* Avatar + Name */}
          <section className="w-full flex flex-col items-center text-center ">
            <Avatar
              className={"relative flex-col w-46 h-52 -mt-24 mb-4 border"}
            >
              <AvatarImage src={user4} alt="Alonso Nuñez"></AvatarImage>
              <AvatarFallback className={"text-4xl"}>MX</AvatarFallback>
              <div className={"profileBlur"}>
                <p className="absolute bottom-0 left-0 right-0 p-2 pb-4 text-sm font-bold">
                  Alonso Nuñez
                </p>
              </div>

              <img
                className="absolute -right-8 bottom-2 h-8"
                src={dotGreen}
                alt=""
              />
            </Avatar>

            <div className="mb-6">
              <p className="font-medium flex items-center gap-1">
                {" "}
                <img src={location} alt="" className="h-3 opacity-60" />{" "}
                Alicante, Spain
              </p>
              <p className="text-sm text-secondary">Software Developer</p>
            </div>
          </section>

          <section className="flex gap-4 items-center justify-center mb-6">
            {languages.map((language) => (
              <div className="flex flex-col items-center">
                <Avatar className={"w-11 h-7 mb-2 "}>
                  <AvatarImage src={language.img} variant="muted"></AvatarImage>
                </Avatar>
                <p className="font-medium">{language.name} </p>
                <p className="text-sm text-secondary">{language.level} </p>
              </div>
            ))}
          </section>

          {/* Description + Skills */}
          <section className="m-6 text-center">
            <div>
              <p className="text-md mb-6">
                I like to learn languages in my free time, learn how to code
                applications, workout when came from work and try to finish my
                biotech research.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div>
      <span>posts</span>
          
          

      </div>

    </>
  );
}

export default UserProfile;
