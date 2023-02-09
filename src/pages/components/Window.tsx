import styles from '@/styles/Home.module.css';
import { Cutive_Mono, Alumni_Sans } from '@next/font/google';
const CutiveMono      = Cutive_Mono({weight: "400"});
const AlumniSans      = Alumni_Sans({weight: "400"});

export default function Window(props: {
    title: string,
    loadedContent?: any
}) {

    const { title } = props;

    return (
        <div className={`${styles.window}`}>
            <div className={styles.top}>
              <h3 className={AlumniSans.className}>{title}</h3>
            </div>
            <div className={styles.bottom}>
              <p className={CutiveMono.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quasi?</p>
            </div>
          </div>
    )
}