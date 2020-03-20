import 'bootstrap';
import '../styles/main.scss';
import cow from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from './helpers/data/farmerCowData';

const init = () => {
  cow.buildCows();
  farmerList.buildFarmers();
  farmerCowData.getFarmersCows()
    .then((farmerCows) => {
      console.error('farmerCow from farmerCowData', farmerCows);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

init();
