import { MobileMenuProps } from '../Header';
import styles from './HamburgerBtn.module.css';

export default function HamburgerBtn(props:MobileMenuProps) {
    const {isMobileOpen, toggleMobileMenu} = props;

    const getActiveStyle = () => {
        return isMobileOpen ? styles["is-open"] : "";
    }

    return (
        <button onClick={toggleMobileMenu} 
            className={`z-[100] sm:hidden relative w-[35px] appearance-none bg-none outline-none border-none ${styles.hamburger} ${getActiveStyle()}`}>
            <div className={`${styles.bar}`}></div>
        </button>
    )
}
