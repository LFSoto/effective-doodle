pipeline {
  agent any
  
  stages {
    
    stage("Install dependencies"){
      
      steps{
        echo 'Downloading dependencies....'
        sh 'npm install'
      }
    }
    
    stage("build"){
      
      steps{
        echo 'building....'
        sh 'npm run build'
      }
    }
    
    stage("test"){
      
      steps{
        echo 'testing....'
        sh 'npm run test'
      }
    }
  }
}
