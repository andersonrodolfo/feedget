import axios from "axios";

import { API_DEV_URL, API_PRD_URL } from '@env';

const { env } = process;
const baseURL = env.NODE_ENV === 'development' ? API_DEV_URL : API_PRD_URL

export const api = axios.create({ baseURL })