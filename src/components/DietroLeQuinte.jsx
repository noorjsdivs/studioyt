import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const DietroLeQuinte = () => {
  return (
    <Section title="Dietro le quinte" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam nisi numquam nemo deserunt eaque expedita, iusto ipsa, consequuntur, animi cupiditate dolor inventore. Magni provident ratione corrupti laborum, cumque dolores.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus cum nesciunt, quisquam aliquid cupiditate, voluptates debitis quasi omnis ullam asperiores eaque molestias? Nostrum inventore iste recusandae laborum id doloribus quibusdam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet reprehenderit vero nemo? Corrupti expedita iusto odit maiores nesciunt nobis. Amet consequatur blanditiis placeat asperiores voluptas possimus. Quam, minima similique?
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950 mb-8">
        Punti di forza
      </h3>
      <List>
        <ListItem title="Area trucco">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor, in fugiat voluptates beatae debitis nisi laboriosam velit.
        </ListItem>
        <ListItem title="Attrezzeria">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ipsam laudantium quas accusantium dolorem! Error unde perspiciatis enim iste corrupti, dignissimos, impedit, laboriosam natus itaque modi architecto temporibus nihil ab.
        </ListItem>
        <ListItem title="Color grading suite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi culpa, iure quas nemo provident, aut delectus consectetur doloribus, laboriosam nobis. Nemo, accusamus placeat! Suscipit quibusdam sint rerum officiis magni?
        </ListItem>
      </List>
    </Section>
  );
};

export default DietroLeQuinte;
