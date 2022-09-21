import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErr = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, classNames)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleErr}
        />
    );
});

export default Image;
