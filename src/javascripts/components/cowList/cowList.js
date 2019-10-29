import smash from '../../helpers/data/smash';

import './cowList.scss';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      console.log('cow array from cowList', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
