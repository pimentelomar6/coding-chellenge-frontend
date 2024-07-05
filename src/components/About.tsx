import styles from "../app/ui/about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <p className={styles.user__about}>
        Soy una persona proactiva, adaptable y con gran capacidad de
        aprendizaje. Me entusiasma trabajar en equipo y colaborar con personas
        de diferentes áreas para lograr objetivos comunes.
      </p>
    </div>
  );
}
