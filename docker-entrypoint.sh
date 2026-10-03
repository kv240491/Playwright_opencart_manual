#!/bin/bash
# =============================================================================
# docker-entrypoint.sh — Playwright test-suite selector
# =============================================================================
# Supported suites match package.json:
#   master, api, web, db, datadriven
#
# Examples:
#   docker-entrypoint.sh
#   docker-entrypoint.sh master
#   docker-entrypoint.sh api
#   docker-entrypoint.sh web
#   docker-entrypoint.sh db
#   docker-entrypoint.sh datadriven
#   docker-entrypoint.sh api --workers=1
# =============================================================================

set -e

SUITE="${1:-all}"

case "$SUITE" in
  all)
    shift 2>/dev/null || true
    echo "==> Running all Playwright tests"
    exec npx playwright test "$@"
    ;;

  master|api|web|db|datadriven)
    shift
    echo "==> Running '$SUITE' test suite"
    exec npm run "test:${SUITE}" -- "$@"
    ;;

  *)
    echo "Error: Unknown test suite '$SUITE'"
    echo ""
    echo "Usage: $0 {all|master|api|web|db|datadriven} [playwright-args...]"
    echo ""
    echo "Available test suites:"
    echo "  all         Run all Playwright tests"
    echo "  master      Run @master tests"
    echo "  api         Run @api tests"
    echo "  web         Run @web tests"
    echo "  db          Run @db tests"
    echo "  datadriven  Run @Datadriven tests"
    exit 1
    ;;
esac
