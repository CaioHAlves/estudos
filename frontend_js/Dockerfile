# Imagem de Origem
FROM node:14

# #Instalando o nano
RUN apt-get update && apt-get install nano
RUN apt-get clean

# Criando diretorio onde ficara a aplciação dentro do container.
RUN mkdir /usr/src/frontend_app
#Acessando a pasta criada
WORKDIR /usr/src/frontend_app
#Copiando a aplicação para dentro da pasta.
COPY . .
#Instalando as dependencias.
RUN npm install
#Remodenvo o build caso já exista.
RUN rm -rf build
#Criando ambiente de produção.
RUN npm run build
#Iniciando a aplicação.
CMD ["node", "server.js"]