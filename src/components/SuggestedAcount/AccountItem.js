import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import AccountPreview from './AccountPreview';
import styles from './SugestedAcount.module.scss';
import { Wapper as PopperWrapper } from '~/components/Poper';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreviews = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy 
            offset={[-20,100]}
            interactive 
            placement="bottom" 
            delay={[800, 0]} 
            render={renderPreviews}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/41172/62eb6a5ac3504.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Syx doan </strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Syxdz</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
