// next.config.mjs
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import nextI18NextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: nextI18NextConfig.i18n,
};

export default nextConfig;