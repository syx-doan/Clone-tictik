import classNames from 'classnames/bind';
import config from '~/config';


import {HomeIcon, LiveIcon, UserIcon} from '~/components/Icons'
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserIcon/>} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
