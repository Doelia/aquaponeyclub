npm run build

cd build

 npm ci --omit="dev"

export NODE_ENV=production
export PORT=3334
export APP_KEY=eYmNeEQWelpKUeHcs3AKT_G5hBLR4bzK
export LOG_LEVEL=info
export HOST=0.0.0.0
export SESSION_DRIVER=cookie
export DATABASE_URL=postgres://postgres@localhost:5454/aquaponey
node bin/server.js
