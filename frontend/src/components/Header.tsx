type HeaderProps = {
    text: string
}

const Header = ({ text }: HeaderProps): React.JSX.Element => {
    return <div className="text-white text-lg font-bold uppercase">
        {text}
    </div>
}

export default Header;