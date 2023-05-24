import React from 'react';

const SectionHeader = ({subHeading, heading}) => {
    return (
        <div>
            <div className="text-center md:text-xl md:w-1/3 mx-auto">
        <p className="text-[#D99904] py-2">---{subHeading}---</p>
        <h3 className="md:text-4xl text-2xl uppercase border-y-2 py-4">{heading}</h3>
      </div>
        </div>
    );
};

export default SectionHeader;