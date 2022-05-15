import '../../assets/scss/icon.scss';
import arrowUp from '../../assets/img/icons/arrow-up.svg';
import arrowDown from '../../assets/img/icons/arrow-down.svg';
import search from '../../assets/img/icons/search.svg';
import times from '../../assets/img/icons/times.svg';

const images = {
    arrowUp,
    arrowDown,
    search,
    times
};

const Icon = ({name}) => {
    function getImageByKey(key) {
        return images[key];
    }
    return (
        <div className="icon-container">
        <img
          src={getImageByKey(name)}
          className={name}
          alt="Icon"
        />
      </div> 
    )
}


export default Icon
