"use client";

import { useRouter } from "next/navigation";

// Types
import { ShowMoreProps } from "@/types";

// Components
import { CustomButton } from ".";

// Utils
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  // const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);

    // const newPathName = updateSearchParams("limit", `${newLimit}`);

    // router.push(newPathName);
  };

  const handleResetNavigation = () => {
    const newLimit = 10;

    setLimit(newLimit);

    // const newPathName = updateSearchParams("limit", `${newLimit}`);

    // router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <>
          <CustomButton
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
          />
          {pageNumber > 1 && (
            <CustomButton
              title="Show Less"
              btnType="button"
              handleClick={handleResetNavigation}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ShowMore;
