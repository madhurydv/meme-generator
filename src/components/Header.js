export default function Header() {
    return (
        <header className="header">
            <img 
                alt=""
                src={require('../images/memeLogo.png')}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Cuz Memes Matter</h4>
        </header>
    )
}