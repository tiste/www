"use client";

import React, { useState } from "react";
import axios from "axios";
import { hasErrors } from "@/app/services/has-errors";

function getInitialState(): {
  fullName: string;
  message: string;
  email: string;
  errors: Record<string, string | null>;
} {
  return {
    fullName: "",
    email: "",
    message: "",
    errors: {},
  };
}

export function ContactForm() {
  const [isPristine, setIsPristine] = useState(true);
  const [state, setState] = useState(getInitialState());

  function handleChange(name: string, value: string) {
    if (value.length) {
      state.errors[name] = null;
    } else {
      state.errors[name] = "Ce champ est obligatoire";
    }

    setIsPristine(false);
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    axios
      .post("https://formspree.io/f/mjvjybdl", {
        fullName: state.fullName,
        email: state.email,
        body: state.message,
      })
      .then(() => {
        setIsPristine(true);
        setState(getInitialState());
      });
  }

  return (
    <form>
      <div className="field">
        <label className="label" htmlFor="fullName">
          Quel est votre nom ?
        </label>
        <div className="control">
          <input
            id="fullName"
            className="input"
            type="text"
            name="fullName"
            placeholder="Prénom Nom"
            value={state.fullName}
            onChange={({ target: { value } }) =>
              handleChange("fullName", value)
            }
          />
        </div>
        <p className="help is-danger has-text-weight-bold">
          {state.errors["fullName"]}
        </p>
      </div>

      <div className="field">
        <label className="label" htmlFor="email">
          Quel est votre email ?
        </label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            name="email"
            placeholder="adresse@mail.com"
            value={state.email}
            onChange={({ target: { value } }) => handleChange("email", value)}
          />
        </div>
        <p className="help is-danger has-text-weight-bold">
          {state.errors["email"]}
        </p>
      </div>

      <div className="field">
        <label className="label" htmlFor="message">
          Comment puis-je vous aider ? (Quelles sont vos idées, vos problèmes ?
          Pouvez-vous résumer votre métier principal ?)
        </label>
        <div className="control">
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Votre message"
            rows={4}
            value={state.message}
            onChange={({ target: { value } }) => handleChange("message", value)}
          ></textarea>
        </div>
        <p className="help is-danger has-text-weight-bold">
          {state.errors["message"]}
        </p>
      </div>

      <div className="field">
        <div className="control">
          <button
            className="button is-primary is-rounded"
            onClick={(e) => handleSubmit(e)}
            disabled={isPristine || hasErrors(state.errors)}
          >
            Envoyer mon message
          </button>
        </div>

        <p className="help has-text-weight-bold mt-4">
          Ou <a href="mailto:baptiste.lecocq@gmail.com">contactez-moi</a>{" "}
          traditionnellement par mail.
        </p>
      </div>
    </form>
  );
}
