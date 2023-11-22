import styles from "./page.module.css";
import useFall from "./fall";

export default function Home() {
  const fall = useFall();
  const fallString = fall ? "YES" : "NO";
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>isitfall.us</h1>
        <h2>{fallString}</h2>
      </div>
    </main>
  );
}
