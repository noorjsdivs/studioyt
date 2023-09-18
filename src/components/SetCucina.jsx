import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const SetCucina = () => {
  return (
    <Section title="Set Cucina" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto culpa deserunt eos, dolores vel deleniti omnis dolorum dolorem, blanditiis soluta est possimus rem asperiores delectus autem placeat enim quia neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, at neque facere, nobis alias beatae necessitatibus quae officia, placeat molestias ut quam reiciendis. Ab veritatis consectetur labore? Alias, deserunt consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ab quaerat explicabo nemo, eos, ut earum aliquam molestiae modi aut ipsum laborum? Eum corrupti aperiam vitae. Tempora nobis consequuntur velit?
        </p>
      </div>
      <Blockquote
        author={{ name: "Michelangelo", role: "Proprietario" }}
        className="mt-12"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum enim cupiditate molestiae, voluptatem debitis unde omnis exercitationem ipsam ad reiciendis nisi! Sint quaerat quis laboriosam aliquam adipisci nam numquam.
      </Blockquote>
    </Section>
  );
};

export default SetCucina;
