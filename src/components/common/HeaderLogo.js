import { Link } from '@reach/router';
import { CityCoinLogo } from '../../store/common';
import { AustinCoinLogo } from '../../store/common';
import { MiamiCoinLogo } from '../../store/common';
import { NewYorkCityCoinLogo } from '../../store/common';
import { SanFranciscoCoinLogo } from '../../store/common';

export default function HeaderLogo(props) {
  const path = props.path || '/citycoin-icon-blue-reversed-75x75.png';
  const size = props.size || '75';
  const alt = props.alt || 'Citycoin CC Logo';
  return (
    <div className="dropdown">
      <a
        href="/"
        className="text-dark text-decoration-none dropdown-toggle"
        role="button"
        id="dropdownCities"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={path} width={size} alt={alt} />
      </a>
      <ul
        className="dropdown-menu text-nowrap"
        id="dropdownCitiesMenu"
        aria-labelledby="dropdownCities"
      >
        <li>
          <Link className="dropdown-item link-primary" to="/">
            <img src={CityCoinLogo} alt="CityCoins Logo" className="pe-3 w-25 h-25" />
            Home
          </Link>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <p className="dropdown-item-text fw-bold ps-3 mb-0">Choose a City!</p>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item link-primary" to="/atx">
            <img src={AustinCoinLogo} alt="Austin Logo" className="pe-3 w-25 h-25" />
            Austin
          </Link>
        </li>
        <li>
          <Link className="dropdown-item link-primary" to="/mia">
            <img src={MiamiCoinLogo} alt="Miami Logo" className="pe-3 w-25 h-25" />
            Miami
          </Link>
        </li>
        <li>
          <Link className="dropdown-item link-primary" to="/nyc">
            <img src={NewYorkCityCoinLogo} alt="New York City Logo" className="pe-3 w-25 h-25" />
            New York City
          </Link>
        </li>
        <li>
          <Link className="dropdown-item link-primary" to="/sfo">
            <img src={SanFranciscoCoinLogo} alt="San Francisco Logo" className="pe-3 w-25 h-25" />
            San Francisco
          </Link>
        </li>
      </ul>
    </div>
  );
}
