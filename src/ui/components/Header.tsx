import '../../assets/scss/components/Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">My Portfolio</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};