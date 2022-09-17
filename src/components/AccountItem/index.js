import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.Module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1626970482299906.jpeg?x-expires=1663567200&x-signature=Qphh%2FGGziiYHmx04cyS2gLbo90k%3D"
                alt="Syx nEkk"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Syx doan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>syx.doan</span>
            </div>
        </div>
    );
}

export default AccountItem;
