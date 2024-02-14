import React from "react";
import Button from "../components/Button/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="my-40 flex flex-col items-center justify-center gap-y-4 "
    >
      <h1 className="text-md font-mono text-green">04. Ficou interessado?</h1>
      <h2 className="text-2xl font-semibold text-lightest-slate md:text-4xl">
        Entre em contato
      </h2>
      <p className="px-10 text-center">
        Mande uma mensagem caso você tenha dúvida ou queira mandar um alô. Minha
        caixa de entrada está sempre aberta.
      </p>
      <Button title="Mande um alô" />
    </section>
  );
};

export default Contact;
