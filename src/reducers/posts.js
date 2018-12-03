import { FETCH_POSTS, FETCH_POST } from '../actions/posts';

export default function reducer(state = [], { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return payload;
    case FETCH_POST:
      return [payload];
    default:
      return state;
  }
}
