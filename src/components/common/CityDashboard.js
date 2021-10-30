import MiningActivity from '../dashboard/MiningActivity';
import StackingActivity from '../dashboard/StackingActivity';
import TransactionLog from '../dashboard/TransactionLog';
import NavBackHome from './NavBackHome';
import NavBar from './NavBar';

export default function CityDashboard(props) {
  return (
    <>
      <NavBar city={props.config.cityName} symbol={props.token.symbol} path={props.path} />
      <h3>{props.config.cityName} Dashboard</h3>
      <hr />
      <h3>{props.token.symbol} Mining Activity</h3>
      <MiningActivity contracts={props.contracts} token={props.token} config={props.config} />
      <h3>{props.token.symbol} Stacking Activity</h3>
      <StackingActivity contracts={props.contracts} token={props.token} config={props.config} />
      <p>stacking cycle progress</p>
      <h3>{props.token.symbol} Contract Transactions</h3>
      <TransactionLog contracts={props.contracts} token={props.token} config={props.config} />
      <hr />
      <NavBackHome />
    </>
  );
}
