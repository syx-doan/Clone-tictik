import classNames from "classnames/bind";
import styles from './Poper.Module.scss'

const cx = classNames.bind(styles)


function Wapper({children}) {
    return <div className={cx('wapper')}>
        {children}
    </div>
}

export default Wapper;