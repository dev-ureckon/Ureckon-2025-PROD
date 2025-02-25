import { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { ArrowUp, ArrowRight, ArrowDown, ArrowLeft } from "lucide-react";
import { generateMaze, solve } from "../../lib/mazeUtils";
import PacmanOpen from "../../assets/pacman-open.png";
import PacmanClose from "../../assets/pacman-close.png";
import Ghost from "../../assets/ghost.png";

export default function Maze() {
  const [gameId, setGameId] = useState(1);
  const [status, setStatus] = useState("playing");
  const [size, setSize] = useState(20);
  const [cheatMode, setCheatMode] = useState(false);
  const [userPosition, setUserPosition] = useState([0, 0]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOpacity, setConfettiOpacity] = useState(1);
  const [pacmanOpen, setPacmanOpen] = useState(true);
  const pacAudioRef = useRef(null);
  const winAudioRef = useRef(null);

  const isMobile = window.innerWidth <= 640;
  const unitSize = isMobile ? 16 : 32;

  const maze = useMemo(() => generateMaze(size, size), [size, gameId]);
  const solution = useMemo(() => {
    const s = new Set();
    const solutionPath = solve(maze, userPosition[0], userPosition[1]);
    solutionPath.forEach((path) => {
      const [x, y] = path;
      s.add(`${x}-${y}`);
    });
    return s;
  }, [size, userPosition[0], userPosition[1], gameId]);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;
    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
      setShowConfetti(true);
      setTimeout(() => {
        setConfettiOpacity(0);
        setTimeout(() => setShowConfetti(false), 1000);
      }, 8000);
    }
  }, [userPosition[0], userPosition[1]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacmanOpen((prev) => !prev);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (status === "playing") {
      pacAudioRef.current.play();
    } else {
      pacAudioRef.current.pause();
      pacAudioRef.current.currentTime = 0;
    }
  }, [status]);

  useEffect(() => {
    const playAudio = () => {
      if (status === "playing") {
        pacAudioRef.current.play();
      }
    };
    window.addEventListener("load", playAudio);
    window.addEventListener("click", playAudio);
    window.addEventListener("keydown", playAudio);
    return () => {
      window.removeEventListener("load", playAudio);
      window.removeEventListener("click", playAudio);
      window.removeEventListener("keydown", playAudio);
    };
  }, [status]);

  useEffect(() => {
    if (showConfetti) {
      winAudioRef.current.play();
    }
  }, [showConfetti]);

  useEffect(() => {
    pacAudioRef.current.volume = 0.2;
    winAudioRef.current.volume = 0.3;
  }, []);

  const makeClassName = (i, j) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) arr.push("border-t-4 border-purple-700");
    if (maze[i][j][1] === 0) arr.push("border-r-4 border-purple-700");
    if (maze[i][j][2] === 0) arr.push("border-b-4 border-purple-700");
    if (maze[i][j][3] === 0) arr.push("border-l-4 border-purple-700");
    if (i === rows - 1 && j === cols - 1)
      arr.push("relative");
    if (cheatMode && solution.has(`${i}-${j}`))
      arr.push("bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50");
    return arr.join(" ");
  };

  const handleMove = (e) => {
    e.preventDefault();
    if (status !== "playing") return;
    const key = e.code;
    const [i, j] = userPosition;
    if ((key === "ArrowUp" || key === "KeyW") && maze[i][j][0] === 1)
      setUserPosition([i - 1, j]);
    if ((key === "ArrowRight" || key === "KeyD") && maze[i][j][1] === 1)
      setUserPosition([i, j + 1]);
    if ((key === "ArrowDown" || key === "KeyS") && maze[i][j][2] === 1)
      setUserPosition([i + 1, j]);
    if ((key === "ArrowLeft" || key === "KeyA") && maze[i][j][3] === 1)
      setUserPosition([i, j - 1]);
  };

  const handleUpdateSettings = () => {
    setUserPosition([0, 0]);
    setStatus("playing");
    setGameId(gameId + 1);
    setShowConfetti(false);
    setConfettiOpacity(1);
  };

  const handleJoystickMove = (direction) => {
    if (status !== "playing") return;
    const [i, j] = userPosition;
    if (direction === "up" && maze[i][j][0] === 1) setUserPosition([i - 1, j]);
    if (direction === "right" && maze[i][j][1] === 1)
      setUserPosition([i, j + 1]);
    if (direction === "down" && maze[i][j][2] === 1)
      setUserPosition([i + 1, j]);
    if (direction === "left" && maze[i][j][3] === 1)
      setUserPosition([i, j - 1]);
  };

  return (
    <div
      className="App flex flex-col items-center h-full focus:outline-none"
      onKeyDown={handleMove}
      tabIndex={-1}
    >
      <audio ref={pacAudioRef} src="/pac.mp3" loop />
      <audio ref={winAudioRef} src="/win.mp3" />
      {showConfetti && <Confetti opacity={confettiOpacity} />}
      <div className="relative">
        <table id="maze" className="mt-4 border-collapse">
          <tbody>
            {maze.map((row, i) => (
              <tr key={`row-${i}`}>
                {row.map((cell, j) => (
                  <td
                    key={`cell-${i}-${j}`}
                    className={`${makeClassName(i, j)} w-4 h-4 sm:w-8 sm:h-8`}
                  >
                    {i === maze.length - 1 && j === maze[0].length - 1 && status !== "won" && (
                      <img src={Ghost} alt="Ghost" className="absolute inset-0 w-full h-full" />
                    )}
                    <div className="h-full w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <motion.div
          className="absolute w-4 h-4 sm:w-8 sm:h-8"
          animate={{
            top: userPosition[0] * unitSize + 16,
            left: userPosition[1] * unitSize,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
        >
          <img src={pacmanOpen ? PacmanOpen : PacmanClose} alt="Pacman" className="w-full h-full" />
        </motion.div>
      </div>

      {status !== "playing" && (
        <div
          className="info mt-5 w-full bg-gray-800 p-1 text-lg text-green-500 hover:bg-gray-700 hover:text-green-300 transition-colors duration-300"
          onClick={handleUpdateSettings}
        >
          <p className="text-center">click here to play again</p>
        </div>
      )}

      <div className="joystick mt-5 flex justify-center sm:hidden">
        <div className="grid grid-cols-3">
          <div></div>
          <button
            className="w-16 h-16 bg-amber-500 rounded-full shadow-lg shadow-amber-700/50 hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center"
            onClick={() => handleJoystickMove("up")}
          >
            <ArrowUp />
          </button>
          <div></div>
          <button
            className="w-16 h-16 bg-blue-500 rounded-full shadow-lg shadow-blue-700/50 hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
            onClick={() => handleJoystickMove("left")}
          >
            <ArrowLeft />
          </button>
          <div></div>
          <button
            className="w-16 h-16 bg-red-500 rounded-full shadow-lg shadow-red-700/50 hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
            onClick={() => handleJoystickMove("right")}
          >
            <ArrowRight />
          </button>
          <div></div>
          <button
            className="w-16 h-16 bg-green-500 rounded-full shadow-lg shadow-green-700/50 hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
            onClick={() => handleJoystickMove("down")}
          >
            <ArrowDown />
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
}
