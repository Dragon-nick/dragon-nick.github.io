import { FaGithub, FaTelegram } from "react-icons/fa6";
import styles from "./Desc.module.scss";
import classNames from "classnames";

const Desc = () => {
  return (
    <div className={styles["Desc"]}>
      <h3 className={styles["Desc__hi"]}>HI THERE! I'M</h3>
      <h1 className={classNames(styles["Desc__name"], "animate__backInRight")}>
        <span>Dragon</span> Nick
      </h1>
      <ul className={styles["Desc__list"]}>
        <li>
          💼 I'm a Junior <span>Web developer</span>
        </li>
        <li>📚 I'm currently learning web development</li>
        <li className={styles["Desc__list__social"]}>
          <a
            href="https://github.com/Dragon-nick"
            target="_blank"
            title="Github Profile"
            aria-label="Github Profile"
            role="button"
          >
            <FaGithub size={"30px"} />
          </a>
          <a
            href="https://t.me/Dragon_nick"
            target="_blank"
            title="Telegram Profile"
            aria-label="Telegram Profile"
            role="button"
          >
            <FaTelegram size={"30px"} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Desc;
