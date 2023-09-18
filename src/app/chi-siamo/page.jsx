import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import ContactSection from "@/components/ContactSection";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Chi siamo" title="Dal pensiero alla forma">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique mollitia quisquam molestiae eos ullam, exercitationem iure tenetur ut! Quas porro nulla dolores. Magnam eligendi fugit, voluptatum cupiditate esse amet.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique maxime, sint eaque nobis porro atque temporibus at cumque ab rem! Suscipit animi maiores libero sapiente, saepe quibusdam facere nulla doloribus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis exercitationem reiciendis molestias, aliquid quaerat recusandae molestiae deserunt est, aperiam porro nostrum obcaecati consectetur nobis. A ratione architecto doloremque neque!
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Macchine professionali" />
          <StatListItem value="140m²" label="Superficie stage" />
          <StatListItem value="20" label="luci" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
