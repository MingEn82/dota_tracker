import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import axios from "axios";
import StatsTable from "./components/statsTable";
import TitleCard from "./components/titleCard";

interface Player {
  account_id: number;
  player_slot: number;
  hero_id: number;
  kills: number;
  deaths: number;
  assists: number;
  last_hits: number;
  denies: number;
  gold_per_min: number;
  xp_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  items: number[];
}

interface Match {
  match_id: number;
  duration: number;
  radiant_win: boolean;
  start_time: number;
  players: Player[];
}

function App() {
  // const BASE_URL = "https://api.opendota.com/api/matches/7887391440";
  // const [matchData, setMatchData] = useState<Match | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // // Function to fetch match stats
  // const getMatchStats = async (): Promise<void> => {
  //   try {
  //     const response = await axios.get<Match>(BASE_URL);
  //     setMatchData(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error("Error fetching match stats:", err);
  //     setError("Failed to fetch match data.");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getMatchStats();
  // }, []);

  return (
    <div className="  w-screen h-screen">
      {/* <Sidebar /> */}
      <>{/* <StatsTable stats={matchData} /> */}</>
      <TitleCard />
    </div>
  );
}

export default App;
