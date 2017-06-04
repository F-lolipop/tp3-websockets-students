// @flow
import { ADD } from '../../reducers/tweets';
import TweetChannel from '../../services/tweets';

export const create = (user_id: number, message: string) => { /* FIXME */ };
export const add = (id: number, user_id: number, message: string) => ({ type: ADD, id, user_id, message });