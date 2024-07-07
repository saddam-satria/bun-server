import { join } from 'path';

export const PORT = process.env.PORT;
export const DEBUG = process.env.DEBUG === 'true';
export const BASE_FILE = join(__dirname, '..', '..');
export const SECRET_KEY = process.env.SECRET_KEY;
