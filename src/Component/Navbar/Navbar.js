import styles from './navbar.module.css';
//logo
import logo from '../../Files/images/album.png';

export default function Navbar(){
    return(
        <>
        <div className={styles.navbar}>
            {/* name and logo of photofolio */}
            <img className={styles.logo} 
            src={logo} alt="logo" />
            <span>PhotoAlbum</span>
        </div>
        </>
    )
}