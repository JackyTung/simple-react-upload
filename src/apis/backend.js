import { ajax } from 'rxjs/ajax';

export const getProfile = ({ userName }) => ajax.getJSON(`https://api.github.com/users/${userName}`);
