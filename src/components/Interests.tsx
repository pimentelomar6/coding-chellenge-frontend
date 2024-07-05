import Image from "next/image";

import styles from "../app/ui/interests.module.css";

const images = [
  {
    id: 1,
    href: "/img_1.jpg",
    category: "TV Series",
    width: 319,
    height: 219,
  },
  {
    id: 2,
    href: "/img_2.jpg",
    category: "TV Series",
    width: 319,
    height: 219,
  },
  {
    id: 3,
    href: "/img_3.jpg",
    category: "TV Series",
    width: 319,
    height: 219,
  },
  {
    id: 4,
    href: "/img_4.jpg",
    category: "Sports",
    width: 319,
    height: 219,
  },
  {
    id: 5,
    href: "/img_5.jpg",
    category: "Sports",
    width: 319,
    height: 219,
  },
  {
    id: 6,
    href: "/img_6.jpg",
    category: "Sports",
    width: 319,
    height: 219,
  },
];

export default function Interests() {
  const tvSeries = images.filter((image) => image.category == "TV Series");
  const sports = images.filter((image) => image.category == "Sports");

  return (
    <div className={styles.interests__container}>
      <h3>TV y Series</h3>
      <div className={styles.photos}>
        {tvSeries.map((serie) => (
          <Image
            className={styles.img}
            key={serie.id}
            src={serie.href}
            alt={serie.category}
            width={serie.width}
            height={serie.height}
          />
        ))}
      </div>

      <h3>Música</h3>
      <div className={styles.photos}>
        {sports.map((sport) => (
          <Image
            className={styles.img}
            key={sport.id}
            src={sport.href}
            alt={sport.category}
            width={sport.width}
            height={sport.height}
          />
        ))}
      </div>
    </div>
  );
}
