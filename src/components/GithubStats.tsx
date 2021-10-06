import { useEffect, useState } from "react";

interface GithubRepoStats {
  stargazers_count: number;
  forks_count: number;
}

export const GithubStats: React.FunctionComponent = () => {
  const [stats, setStats] = useState<GithubRepoStats>();

  console.log("GithubStats wird gerendert");

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => response.json())
      .then(setStats);
  }, []);

  return (
    <div>
      <h1>Github</h1>
      <p>Stars: {stats?.stargazers_count}</p>
      <p>Forks: {stats?.forks_count}</p>
    </div>
  );
};
