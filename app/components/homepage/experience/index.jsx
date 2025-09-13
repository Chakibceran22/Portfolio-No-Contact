// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex justify-center items-start">
            <div className="h-[80%] w-[80%] max-w-lg">
              <AnimationLottie height animationPath={experience} />
            </div>
          </div>
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1a1443] to-[#16f2b3] hidden lg:block"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {
              experiences.map((experience, index) => (
                <div key={experience.id} className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'lg:flex-row lg:justify-start' 
                    : 'lg:flex-row-reverse lg:justify-start'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#16f2b3] rounded-full border-4 border-[#1a1443] z-10 hidden lg:block"></div>
                  
                  {/* Connecting line to card */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#16f2b3] to-transparent hidden lg:block ${
                    index % 2 === 0 
                      ? 'right-1/2 mr-2 w-24 rotate-180' 
                      : 'left-1/2 ml-2 w-24'
                  }`}></div>
                  
                  {/* Card container */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 
                      ? 'lg:pr-8' 
                      : 'lg:pl-8'
                  }`}>
                    <GlowCard identifier={`experience-${experience.id}`}>
                      <div className="p-2 sm:p-3 relative">
                        <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {experience.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-4 sm:gap-x-8 px-2 sm:px-3 py-3 sm:py-5">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={24} className="sm:w-9 sm:h-9" />
                          </div>
                          <div>
                            <p className="text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 font-medium uppercase">
                              {experience.title}
                            </p>
                            <p className="text-xs sm:text-sm lg:text-base">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;