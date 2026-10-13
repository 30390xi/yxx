#!/bin/sh
set -eu
cd "$(dirname "$0")"
JAVA8_HOME="${JAVA8_HOME:-$(/usr/libexec/java_home -v 1.8)}"
mkdir -p build
"$JAVA8_HOME/bin/javac" -source 8 -target 8 -encoding UTF-8 -d build src/FixtureServer.java
exec "$JAVA8_HOME/bin/java" -cp build FixtureServer "${1:-8787}"
