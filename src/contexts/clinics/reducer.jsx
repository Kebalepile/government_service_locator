import { HEALTH_FACILITIES, PROVINCES, DISTRICTS } from "../types";

export default function reducer(state, action) {
  switch (action.type) {
    case HEALTH_FACILITIES:
    case PROVINCES:
    case DISTRICTS:
    default:
      return state;
  }
}
