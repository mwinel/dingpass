import { classNames } from '../../utils/classnames';

export default function Button({
    children,
    onClick,
    primary,
    secondary,
    tertiary,
    danger,
    className,
}) {
    return (
        <button
            onClick={onClick}
            className={classNames(
                primary && 'text-white bg-emerald-500 hover:bg-emerald-700',
                secondary && 'text-white bg-orange-500 hover:bg-orange-700',
                tertiary && 'bg-gray-50 hover:bg-gray-100',
                danger && 'text-white bg-red-500 hover:bg-red-700 ',
                className
            )}
        >
            <span className="z-1">{children}</span>
        </button>
    );
}
