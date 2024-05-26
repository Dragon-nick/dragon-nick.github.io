import classNames from "classnames";
import Image from "../../assets/profile_pic.webp";
import styles from "./ProfileImages.module.scss";

const ProfileImage = () => {
  return (
    <img
      src={Image}
      alt="Profile Image"
      className={classNames(
        styles["ProfileImage"],
        "animate__fadeInDown"
      )}
      draggable={false}
    />
  );
};

export default ProfileImage;
