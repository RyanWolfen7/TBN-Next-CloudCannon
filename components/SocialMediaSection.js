import { footer, company } from '../lib/data';

const SocialMediaSection = ({

}) => {
    const { header } = footer.social_media_section
    const socialMediaList = company.social_media

    return (
        <div className="social-links-section">
            <div className="container">
                <div className="wrapper row">
                    <nav role="navigation" id="block-socialmenu">
                        <h2 id="block-socialmenu-menu">{header}</h2>
                        <ul>
                            {socialMediaList?.map((socialMedia, index) => {
                                const {
                                    name,
                                    disk_image_url: bgImage,
                                    ref_url: href,
                                    in_social_media_section: isHere
                                } = socialMedia
                                if (!isHere) return null
                                
                                return (
                                    <li key={`${name}-${index}`}>
                                        <a style={{ backgroundImage: `url(${bgImage})` }} href={href} target="_blank">{name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaSection
