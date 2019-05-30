rename name to folder name
ls -d * | xargs -I {} sed -i '' 's/"name": ".*"/"name": "{}"/' {}/package.json

remove package-lock.json
ls -d * | xargs -I {} -exec rm -f {}/package-lock.json
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## 1.0.0 - 2019-05-30

### Added

- This file.
- All lesson branches as monorepo.
- Yarn, workspaces, build scripts, and readme.


### Changed

- Simplify directory structure.
-

### Removed

