import farmerData from '../../helpers/data/farmerData';
import './farmerList.scss';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      console.error('farmerArray from farmer list', farmers);
    })
    .catch((error) => console.error('shit broke', error));
};

export default { buildFarmers };
