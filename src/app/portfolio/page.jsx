import PageIntro from "@/components/PageIntro";
import React from "react";

export const metadata = {
  title: 'Tulpa Studio | Portfolio',
  description: 'Esplora i progetti di Tulpa Studio e scopri cosa sono in grado di realizzare.',
}

const PortfolioPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="I nostri lavori"
        title="Portfolio"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum atque animi eos recusandae explicabo laboriosam. Quo saepe quia ex vero odio, quasi illo possimus explicabo consequuntur molestiae cum, aspernatur corporis?
        </p>
      </PageIntro>
    </>
  );
};

export default PortfolioPage;
