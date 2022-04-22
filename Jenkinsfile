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
                //sh 'node server.js'
            }
        }
        stage("build"){
            agent { node {label 'built-in'}}
             /* agent {
                docker {
                    image "node:lts-bullseye-slim"
                    args "-p 3000:3000"
                } 
             }*/
            environment {
                DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
            }
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                sh "docker image ls | grep ${DOCKER_IMAGE}"
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker push ${DOCKER_IMAGE}:latest"
                }
                sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh "docker image rm ${DOCKER_IMAGE}:latest"
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