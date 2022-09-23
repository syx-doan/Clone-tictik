import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faQuestionCircle,
    faRightFromBracket,
    faSignIn,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import images from '~/asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import Menu from '~/components/Poper/Menu';
import Image from '~/components/Image';


import config from '~/config/'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Lòng',
        children: {
            title: 'Ngôn Ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
                {
                    type: 'language',
                    code: 'ໄກ່',
                    title: 'ຈອກ or ຈົວ',
                },
                {
                    type: 'language',
                    code: 'き に',
                    title: 'ぬ め ぞ',
                },
                {
                    type: 'language',
                    code: '지읒',
                    title: '쌍비읍 쌍지읒',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Của Tui',
        to: '/fellback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Đó Nha',
    },
];
function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Thay đỏi chọn langgueage
                break;

            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Views',
            to: '/fellback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Option',
            to: '/fellback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Call Back',
            to: '/fellback',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log Out',
            to: '/fellback',
            separate: true,
        },
    ];
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                       
                        <img src={images.logo} alt="Syx nek" />
                    </Link>
                </div>
                {/* search  */}
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Up Load video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>69</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Register</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1626970482299906.jpeg?x-expires=1663567200&x-signature=Qphh%2FGGziiYHmx04cyS2gLbo90k%3D"
                                alt="Syx nEkk"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/41172/62eb6a5ac3504.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
