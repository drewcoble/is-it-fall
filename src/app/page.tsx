"use client";
import styles from "./page.module.css";
import useFall from "./hooks/useFall";
import fallTheme from "./fallTheme";
import { CircularProgress, ThemeProvider } from "@mui/material";

export default function Home() {
  const { isFall, isLoading } = useFall();
  const fallString = isFall ? "YES" : "NO";
  return (
    <ThemeProvider theme={fallTheme}>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>isitfall.us</h1>
          {isLoading ? (
            <CircularProgress color="primary" />
          ) : (
            <h2>{fallString}</h2>
          )}
        </div>
      </main>
    </ThemeProvider>
  );
}
