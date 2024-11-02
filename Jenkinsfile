pipeline {
    agent any

    stages {
        stage('Check Git Installation') {
            steps {
                script {
                    // Check if Git is installed
                    def gitInstalled = sh(script: 'git --version', returnStatus: true)
                    if (gitInstalled != 0) {
                        // Install Git if it's not found
                        echo 'Git is not installed. Installing Git...'
                        sh 'sudo apt-get update && sudo apt-get install -y git' // For Debian/Ubuntu
                        // For other systems, replace with the appropriate package manager commands
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

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    sh 'sudo apt update'
                    sh 'sudo apt install -y nodejs npm'
                    
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run the build process
                    sh 'npm run build'
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
