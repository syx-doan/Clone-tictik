import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image  from '../Image';
import styles from './AccountItem.Module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/41172/62eb6a5ac3504.jpg"
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
