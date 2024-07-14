import NewsFeed from '../components/NewsFeed';

async function fetchNews() {
  // Mock data for development
  const mockNews = [
    { title: 'News Item 1', content: 'Content for news item 1', date: '2024-07-14' },
    { title: 'News Item 2', content: 'Content for news item 2', date: '2024-07-13' },
    // Add more mock news items as needed
  ];

  // Simulate a delay to mimic network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNews);
    }, 1000);
  });
}

export default async function Home() {
  const news = await fetchNews();

  return (
    <div>
      <h1>Campus News Feed</h1>
      <NewsFeed news={news} />
    </div>
  );
}
