type Jugada = "piedra" | "papel" | "tijera";
type Game = { myPlay: Jugada; computerPlay: Jugada };
type Result = "win" | "lose";

export const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: {
      previousGames: { won: [], lost: [] },
    },
  },
  listeners: [],

  init() {
    const localData = JSON.parse(localStorage.getItem("saved-plays"));
    if (!localData) {
      return;
    } else {
      state.setState(localData);
    }
  },
  getState() {
    const games = state.data;
    return games;
  },
  setState(newState: any) {
    this.data = newState;
    localStorage.setItem("saved-plays", JSON.stringify(newState));
    for (const cb of state.listeners) {
      cb();
    }
  },
  setMove(move: Jugada) {
    const currentState = state.getState().currentGame;
    currentState.myPlay = move;
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
      currentState.computerPlay = "piedra";
    } else if (randomNumber == 2) {
      currentState.computerPlay = "papel";
    } else {
      currentState.computerPlay = "tijera";
    }
  },
  pushToHistory(play: Game, result: Result) {
    const currentState = state.getState();
    if (result == "win") {
      currentState.history.previousGames.won.push(play);
    } else {
      currentState.history.previousGames.lost.push(play);
    }

    state.setState(currentState);
  },
  whoWins(myPlay, computerPlay) {
    if (myPlay == computerPlay) {
      return 2;
    }
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
    const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";

    const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras].includes(true);

    const perdiConPiedra = myPlay == "piedra" && computerPlay == "papel";
    const perdiConPapel = myPlay == "papel" && computerPlay == "tijera";
    const perdiConTijeras = myPlay == "tijera" && computerPlay == "piedra";

    const perdi = [perdiConPapel, perdiConPiedra, perdiConTijeras].includes(
      true
    );

    if (gane) {
      state.pushToHistory({ myPlay, computerPlay }, "win");
      return 0;
    }

    if (perdi) {
      state.pushToHistory({ myPlay, computerPlay }, "lose");
      return 1;
    }
  },
  subscribe(callback: (any: any) => any) {
    state.listeners.push(callback);
  },
};