pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t nodejs-cicd .'
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker stop nodejs-cicd-container || exit 0'
                bat 'docker rm nodejs-cicd-container || exit 0'
                bat 'docker run -d -p 3000:3000 --name nodejs-cicd-container nodejs-cicd'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'curl http://localhost:3000/status'
            }
        }
    }
}