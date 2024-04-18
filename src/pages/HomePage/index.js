import { useContext } from 'react';
import classnames from 'classnames/bind';

import ListMenu from '~/components/ListMenu';
import Banner from '~/components/Banner';
import Media from '~/components/Media';

import { MENU_BOTTOM_CONTEXT } from './HomePageContext';

import BannerImg from '~/assets/images/Banner-nike-just-do-it.jpg';
import BannerImg2 from '~/assets/images/Banner-nike-3.jpg';
import BannerImg3 from '~/assets/images/Banner-nike-2.jpg';
import BannerImg4 from '~/assets/images/Banner-jordan.png';
import Media1 from '~/assets/images/media1.png';
import Media2 from '~/assets/images/media2.png';
import Media_Men from '~/assets/images/media-men.png';
import Media_Women from '~/assets/images/media-women.png';
import Media_kids from '~/assets/images/media-kids.png';

import styles from './HomePage.module.css';
const cx = classnames.bind(styles);

function HomePage() {
    const MENU_BOTTOM = useContext(MENU_BOTTOM_CONTEXT);

    return (
        <div className={cx('content')}>
            <div className={cx('content-item')}>
                <Banner title='Nike Ready Pack' img={{ src: BannerImg }}
                    subtitle='Just in'
                    text='The season is here. Start yours prepared with the best in touch, agility, precision and speed.'
                    button={{ title: 'See All', to: 'products' }}
                />
            </div>
            <div className={cx('content-item')}>
                <h3 className={cx('content-title')}>Just In</h3>
                <Banner title='SABRINA’S LAWS OF THE GAME' img={{ src: BannerImg2 }}
                    text='Sabrina Ionescu’s basketball journey has been nothing short of iconic. From neighborhood pickup games to breakout college star to No. 1 draft pick with her own signature shoe. Now she’s laying down her Laws of the Game, so every hooper can follow in her footsteps. Ready? Let’s go.'
                    button={{ title: 'See All', to: 'shopbygender/Women' }}
                />
            </div>
            <div className={cx('content-item', 'container-fluid', 'px-0')}>
                <h3 className={cx('content-title')}>Featured</h3>
                <div className={cx('row', 'content-media', 'content-media-lg')}>
                    <Media img={{ src: Media1 }}
                        classNameAdd={cx('content-media-item', 'col')}
                        title='Step Up Your Style'
                        subtitle='Nike Tech Hera'
                        to='/shopbybrand/nike'
                        button={{ title: 'See All' }}
                    />
                    <Media img={{ src: Media2 }} classNameAdd={cx('content-media-item', 'col')}
                        subtitle='Dropping on App: 7 Sep'
                        title="Tatum 1 ' Home Team '"
                        href='https://www.nike.com/vn/nike-app'
                        button={{ title: 'Get It First' }}
                    />
                </div>
            </div>
            <div className={cx('content-item')}>
                <h3 className={cx('content-title')}>Gear Up</h3>
                <Banner text='With unreal speed combined with a grip and fit that can keep your feet on the ground at a reality-bending pace, the Kylian Mbappé Mercurial takes fast into unknown dimensions.' img={{ src: BannerImg3 }}
                    subtitle='Unreal Speed'
                    title='KYLIAN MBAPPÉ MERCURIAL'
                    button={{ title: 'See All', to: 'shopbygender/Men' }}
                />
            </div>
            <div className={cx('content-item')}>
                <h3 className={cx('content-title')}>Don't Miss</h3>
                <Banner title='DESERT NEUTRALS' img={{ src: BannerImg4 }}
                    text='Experience the magic of neutrals with utility pants, cropped tees, jackets, and more that bring fun and style to your everyday fits.'
                    subtitle='Jordan Apparel'
                    button={{ title: 'See All', to: '/shopbybrand/Jordan' }}
                />
            </div>
            <div className={cx('content-item', 'container-fluid', 'px-0', 'mb-4')}>
                <h3 className={cx('content-title')}>Featured</h3>
                <div className={cx('row', 'content-media', 'content-media-small')}>
                    <Media img={{ src: Media_Men }}
                        classNameAdd={cx('content-media-item', 'col')}
                        button={{ title: 'Men\'s', className: 'white' }}
                        to='shopbygender/Men'
                    />
                    <Media img={{ src: Media_Women }} classNameAdd={cx('content-media-item', 'col')}
                        button={{ title: 'Women\'s', className: 'white' }}
                        to='shopbygender/Women'
                    />
                    <Media img={{ src: Media_kids }} classNameAdd={cx('content-media-item', 'col')}
                        button={{ title: 'Kids\'s', className: 'white' }}
                        to='shopbygender/kids'
                    />
                </div>
            </div>
            <div className={cx('content-item', 'content-menu', 'mb-4')}>
                <ListMenu data={MENU_BOTTOM} />
            </div>
        </div>
    )
}

export default HomePage;