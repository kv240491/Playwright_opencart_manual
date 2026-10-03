// Jenkinsfile.windows
// Declarative Jenkins Pipeline for Playwright Automation Framework
// Windows Jenkins Agent

/*
Pipeline Stages:

1. Checkout
   - Checks out the source code from Git.

2. Install Dependencies
   - Installs Node.js project dependencies using npm ci.

3. Install Playwright Browser
   - Installs Chromium required by the current Playwright configuration.
   - Creates .env from .env.example when required.

4. Run Playwright Tests
   - Executes the selected test suite.
   - Supports master, api, web, db, and datadriven suites.
   - Supports headless and headed execution.

5. Post Actions
   - Archives Playwright, Custom and Allure results.
   - Publishes JUnit results.
   - Publishes Playwright HTML report.
   - Publishes Custom HTML report.
   - Publishes Allure report.
*/

pipeline {

    agent any

    tools {
        git 'Default'
    }

    options {
        timestamps()
    }

    parameters {

        choice(
            name: 'TEST_SUITE',
            choices: [
                'master',
                'api',
                'web',
                'db',
                'datadriven'
            ],
            description: 'Select the Playwright test suite to run'
        )

        choice(
            name: 'MODE',
            choices: [
                'headless',
                'headed'
            ],
            description: 'Run tests in headless or headed mode'
        )
    }

    environment {
        NODE_ENV = 'test'
        CI = '1'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                powershell '''
                    npm ci
                '''
            }
        }

        stage('Install Playwright Browser') {
            steps {
                powershell '''
                    npx playwright install chromium

                    if (-not (Test-Path ".env")) {
                        Copy-Item ".env.example" ".env"
                    }
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {

                    def suite = params.TEST_SUITE
                    def modeFlag = params.MODE == 'headed' ? '--headed' : ''

                    powershell """
                        npm run test:${suite} -- --project=chromium ${modeFlag}
                    """
                }
            }
        }
    }

    post {

        always {

            archiveArtifacts(
                artifacts: 'reports/**,custom-report/**,allure-results/**,test-results/**',
                allowEmptyArchive: true
            )

            junit(
                testResults: 'reports/results.xml',
                allowEmptyResults: true
            )

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports/html',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'custom-report',
                reportFiles: '*.html',
                reportName: 'Custom Test Report'
            ])

            allure(
                includeProperties: false,
                results: [[path: 'allure-results']]
            )
        }

        success {
            script {
                powershell '''
                    if (Test-Path "allure-results") {
                        Remove-Item -Recurse -Force "allure-results"
                    }
                '''
            }
        }
    }
}