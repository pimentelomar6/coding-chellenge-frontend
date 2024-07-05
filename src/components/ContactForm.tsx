"use client";

import { userSchema } from "@/validations/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../app/ui/form.module.css";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const [sendSucces, setSendSucces] = useState(false);

  return (
    <div className={styles.form__container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();

          setSendSucces(true);

          setTimeout(() => {
            setSendSucces(false);
          }, 3000);
        })}
      >
        <label htmlFor="name">Nombre:</label>
        <input
          className={styles.input__text}
          type="text"
          id="name"
          placeholder="Jean James"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className={styles.error}>{errors.name?.message}</p>
        )}
        <label htmlFor="email">Correo:</label>
        <input
          className={styles.input__text}
          type="email"
          id="email"
          placeholder="jean_james@gmail.com"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className={styles.error}>{errors.email?.message}</p>
        )}
        <label htmlFor="message">Mensaje:</label>
        <textarea
          placeholder="Hola, es un placer saludarte . . ."
          className={styles.message__input}
          id="message"
          {...register("message")}
        ></textarea>
        {errors.message?.message && (
          <p className={styles.error}>{errors.message?.message}</p>
        )}
        <button className={styles.form__btn} type="submit">
          Enviar
        </button>
      </form>

      {sendSucces && (
        <div className={styles.msg__notification}>
          <p className={styles.msg__notification__text}>
            Mensaje enviado exitosamente
          </p>
        </div>
      )}
    </div>
  );
}
