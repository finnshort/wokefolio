import { INIT_PORTFOLIO } from './actionTypes';

export function initPortfolio(portfolio) {
  return {
    'type': INIT_PORTFOLIO,
    'portfolio': portfolio
  };
}
