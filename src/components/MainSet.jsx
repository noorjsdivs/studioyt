import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const MainSet = () => {
  return (
    <Section title="Main Set" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores unde quibusdam blanditiis asperiores quam numquam quos iste vitae minima consequuntur error, porro totam eligendi, magnam, sapiente in corporis cum!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sunt, quo rem rerum deserunt aperiam est? Asperiores necessitatibus placeat, quis est amet at fuga, rerum rem adipisci tenetur consectetur aspernatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo voluptas, nesciunt unde optio quidem libero ab rem animi reiciendis consectetur vero quis sit quam odit officiis neque placeat exercitationem?
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Quello che offriamo
      </h3>
      <TagList className="mt-4">
        <TagListItem>Ampi spazi</TagListItem>
        <TagListItem>Live</TagListItem>
      </TagList>
    </Section>
  );
};

export default MainSet;
