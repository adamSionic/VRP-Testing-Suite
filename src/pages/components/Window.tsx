import { Cutive_Mono, Alumni_Sans } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const CutiveMono      = Cutive_Mono({weight: "400"});
const AlumniSans      = Alumni_Sans({weight: "400"});

export default function Window(props: {
    title: string,
    active: boolean,
    loadedText?: any[],
    loadedContent?: any
}) {

    const { title, active, loadedText, loadedContent } = props;

    return (
        <div className={`${styles.window} ${active ? styles.thirteen : ''}`}>
            <div className={styles.top}>
              <h3 className={AlumniSans.className}>{title}</h3>
            </div>
            <div className={styles.bottom}>
              <div>
                {loadedContent}
              </div>
              <div>
                { loadedText?.map((item, i) => (
                    <>
                        <span className={`${CutiveMono.className} ${styles.logTime}`} style={item.type === "Error" ? {color: "crimson"} : {color: "aquamarine"}}>{item.time}</span>
                        <p key={i} className={`${CutiveMono.className} ${styles.logMessage}`}> {item.message} </p>
                    </>
                ))}
              </div>
            </div>
          </div>
    )
}