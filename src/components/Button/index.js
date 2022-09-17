import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.Module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const pops = {
        onClick,
        ...passProps,
    };

    // Xóa sự kiện lắng nghe của nút btn khi díabled
    if(disabled){
       Object.keys(pops).forEach((key) =>{
            if(key.startsWith('on') && typeof pops[key] =='function'){
                delete pops[key];
            }
       })
    }


    if (to) {
        pops.to = to;
        Comp = Link;
    } else if (href) {
        pops.href = href;
        Comp = 'a';
    }
    const classes = cx('wrappert', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });
    return (
        <div>
            <Comp className={classes} {...pops}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </div>
    );
}

export default Button;
