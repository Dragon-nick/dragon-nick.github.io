import Image from "../../assets/profile_pic.webp";
import styles from "./ProfileImages.module.scss";

const ProfileImage = () => {
  return (
    <img
      src={Image}
      alt="Profile Image"
      className={styles["ProfileImage"]}
      draggable={false}
    />
  );
};

export default ProfileImage;
