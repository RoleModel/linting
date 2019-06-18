# RoleModel Shared Rubocop config

Base [rubocop](https://github.com/bbatsov/rubocop#inheriting-configuration-from-a-remote-url) configuration used on all RoleModel Ruby projects.

## Usage

Just add an inheritence line to your project's `.rubocop.yml` file. Ensure you have Rubocop `0.71.0` or later installed.

```yaml
inherit_from:
  - https://raw.githubusercontent.com/RoleModel/linting/master/.rubocop.yml
```

## Contributing

Submit a PR for changes

## License

MIT
