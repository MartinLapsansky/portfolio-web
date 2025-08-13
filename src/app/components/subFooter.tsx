import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

const subFooter: React.FC = () => {
  return (
      <div className="flex flex-row items-center gap-2 w-full justify-center bg-[#748CAB] p-2">
          <FontAwesomeIcon icon={faCopyright} color="white"/>
          <p className="text-white">Created by LapsoDev</p>
      </div>
  );
};

export default subFooter;