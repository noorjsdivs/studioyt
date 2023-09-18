import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="La nostra cultura"
        title="Lavoriamo in armonia con il cliente"
        invert
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis, ullam.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Trasparenza" invert>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas inventore provident soluta.
          </GridListItem>
          <GridListItem title="Trasparenza" invert>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas inventore provident soluta.
          </GridListItem>
          <GridListItem title="Trasparenza" invert>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas inventore provident soluta.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
