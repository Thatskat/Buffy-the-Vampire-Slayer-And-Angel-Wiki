import styles from "./Profile.module.scss";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ data, typeLink }) => {
  return (
    <div className={styles.profileCard}>
      <Link href={`/crew/${typeLink}/${data._id}`} title={data.name}>
        <div className={styles.image}>
            <Image
              className={styles.nextImage}
              src={data.profilePicture}
              fill={true}
              alt={data.name}
              loading="lazy"
            />
        </div>
        <div className={styles.info}>
          <p className="bold">{data.name}</p>
         <p className="smallText">{data.characterPlayed && data.characterPlayed[0]}</p> 
        </div>
      </Link>
    </div>
  );
};

export default Profile;
