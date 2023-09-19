import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Modulo di contatto
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nome" name="nome" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Compagnia"
            name="Compagnia"
            autoComplete="Compagnia"
          />
          <TextInput label="Telefono" type="tel" name="Telefono" autoComplete="tel" />
          <TextInput label="Messaggio" name="Messaggio" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="€0 – €1K" name="budget" value="1" />
              <RadioInput label="€1 – €5K" name="budget" value="5" />
              <RadioInput label="€5 – €10K" name="budget" value="10" />
              <RadioInput label="Più di €10K" name="budget" value="15" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Iniziamo a lavorare insieme
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
