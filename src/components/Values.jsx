import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Contenuti extra"
        title="Scarica ora la planimetria"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut blanditiis cupiditate laudantium omnis porro incidunt fugiat fugit, reiciendis deleniti aspernatur ipsum eligendi quod repudiandae nobis amet esse quae doloribus.
        </p>
      </SectionIntro>
    </div>
  );
};

export default Values;
