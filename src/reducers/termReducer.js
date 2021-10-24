const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_TERM_REQEST':
      return {...state, loading: true};

    case 'LOAD_TERM_SUCCESS':
      return {...state, loading: false, data: payload};

    case 'LOAD_TERM_FAIL':
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};
