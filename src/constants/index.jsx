import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Progetti",
    links: [
      { title: "progetto 1", href: "/work/progetto1" },
      { title: "progetto 2", href: "/work/progetto2" },
      { title: "progetto 3", href: "/work/progetto3" },
      {
        title: (
          <>
            Vedi tutti <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Tulpa Studio",
    links: [
      { title: "Chi siamo", href: "/chi-siamo" },
      { title: "Studio", href: "/studio" },
      { title: "Rental", href: "/rental" },
      { title: "contacts", href: "/contacts" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
