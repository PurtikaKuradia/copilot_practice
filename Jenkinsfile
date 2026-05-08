pipeline {
    agent any

    parameters {
        choice(name: 'TEST_TYPE', choices: ['smoke', 'regression', 'all'], description: 'Select test type to run')
    }

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

        stage('Run Smoke Tests') {
            when {
                anyOf {
                    expression { params.TEST_TYPE == 'smoke' }
                    expression { params.TEST_TYPE == 'all' }
                }
            }
            steps {
                echo '========== Executing Smoke Tests =========='
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    bat '''
                        set CI=true
                        npx playwright test --project=chromium-smoke --grep "@smoke"
                    '''
                }
            }
        }

        stage('Run Regression Tests') {
            when {
                anyOf {
                    expression { params.TEST_TYPE == 'regression' }
                    expression { params.TEST_TYPE == 'all' }
                }
            }
            steps {
                echo '========== Executing Regression Tests =========='
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    bat '''
                        set CI=true
                        npx playwright test --project=chromium-regression --grep "@regression"
                    '''
                }
            }
        }

        stage('Run All Tests') {
            when {
                expression { params.TEST_TYPE == 'all' }
            }
            steps {
                echo '========== Executing All Tests =========='
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    bat '''
                        set CI=true
                        npx playwright test
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
            script {
                if (params.TEST_TYPE == 'smoke') {
                    echo 'Smoke tests passed!'
                } else if (params.TEST_TYPE == 'regression') {
                    echo 'Regression tests passed!'
                } else {
                    echo 'All tests passed!'
                }
            }
        }

        unstable {
            echo '========== Pipeline completed with test failures =========='
            script {
                if (params.TEST_TYPE == 'smoke') {
                    echo 'Some smoke tests failed. Check the reports for details.'
                } else if (params.TEST_TYPE == 'regression') {
                    echo 'Some regression tests failed. Check the reports for details.'
                } else {
                    echo 'Some tests failed. Check the reports for details.'
                }
            }
        }

        failure {
            echo '========== Pipeline execution failed =========='
            echo 'Check logs for errors in setup or execution phases.'
        }
    }
}
