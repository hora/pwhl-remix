import { TableCell } from "../Table/TableCell";
import { TeamNameTableCell } from "../Table/TeamNameTableCell";
import type { FinalGame, GameStats, LiveGame } from "../types";
import { LiveGameSummaryTable } from "./LiveGameSummaryTable";

type GameSummaryTableProps = {
  readonly game: LiveGame | FinalGame;
  readonly gameStats: GameStats;
};

export const GameSummaryTable = ({
  game,
  gameStats,
}: GameSummaryTableProps) => {
  if (game.gameState === "Live") {
    return <LiveGameSummaryTable game={game} gameStats={gameStats} />;
  }

  return (
    <table className="my-5 min-w-full border border-pwhl-purple-50 text-center md:w-80 md:min-w-min lg:w-96 dark:border-pwhl-light-purple-50">
      <thead className="bg-pwhl-purple-50 font-bold text-white dark:bg-pwhl-light-purple-50 ">
        <tr>
          <TableCell>Team</TableCell>
          {gameStats.periods.map((p) => (
            <TableCell key={p.num}>{p.ordinalNum}</TableCell>
          ))}
          <TableCell>T</TableCell>
        </tr>
      </thead>
      <tbody>
        <tr className="text-black dark:text-neutral-50">
          <TeamNameTableCell
            shotsOnGoal={gameStats.visitingTeam.sog}
            team={game.visitingTeam}
          />
          {gameStats.periods.map((p) => (
            <TableCell key={[p.num, game.visitingTeam.id].join("")}>
              {p.visitorGoals}
            </TableCell>
          ))}
          <TableCell className="font-bold">
            {gameStats.visitingTeam.score}
          </TableCell>
        </tr>
        <tr className="text-black dark:text-neutral-50">
          <TeamNameTableCell
            shotsOnGoal={gameStats.homeTeam.sog}
            team={game.homeTeam}
          />
          {gameStats.periods.map((p) => (
            <TableCell key={[p.num, game.homeTeam.id].join("")}>
              {p.homeGoals}
            </TableCell>
          ))}
          <TableCell className="font-bold">
            {gameStats.homeTeam.score}
          </TableCell>
        </tr>
      </tbody>
    </table>
  );
};
