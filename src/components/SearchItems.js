import react from 'react';

const SearchItems = ({ items }) => {
  return items.map((item, i) => {
    {
      // console.log(item);
    }
    return (
      <li key={i} className="search-item-list">
        <figure>
          <a href="#">
            <img src={item.thumbnail} />
            <span className="search-item-list-transition">
              #{item.hashtag}
              <div className="search-item-list-transition-icon">
                <i className="fas fa-folder-plus"></i>
                <i className="fas fa-share-square"></i>
              </div>
            </span>
          </a>

          <div className="search-item-info">
            <div className="search-item-info-title">
              <i className="fas fa-shuttle-van"></i>
              <figcaption>{item.scheduleTitle}</figcaption>
            </div>

            <div className="search-item-info-btn">
              <i className="fas fa-heart"></i>
              <span>{i}</span>
              <i className="fas fa-eye"></i>
              <span>{i + 10}</span>
            </div>
          </div>
        </figure>
      </li>
    );
  });
};

export default SearchItems;
