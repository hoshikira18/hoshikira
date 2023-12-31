
// eslint-disable-next-line react/prop-types
export function Button ({ value, href, onClick, size }) {

    const sizeClasses = {
        small: 'py-1 px-3 text-sm',
        medium: 'py-2 px-4 text-base',
        large: 'py-3 px-6 text-lg',
      };

    const sizeClass = sizeClasses[size] || sizeClasses.medium

    let Component = 'button'

    const props = {}

    if(href) {
        Component = 'a'
        props.href = href
    }

    if (onClick) {
        props.onClick = onClick
    }

    return (
        <Component {...props} className={`${sizeClass} w-full text-center font-quicksand font-bold bg-[#121212] hover:bg-primary hover:text-black border-[4px] border-primary text-primary transition-all`}>
            {value}
        </Component>
    )
}