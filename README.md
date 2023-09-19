# AKS-Jenkins
# My Node.js App Deployment

This repository contains the source code and Jenkinsfile for deploying a Node.js application to Azure Kubernetes Service (AKS) via Azure Container Registry (ACR).

## Prerequisites

Before you can use this repository to deploy your Node.js app, ensure you have the following prerequisites:

- [Azure account](https://azure.com)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Docker](https://www.docker.com/get-started)
- [Jenkins](https://www.jenkins.io/download/)
- [Jenkins Azure Pipeline Plugin](https://plugins.jenkins.io/azure-pipeline/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Node.js](https://nodejs.org/)

## Jenkinsfile 
The Jenkinsfile in this repository defines the CI/CD pipeline. It includes the following stages:

1. Build: Build a Docker image of the Node.js application.

2. Push to ACR: Push the Docker image to your Azure Container Registry (ACR).

3. Deploy to AKS: Deploy the application to your Azure Kubernetes Service (AKS) cluster.
   
