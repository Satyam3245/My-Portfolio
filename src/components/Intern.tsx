import React from 'react';

interface PastExperienceProps {
  title: string;
  description: string;
  link:string;
  imageTag : string;
  name : string
}

const PastExperience: React.FC<PastExperienceProps> = ({ title, description , link, imageTag , name}) => {
  return (
    <div className="ml-[100px] my-[30px] w-[700px]">
      <div>
        <div className='flex gap-x-2'>
          <div>
            <a href="#">
                <img  className="rounded-[20px] w-[50px] h-[50px]" src={imageTag} alt="Mojo Tech Logo" />
            </a>
          </div>
          <div>
            <div>{name}</div>
            <div className='text-xs font-medium'>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className='text-2xl text-blue-800 hover:underline'>{title}</div>
          <div className='text-gray-600 text-sm'>{description}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PastExperience;
