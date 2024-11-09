import './platforms.scss';
import spotify from '/logos/platforms/spotify.svg'
import tidal from '/logos/platforms/tidal.svg'
import appleMusic from '/logos/platforms/appleMusic.svg'
import amazonMusic from '/logos/platforms/amazonMusic.svg'

const Platforms = () => {
    return (
        <>
            <a target='_blank' href='https://open.spotify.com/album/58laM1R3p49VyBQFrubP1G?si=HdxxrCtZQYikKBRPK15apA'><img src={spotify} alt='spotify'/></a>
            <a target='_blank' href='https://tidal.com/browse/album/389987170'><img src={tidal} alt='tidal'/></a>
            <a target='_blank' href='https://music.apple.com/us/album/this-is-an-ep-ep/1771050002'><img src={appleMusic} alt='appleMusic'/></a>
            <a target='_blank' href='https://music.amazon.co.uk/albums/B0DJ3CFYJN'><img src={amazonMusic} alt='amazonMusic'/></a>
        </>
    )
}

export default Platforms;