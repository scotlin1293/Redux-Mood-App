  const INIT_STATE = { face: '¯_(ツ)_/¯' };

const faceReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SAD':
      return { ...state, face: `(ᵟຶ︵ ᵟຶ)` };
    case 'HAPPY':
      return { ...state, face: `\(ᵔᵕᵔ)/` };
    case 'ANGRY':
      return { ...state, face: `(╬ ಠ益ಠ)` };
    case 'CONFUSED':
      return { ...state, face: `(⊙.☉)7` };

    default:
      return state;
  }
};

const store = Redux.createStore(faceReducer);