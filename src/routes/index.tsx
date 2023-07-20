import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/hero";
import Navbar from "~/components/navbar/navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: "Maquette",
  meta: [
    {
      name: "description",
      content: "HAHA NO DESCRIPTION",
    },
  ],
};
