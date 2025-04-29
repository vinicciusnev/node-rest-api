# Base da imagem
FROM node:23-slim

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json primeiro (para cache otimizado)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação para dentro do container 
COPY ./src ./src
COPY . .

# Expõe a porta (lembre que é a mesma do seu .env, 8001)
EXPOSE 8001

# Comando para rodar a aplicação
CMD ["npm", "start"]
