import React from 'react';

const SchedulerHashtags = () => {
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <section className="related-hashtags">
      <h2># 해시태그</h2>
      <TagsInput selectedTags={selectedTags} tags={['카페', '맛집']} />
    </section>
  );
};

const TagsInput = (props) => {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((tag, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title"># {tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              <i className="far fa-times-circle"></i>
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        placeholder="연관 해시태그를 등록하세요!"
      />
    </div>
  );
};

export default SchedulerHashtags;
