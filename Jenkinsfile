pipeline {
  agent any

  stages {
    stage('Check Git Installation') {
      steps {
        script {
          // Check if Git is installed
          def gitInstalled = sh(script: 'git --version', returnStatus: true)
          if (gitInstalled != 0) {
            // Handle the case where Git is not installed
            error 'Git is not installed. Please install Git on the Jenkins agent.'
          } else {
            echo 'Git is already installed.'
          }
        }
      }
    }

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Node.js and npm') { // Added closing curly brace
      steps {
        script {
          // Check if Node.js is installed
          def nodeInstalled = sh(script: 'node -v', returnStatus: true)
          if (nodeInstalled != 0) {
            error 'Node.js is not installed. Please install Node.js on the Jenkins agent.'
          }

          // Check if npm is installed
          def npmInstalled = sh(script: 'npm -v', returnStatus: true)
          if (npmInstalled != 0) {
            error 'npm is not installed. Please install npm on the Jenkins agent.'
          }

          // Install dependencies
          sh 'npm install'
        }
      }
    }

    stage('Build') { // Renamed stage name for clarity
      steps {
        // Assuming you have added Docker credentials in Jenkins with ID 'docker-credentials-id'
        withCredentials([usernamePassword(credentialsId: 'docker-hup', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
          sh 'docker build -f dockerfile . -t abdelrahman645/jenkins_nodejs:v3.0'
          sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
          sh 'docker push abdelrahman645/jenkins_nodejs:v3.0'
        }
      }
    }
  }

  post {
    success {
      echo 'Pipeline completed successfully!'
    }
    failure {
      echo 'Pipeline failed.'
    }
  }
}
