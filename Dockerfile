# =============================================================================
# Dockerfile — Playwright JavaScript Automation Framework
# =============================================================================

# Keep the Docker Playwright version aligned with @playwright/test in package.json.
FROM mcr.microsoft.com/playwright:v1.63.0-noble

WORKDIR /app

# Copy dependency manifests first to take advantage of Docker layer caching.
COPY package*.json ./

# Install exact dependency versions from package-lock.json.
RUN npm ci

# Copy the framework source.
COPY . .

# Create report/artifact directories used by playwright.config.js and CustomReporter.
RUN mkdir -p /app/reports /app/custom-report /app/allure-results /app/test-results

# Your playwright.config.js uses CI to set retries=2 and workers=1.
ENV CI=1

# Browsers are already included in the official Playwright image.
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

RUN chmod +x /app/docker-entrypoint.sh

ENTRYPOINT ["/app/docker-entrypoint.sh"]

# Default when no suite is supplied.
CMD ["all"]
