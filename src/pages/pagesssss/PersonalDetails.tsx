import React, { useRef, useState } from "react";
import edit from "../images/editwhite.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { showDetailsOwner } from "../../redux/inputSlice";
import Details from "./Details";

export default function PersonalDetails() {
  const owner = useSelector((state: RootState) => state.input.Owner);
  const dispatch = useDispatch();
  const [image, setImage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [ownerDetails, setOwnerDetails] = useState(owner);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const handleOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = () => {};
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = e.target.files[0];
      setImage(URL.createObjectURL(newImage));
    }
  };

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSave = () => {
    dispatch(showDetailsOwner(ownerDetails));
    setOwnerDetails({
      name: "",
      phone: "",
      expertise: "",
      experience: "",
    });
    setShowDetails(true);
  };

  return (
    <div>
      {showDetails ? (
        <Details />
      ) : (
        <div>
          <div className="bg-customWhite mx-10 mt-7 w-[1056px] flex flex-col bg-customWhite rounded-lg p-7 gap-4 font-poppins">
            {/* DP & DETAILS */}
            <div className=" flex flex-col gap-7">
              <div className="relative">
                <img src={image} alt="" className="h-32 w-32 rounded-lg" />
                <div className="absolute left-16 bottom-2 flex items-center bg-customBlue shadow-lg w-max h-max pl-2 p-1 rounded">
                  <Button
                    data-name=""
                    type="button"
                    name="Edit"
                    onClick={handleImageClick}
                    className="text-customWhite h-5 text-sm"
                  />
                  <img src={edit} alt="del" className="h-5 w-5" />
                  <input
                    type="file"
                    name="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>
              {/* DETAILS */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1 w-[48%]">
                    <p className="text-sm text-customOtp">
                      Service Advisor Name
                    </p>
                    <Input
                      type="text"
                      name="name"
                      value={ownerDetails.name}
                      placeholder=""
                      className="border rounded-lg h-6 w-full p-2 h-full"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[48%] h-16">
                    <p className="text-sm text-customOtp">Phone Number</p>
                    <Input
                      type="text"
                      name="phone"
                      value={ownerDetails.phone}
                      placeholder=""
                      className="border rounded-lg h-6 w-full p-2 h-full"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1 w-[48%] h-16">
                    <p className="text-sm text-customOtp">Expertise</p>
                    <Input
                      type="text"
                      name="expertise"
                      value={ownerDetails.expertise}
                      placeholder=""
                      className="border rounded-lg h-6 w-full p-2 h-full"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[48%]">
                    <p className="text-sm text-customOtp">Experience (Years)</p>
                    <Input
                      type="text"
                      name="experience"
                      value={ownerDetails.experience}
                      placeholder=""
                      className="border rounded-lg h-6 w-full p-2 h-full"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* SAVE & CANCEL BUTTONS */}
            <div className="flex justify-end gap-3">
              <Button
                data-name=""
                type="button"
                name="Save"
                onClick={handleSave}
                className={`${
                  ownerDetails.name === "" ||
                  ownerDetails.phone === "" ||
                  ownerDetails.expertise === "" ||
                  ownerDetails.experience === ""
                    ? "bg-customBlack text-black text-sm px-2 p-1 rounded shadow"
                    : "bg-customBlue text-customWhite text-sm px-2 p-1 rounded shadow"
                }`}
              />
              <Button
                data-name=""
                type="button"
                name="Cancel"
                onClick={handleClick}
                className="bg-customSlate text-customBlue text-sm px-2 p-1 rounded shadow"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
