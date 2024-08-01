import React from "react";
import Button from "../../components/Button";

export default function DeletePopup() {
  const handleClick = () => {};
  return (
    <div>
      <div className="border w-[380px] h-[144px] flex flex-col justify-between rounded-[16px] p-[32px] gap-[24px] bg-customWhite">
        <p className="text-[14px] font-[500] leading-[17px] text-center w-[316px] h-[17px] text-customOtp">
          Are you sure, you want to delete the advisor?
        </p>
        <div className="flex w-[316px] h-[39px] justify-between">
          <Button
            data-name=""
            type="button"
            name="Yes, Delete"
            onClick={handleClick}
            className="w-[146px] rounded-[4px] p-[12px] gap-[10px] text-[12px] font-[600] leading-[15px] bg-customRed text-customWhite"
          />
          <Button
            data-name=""
            type="button"
            name="Cancel"
            onClick={handleClick}
            className="w-[146px] rounded-[4px] p-[12px] gap-[10px] text-[12px] font-[600] leading-[15px] bg-customSlate text-customRed"
          />
        </div>
      </div>
    </div>
  );
}
