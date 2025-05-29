import React from "react";
import styles from './DownloadButton.module.scss';

const DownloadButton = ({ text }) => {
  return (
    <a
      className={styles.downloadButton}
      href="files/Shpak_Yanina.Resume.pdf"
      download=""
    >
      {text}
    </a>
  );
};

export default DownloadButton;
