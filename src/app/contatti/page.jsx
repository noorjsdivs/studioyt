import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: 'Tulpa Studio | Contatti',
  description: 'Inizia a collaborare con Tulpa e mettiti subito in contatto con loro!',
}

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contattaci" title="Iniziamo a lavorare insieme">
        <p>Raccontaci il tuo progetto</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />

        </div>
      </Container>
    </>
  );
};

export default ContactPage;
