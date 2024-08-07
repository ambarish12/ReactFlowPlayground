import React from "react";
import styles from "./EditorWrapper.module.scss";

export const EditorWrapper = ({
  drawArea,
  toolbarArea,
  herobarArea,
  controlsArea,
  minimapArea
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroArea}>{herobarArea}</div>
      <div className={styles.toolArea}>{toolbarArea}</div>
      {controlsArea && (
        <div className={styles.controlsArea}>{controlsArea}</div>
      )}
      {minimapArea && <div className={styles.minimapArea}>{minimapArea}</div>}
      <div className={styles.drawArea}>{drawArea}</div>
    </div>
  );
};
