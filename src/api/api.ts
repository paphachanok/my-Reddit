export const API_ROOT = 'https://www.reddit.com';

// : This function fetches posts from a specific subreddit.
export const getSubredditPosts = async (subreddit: any) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post: { data: any; }) => post.data);
};

// : This function fetches a list of subreddits.
export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit: { data: any; }) => subreddit.data);
};

//: This function fetches comments for a specific post.
export const getPostComments = async (permalink: any) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit: { data: any; }) => subreddit.data);
};
