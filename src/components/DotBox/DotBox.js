import styles from "./dotBox.module.css";

const box = [1, 2, 3, 4, 5, 6];

const DotBox = ({ style }) => {
  return (
    <div className={styles.container} style={{ ...style }}>
      {box.map((outerItem) => (
        <div key={outerItem} className={styles.outerBox}>
          {outerItem < 5 &&
            box.map((innerItem) => (
              <div key={innerItem} className={styles.innerBox} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default DotBox;
