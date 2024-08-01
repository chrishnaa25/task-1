import React, { useState } from "react";
import plus from "../images/plusicon.svg";
import search from "../images/searchicon.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PersonalDetails from "./PersonalDetails";
import ServiceCenter from "./ServiceCenter";

const AddAdvis = () => {
  const [showPersonal, setShowPersonal] = useState(false);
  const [showAddAdvis, setShowAddAdvis] = useState(false);
  const handleClick = () => {};
  const handleChange = () => {};
  const handleAdd = () => {
    setShowPersonal(true);
    setShowAddAdvis(true);
  };
  const handleBack = () => {
    setShowAddAdvis(false);
    setShowPersonal(false);
  };
  return (
    <div>
      {showAddAdvis ? (
        <ServiceCenter back={handleBack} />
      ) : (
        <div className=" mx-10 mt-7 font-poppins w-[1056px] bg-customWhite flex flex-col justify-between h-32 pt-6 px-6 rounded-lg font-poppins">
          <div className="flex gap-5 items-center">
            <p className="font-semibold text-3xl leading-[48px] ">
              A1 Car Service Center
            </p>
            <Button
              data-name=""
              type="button"
              name="Verified"
              onClick={handleClick}
              className="border h-6 w-20 rounded border-customGreen text-customGreen text-sm"
            />
          </div>
          <div className="flex justify-between">
            {/* EDIT ADVISOR AND BACK BUTTON */}
            <div className="flex w-40 justify-center gap-2 items-center bg-customSlate rounded-t-lg">
              <Button
                data-name=""
                type="button"
                name="Service Advisors"
                onClick={handleClick}
                className="h-10 font-medium text-medium"
              />
            </div>
            {/* ADD AND DELETE ADVISOR BUTTONS */}
            <div className="flex gap-6 h-8 text-sm justify-center ">
              <div className="flex border border-customBlue rounded gap-1 px-2 items-center ">
                <img src={plus} alt="" className="h-6 w-6" />
                <Button
                  data-name=""
                  type="button"
                  name="Add Advisor"
                  onClick={handleAdd}
                  className="h-6 text-customBlue font-medium text-sm"
                />
              </div>
              <div className="flex rounded gap-1 border border-customBorder px-2 items-center">
                <img src={search} alt="" className="h-6 w-6" />
                <Input
                  type="text"
                  name="Search"
                  value=""
                  placeholder="Service Advisors"
                  className="h-6 focus:outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showPersonal ? <PersonalDetails /> : ""}
    </div>
  );
};

export default AddAdvis;
