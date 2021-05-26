# Contributing

## Running the website locally

### Requirements

- PHP 7.3, 7.4 or 8.0
  Required extensions:
  - `mbstring`
  - `curl`
  - `ctype`
  - `gd`

See the [requirements section](https://getkirby.com/docs/guide/quickstart#requirements) on the Kirby website for more details.

### Preparations

Clone the repository **with submodules**:

```sh
git clone --recurse-submodules https://github.com/elyukai/optolith-webpage.git <folder>
```

`<folder>` can be omitted (then it will create a new `optolith-webpage` folder) or you can specify a folder name, where `.` can be used to clone it into the current folder.

### Start the server

Start the server using PHP's built-in server.

```sh
php -S localhost:8000 kirby/router.php
```

Then you can navigate to http://localhost:8000.

## Contribution Workflow

To contribute to the documentation or other parts of the website, you need to fork the repository on GitHub, then clone it **with submodules**:

```sh
git clone --recurse-submodules https://github.com/<username>/optolith-webpage.git <folder>
```

`<username>` is your username and `<folder>` can be omitted (then it will create a new `optolith-webpage` folder) or you can specify a different folder name, where `.` can be used to clone it into the current folder.

The you can make changes to the branch you want to contribute to and submit a pull request for review. You can also do this is if your work is not done yet to get early feedback and to discuss planned changes.
