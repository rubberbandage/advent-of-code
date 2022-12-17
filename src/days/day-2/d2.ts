import {useEffect, useState} from "react";

type Move = "ROCK" | "PAPER" | "SCISSORS"
type Result = "DRAW" | "WIN" | "LOSE"
type PvP = [Move, Move];
type PvM = [Move, Result];

const winOrder: Move[] = ['ROCK', 'SCISSORS', 'PAPER'];

const scores: { [key in Move]: number } = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3
}

const result: { [key in Result]: number } = {
    WIN: 6,
    DRAW: 3,
    LOSE: 0
}

function parseInput(input: string, predict: true): PvM[];
function parseInput(input: string, predict: false): PvP[];
function parseInput(input: string, predict: boolean = false): PvP[] | PvM[] {
    const lines = input.split(/\n/).flatMap(inputSplit)
    return predict ? lines.map(mapPredictions) : lines.map(mapPlays);
}

const player1Input: { [key: string]: Move } = {
    "A": "ROCK",
    "B": "PAPER",
    "C": "SCISSORS",
}

const player2Input: { [key: string]: Move } = {
    "X": "ROCK",
    "Y": "PAPER",
    "Z": "SCISSORS",
}

const player2Outcomes: { [key: string]: Result } = {
    "X": "LOSE",
    "Y": "DRAW",
    "Z": "WIN",
}

const mapPlays = (x: string): PvP => {
    const [p1, p2] = x.split(' ')
    const player1 = player1Input[p1]
    const player2 = player2Input[p2]
    return [player1, player2]
}

const mapPredictions = (x: string): PvM => {
    const [p1, o] = x.split(' ')
    const player1 = player1Input[p1]
    const outcome = player2Outcomes[o]
    return [player1, outcome]
}

const inputSplit = (load: string): string[] => load.split('\n')

const getMoveScore = (playerMove: Move): number => scores[playerMove];
const getGameScore = (gameResult: Result): number => result[gameResult];
const getGameResult = (player1: Move, player2: Move): Result => {
    if (player1 === player2) {
        return "DRAW";
    } else {
        const d = (winOrder.findIndex((s) => s === player1) + 1) % 3;
        return (winOrder[d] === player2) ? "LOSE" : "WIN";
    }
}

const getPlayPrediction = (player1: Move, player2: Result): Move => {
    if (player2 === "DRAW") {
        return player1;
    } else {
        const playIndex = (winOrder.findIndex((s) => s === player1));
        const rotations = player2 === "LOSE" ? 1 : 2
        return winOrder[(playIndex + rotations) % 3]
    }
}

const scorePart1 = (prev: number, [player1, player2]: PvP): number => {
    const gameResult = getGameResult(player1, player2)

    const gameScore = getGameScore(gameResult)
    const moveScore = getMoveScore(player2)
    return gameScore + moveScore + prev
}

const scorePart2 = (prev: number, [player1, outcome]: PvM): number => {
    const player2PredictedMove = getPlayPrediction(player1, outcome)
    const gameResult = getGameResult(player1 as Move, player2PredictedMove)

    const gameScore = getGameScore(gameResult)
    const moveScore = getMoveScore(player2PredictedMove)
    return gameScore + moveScore + prev
};

const useDay2 = (initialValue: string) => {
    const [strategyGuide, setStrategyGuide] = useState<string>(initialValue);
    const [totalScore, setTotalScore] = useState<number>();
    const [predictionScore, setPredictionScore] = useState<number>();

    useEffect(() => {
        const moveBased = parseInput(strategyGuide, false).reduce(scorePart1, 0)
        const outcomeBased = parseInput(strategyGuide, true).reduce(scorePart2, 0)

        setTotalScore(isNaN(moveBased) ? undefined : moveBased)
        setPredictionScore(isNaN(outcomeBased) ? undefined : outcomeBased)
    }, [strategyGuide])

    return {setStrategyGuide, totalScore, predictionScore}
}

export {useDay2}