import Icon from "../Icon/Icon";
import styles from "./Icons.module.css";

function Icons(){
    return (
        <div className={styles.icons_container}>
            <Icon
                src={"./images/icons/music.png"}
                text={`1 млн треков`}
                alt={"music"}
            />
            <Icon
                src={"./images/icons/play.png"}
                text={"Решение «Под ключ»"}
                alt={"play"}
            />
            <Icon
                src={"./images/icons/waves.png"}
                text={"Плейлисты с концепцией"}
                alt={"wave"}
            />
        </div>
    )
};

export default Icons;