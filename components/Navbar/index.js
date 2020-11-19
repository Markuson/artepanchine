import styles from '../../styles/styles.module.css'
import { Instagram as InstagramIcon, MailOutline as MailIcon, Schedule as ScheduleIcon } from '@material-ui/icons';

export default function Navbar() {

    return <div className="uk-visible@m">
        <div data-uk-sticky="sel-target: .nav;  top: .nav; bottom: #sticky-on-scroll-up; cls-inactive:uk-light uk-navbar-transparent; cls-active: whiteNavbar">
            <nav id="nav" className="nav uk-padding-small uk-navbar-container uk-position-top" data-uk-navbar data-uk-scrollspy="cls:uk-animation-slide-top ">
                <div className="uk-navbar-left uk-padding uk-padding-remove-vertical">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#">
                                <ScheduleIcon />
                            </a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li>De Lunes a Viernes de 8 a 20. Sabados de 8 a 14</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-center">
                    <ul className="uk-navbar-nav">
                        <li className="uk-padding-large uk-padding-remove-vertical">
                            <a href="#">Nosotros</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/nosotros/historia">Nuestra historia</a></li>
                                    <li><a href="/nosotros/filosofia">Nuestra filosofía</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="uk-padding-large uk-padding-remove-vertical">
                            <a className="uk-navbar-item uk-logo" href="#top" rel="noopener noreferrer" data-uk-scroll>
                                ARTEPAN LOGO
                            </a>
                        </li>
                        <li className="uk-padding-large uk-padding-remove-vertical">
                            <a href="#">Productos</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/productos/panes">Panes</a></li>
                                    <li><a href="/productos/dulces">Dulces</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right uk-padding uk-padding-remove-vertical">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a target="_blank" href="https://www.instagram.com/artepanchine/" rel="noopener noreferrer">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="/contacto" rel="noopener noreferrer">
                                <MailIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
}
