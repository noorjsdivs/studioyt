import SetCucina from "@/components/SetCucina";
import DietroLeQuinte from "@/components/DietroLeQuinte";
import MainSet from "@/components/MainSet";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";
import ContactSection from "@/components/ContactSection";

const ProcessPage = () => {
  return (
    <>
      <PageIntro title="Lo studio">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias molestiae quidem tempore necessitatibus inventore esse! Inventore temporibus ex corrupti enim doloribus vero dolorem odio illum, accusantium voluptatibus debitis. Vel, provident?
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <MainSet />
        {/* Build */}
        <SetCucina />
        {/* Deliver */}
        <DietroLeQuinte />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
