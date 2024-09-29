import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../../redux/SubredditStore';
import './subReddits.css'; // Import your styles
import { AppDispatch } from '../../redux/store';

const SubReddit: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const isLoading = useSelector((state: any) => state.subreddits.isLoading);
  const error = useSelector((state: any) => state.subreddits.error);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <div className="error-message">Error: {error}</div>}
      <div className="subreddit-list">
        {subreddits.map((subreddit: any) => (
          <div key={subreddit.id} className="subreddit-card">
            <img
              src={subreddit.icon_img || 'default-icon.png'} // Fallback for missing icons
              alt={subreddit.display_name}
              className="subreddit-icon"
            />
            <h3 className="subreddit-title">{subreddit.display_name}</h3>
            <a href={`https://www.reddit.com/r/${subreddit.display_name}`} target="_blank" rel="noopener noreferrer">
              Visit Subreddit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubReddit;
