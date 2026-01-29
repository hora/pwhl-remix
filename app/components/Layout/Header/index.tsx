import { Link, NavLink, useLoaderData } from "@remix-run/react";
import { Button } from "react-aria-components";
import Logo from "~/components/icons/PwhlLogo";
import type { WithBootstrap } from "~/components/types";
import { useEffect } from "react";

const linkClass =
  "text-lg transition-opacity hover:opacity-70 border-b-2 border-transparent hover:border-pwhl-purple-50 dark:hover:border-pwhl-light-purple-50";
const activeLinkClass =
  "text-lg transition-opacity hover:opacity-70 border-b-2 border-pwhl-purple-50 dark:border-pwhl-light-purple-50";

const PlayoffsLink = () => {
  const { playoffsStarted } = useLoaderData<WithBootstrap<unknown>>();

  if (!playoffsStarted) {
    return;
  }

  return (
    <NavLink
      to="/playoffs"
      className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
    >
      Playoffs
    </NavLink>
  );
};

const SUN_EMOJI = "☀";
const MOON_EMOJI = "🌙";

export const Header = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("theme" in localStorage)) {
      localStorage.setItem(
        "theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }

    document.documentElement.classList.toggle(
      "dark",
      localStorage.getItem("theme") === "dark"
    );
  });

  const onToggleTheme = () => {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.toggle(
      "dark",
      localStorage.getItem("theme") === "dark"
    );
  };

  return (
    <header className="container mx-auto flex items-center justify-between px-4">
      <Link to="/" aria-label="Home">
        <Logo
          width={96}
          height={96}
          fill={
            localStorage.getItem("theme") === "dark" ? "#845bd4" : "#33058d"
          }
        />
      </Link>
      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
        >
          Home
        </NavLink>
        <NavLink
          to="/standings"
          className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
        >
          Standings
        </NavLink>
        <PlayoffsLink />
        <Button onPress={onToggleTheme}>
          {localStorage.getItem("theme") === "dark" ? SUN_EMOJI : MOON_EMOJI}
        </Button>
      </nav>
    </header>
  );
};
