import checkIcon from '~/assets/images/check.png';
import arrowDownicon from '~/assets/images/iconDown.png';
import eyeBlockIcon from '~/assets/images/eye-crossed.png';
import eyeIcon from '~/assets/images/eye.png';
import arrowRightLarge from '~/assets/images/arrowRightLarge.png';
import arrowLeftLarge from '~/assets/images/arrowLeftLarge.png';
import heartAtive from '~/assets/images/heartActive.png';
import closeBackgroundBoldIcon from '~/assets/images/closeSearch.png';


export function SearchIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className='pre-nav-design-ico' focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
        </svg>
    )
}

export function HeartIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
        </svg>
    )
}

export function CartIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">

            </path>
        </svg>
    )
}

export function UserIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color} data-var="glyph" style={{ display: 'inline-block' }}>
            <path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"></path>
        </svg>
    )
}

export function MenuIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M21 5.25H3M21 12H3m18 6.75H3">
            </path>
        </svg>
    )
}

export function CloseIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-close-icon" focusable="false" viewBox="0 0 24 24"
            role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
        </svg>
    )
}

export function ArrowRightIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
        </svg>
    )
}

export function OrderIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path>
            <path stroke="currentColor" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path>
        </svg>
    )
}

export function ShopIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path>
            <path stroke="currentColor" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path>
        </svg>

    )
}


export function HelpIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"></path>
            <path stroke="currentColor" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"></path>
        </svg>
    )
}


export function LocationIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img"
            width={width} height={height} fill={color}>
            <path fill="currentColor" d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" ></path>
        </svg>
    );
}

export function TwitterIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg className="social-twitter" width={width} height={height} fill={color} viewBox="0 0 24 24">
            <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z">
            </path>
        </svg>
    )
}


export function FacebookIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg className="social-facebook" width={width} height={height} fill={color} viewBox="0 0 24 24">
            <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path>
        </svg>
    )
}

export function YouTubeIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg className="social-youtube" width={width} height={height} fill={color} viewBox="0 0 24 24">
            <path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z">
            </path>
        </svg>
    )
}

export function IntagramIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg className="social-intagram" width={width} height={height} fill={color} viewBox="0 0 24 24">
            <path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z">
            </path>
        </svg>
    )
}

export function FilterIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M21 8.25H10m-5.25 0H3"></path>
            <path stroke="currentColor" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" ></path>
            <path stroke="currentColor" d="M3 15.75h10.75m5 0H21"></path>
            <path stroke="currentColor" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" ></path>
        </svg>
    )
}

export function DeleteIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img"
            width={width} height={height} fill={color}>
            <path stroke="currentColor" d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"></path>
        </svg>
    )
}

export function CrossIcon({ width = '24px', height = '24px', color = 'none' }) {
    return (
        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width={width} height={height} fill={color}
        >
            <path stroke="currentColor" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
        </svg>
    )
}
export function CheckIcon({ width = '24px', height = '24px', className }) {
    return (
        <img src={checkIcon} alt="check-icon" width={width} height={height} className={className}
        />
    )
}

export function ArrowDownIcon({ width = '24px', height = '24px', className }) {
    return (
        <img src={arrowDownicon} alt="arrow-down-icon" width={width} height={height} className={className}
        />
    )
}

export function EyeBlockIcon({ width = '24px', height = '24px', className, ...props }) {
    return (
        <img src={eyeBlockIcon} alt="arrow-down-icon" width={width} height={height}
            {...props}
            className={className}
        />
    )
}
export function EyeIcon({ width = '24px', height = '24px', className, ...props }) {
    return (
        <img src={eyeIcon} alt="arrow-down-icon" width={width} height={height}
            {...props}
            className={className}
        />
    )
}

export function ArrowLeftIcon({ width = '24px', height = '24px', color, className }) {
    return (
        <svg viewBox="0 0 185.4 300"
            width={width} height={height} fill={color}>
            <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
        </svg>
    )
}

export function ArrowRightBoldIcon({ width = '24px', height = '24px', color, className }) {
    return (
        <svg width={width} height={height} fill={color} viewBox="0 0 185.4 300">
            <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
        </svg>
    )
}


export function ArrowLeftLargeIcon({ width = '24px', height = '24px', className, props }) {
    return (
        <img src={arrowLeftLarge} alt="arrow-icon" width={width} height={height}
            {...props}
            className={className}
        />
    )
}

export function ArrowRightLargeIcon({ width = '24px', height = '24px', className, props }) {
    return (
        <img src={arrowRightLarge} alt="arrow-icon" width={width} height={height}
            {...props}
            className={className}
        />
    )
}


export function HeartActiveIcon({ width = '24px', height = '24px', className, ...props }) {
    return (
        <img src={heartAtive} alt="heart-active-icon" width={width} height={height}
            {...props}
            className={className}
        />
    )
}

export function CloseBackgroundBoldIcon({ width = '24px', height = '24px', className, ...props }) {
    return (
        <img src={closeBackgroundBoldIcon} alt="close-bold-background-icon" width={width} height={height}
            {...props}
            className={className}
        />
    )
}




