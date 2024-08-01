import React from "react";
import backkk from "../images/backicon.svg";
import Button from "../../components/Button";

interface ServiceCenterProps {
  back: () => void;
}

const ServiceCenter = ({ back }: ServiceCenterProps) => {
  const handleClick = () => {};
  return (
    <div>
      <div className=" bg-customWhite flex flex-col justify-between mx-10 mt-7 w-[1056px]  h-32 pt-6 px-6 rounded-lg font-poppins">
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
          <div className="flex w-[20%] h-12 justify-center gap-2 items-center bg-customSlate rounded-t-lg">
            <img src={backkk} alt="" className="h-7 w-7" />
            <Button
              data-name=""
              type="button"
              name="Edit Service Advisor"
              onClick={back}
              className="h-7 font-medium text-medium"
            />
          </div>
          {/* ADD AND DELETE ADVISOR BUTTONS */}
          <div className="flex gap-6 text-sm items-center">
            <Button
              data-name=""
              type="button"
              name="Add as Booking Manager"
              onClick={handleClick}
              className="h-7 border border-customBlue text-customBlue rounded px-2 font-medium"
            />
            <Button
              data-name=""
              type="button"
              name="Delete Advisor"
              onClick={handleClick}
              className="h-7 bg-customRed text-customWhite rounded px-2 font-medium shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenter;
