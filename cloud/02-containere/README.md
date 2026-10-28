# 02 – Containere

En container pakker din applikation og dens afhængigheder, så den kører ens overalt.

## Eksempel: Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

## Øvelse

1. Byg imaget: `docker build -t min-app .`
2. Kør det: `docker run -p 3000:3000 min-app`
3. Åbn <http://localhost:3000>
