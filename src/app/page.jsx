import Clients from "@/components/Clients";
import contactsection from "@/components/contactsection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Dal pensiero alla forma
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Trasformiamo le idee in progetti reali.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit eveniet magnam? Amet asperiores excepturi mollitia!
      </Testimonials>
      <Services />
      <contactsection />
    </main>
  );
}
