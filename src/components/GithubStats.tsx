import { useEffect, useState } from "react";

interface GithubRepoStats {
  stargazers_count: number;
  forks_count: number;
}

interface GithubStatsProps {
  repo: string;
}

export const GithubStats: React.FunctionComponent<GithubStatsProps> = ({
  repo,
}) => {
  const [stats, setStats] = useState<GithubRepoStats>();

  console.log("GithubStats wird gerendert");

  useEffect(() => {
    console.log("Effekt wird ausgeführt für " + repo);

    fetch("https://api.github.com/repos/" + repo)
      .then((response) => response.json())
      .then(setStats);

    return () => {
      console.log(repo + " wird nicht mehr gerendert");
      setStats(undefined);
    };
  }, [repo]);

  return (
    <div>
      <h1>Github repo {repo}</h1>
      <p>Stars: {stats?.stargazers_count}</p>
      <p>Forks: {stats?.forks_count}</p>
    </div>
  );
};
