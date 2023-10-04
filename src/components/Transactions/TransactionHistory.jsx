import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const randomHSLA = () => {
    return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`;
  };

  return (
    <table className={css.transactionhistory}>
      <thead>
        <tr>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr style={{ backgroundColor: randomHSLA() }} key={item.id}>
            <td className={css.cell}>{item.type}</td>
            <td className={css.cell}>{item.amount}</td>
            <td className={css.cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
