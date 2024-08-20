import React from "react";
import styles from './DownloadButton.module.scss';

const DownloadButton = ({ text }) => {
  return (
    <a
      className={styles.downloadButton}
      href="files/Resume.Shpak_Ianina.pdf"
      download=""
    >
      {text}
    </a>
  );
};

export default DownloadButton;
