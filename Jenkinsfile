pipeline {
    agent none
    environment {
        DOCKER_IMAGE = "nakhang2002/hostmanage"
    }
    stages {
        stage("test"){
            agent {
                docker {
                    image "node:lts-bullseye-slim"
                    args "-p 3000:3000"
                }
            }
            steps {
                sh 'npm config ls '
            }
        }

    }

    post {
    success {
      echo "SUCCESSFUL"
    }
    failure {
      echo "FAILED"
    }
  }
}