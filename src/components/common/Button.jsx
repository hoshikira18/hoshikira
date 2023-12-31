
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
        <div className=" w-full p-[4px] bg-transparent bg-gradient-to-r from-blue-200 to-primary">
            <Component {...props} className={`${sizeClass} block w-full text-center font-quicksand font-bold bg-[#121212] hover:bg-primary hover:text-black text-primary transition-all`}>
                {value}
            </Component>
        </div>
        
    )
}