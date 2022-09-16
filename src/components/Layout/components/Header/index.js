import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {

    return <header className={cx('wapper')}>
        <div className={cx('inner')}>
            {/* {logo} */}
            {/* {logo} */}
        </div>
    </header>
}

export default Header;