FROM ubuntu:16.04

# UBUNTU UPGRADE
RUN apt-get update --fix-missing
RUN apt-get -y upgrade
RUN apt-get -y update

# GENERAL PACKAGES
RUN apt-get -y install nano
RUN apt-get install -y curl
RUN apt-get -y install inetutils-ping

# NODE.JS INSTALLATION
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y update --fix-missing
RUN apt-get install -y nodejs
RUN mkdir /var/node

# MONGO 4.2 APENAS PARA USO VIA TERMINAL
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys D68FA50FEA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org-shell mongodb-org-tools --allow-unauthenticated	

EXPOSE 80
WORKDIR /var/node