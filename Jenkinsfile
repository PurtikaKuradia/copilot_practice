pipeline {
    agent any

    options {
        timeout(time: 1, unit: 'HOURS')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '5'))
    }

    stages {
        stage('Checkout') {
            steps {
                echo '========== Checking out code from repository =========='
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '========== Installing Node.js dependencies =========='
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                echo '========== Executing Playwright tests =========='
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    bat '''
                        set CI=true
                        npm test
                    '''
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                echo '========== Generating Allure Report =========='
                script {
                    try {
                        bat 'allure generate allure-results --clean -o allure-report'
                        echo 'Allure report generated successfully'
                    } catch (Exception e) {
                        echo "Warning: Allure report generation failed: ${e.message}"
                    }
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo '========== Archiving test results and reports =========='
                archiveArtifacts artifacts: '''
                    playwright-report/**,
                    allure-report/**,
                    allure-results/**,
                    test-results/**,
                    screenshot/**
                ''', 
                allowEmptyArchive: true,
                onlyIfSuccessful: false
            }
        }

        stage('Publish Test Results') {
            steps {
                echo '========== Publishing test results =========='
                script {
                    // Publish Playwright HTML Report
                    publishHTML([
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        reportName: 'Playwright Report',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])

                    // Publish Allure Report if available
                    publishHTML([
                        reportDir: 'allure-report',
                        reportFiles: 'index.html',
                        reportName: 'Allure Report',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])
                }
            }
        }
    }

    post {
        always {
            echo '========== Cleaning up workspace =========='
            cleanWs(
                deleteDirs: true,
                patterns: [
                    [pattern: 'node_modules/**', type: 'INCLUDE']
                ]
            )
        }
        
        success {
            echo '========== Pipeline executed successfully =========='
            echo 'All Playwright tests passed!'
        }
        
        unstable {
            echo '========== Pipeline completed with test failures =========='
            echo 'Some tests failed. Check the reports for details.'
        }
        
        failure {
            echo '========== Pipeline execution failed =========='
            echo 'Check logs for errors in setup or execution phases.'
        }
    }
}
