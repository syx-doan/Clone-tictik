import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Poper.Module.scss'

const cx = classNames.bind(styles)


function Wapper({children,className}) {
    return <div className={cx('wapper',className)}>
        {children}
    </div>
}
Wapper.propTypes ={
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Wapper;