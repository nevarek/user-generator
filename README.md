# user-generator

A simple npm package to generate a list of mock user accounts and store it into a CSV file.

The user accounts have the following keys/headers:
- firstName
- lastName
- email
- favoriteAnimal
- profession

Emails are always in the format of "first initial + lastName@domain" and pick from a small set of domains to increase similarity. Same with favorite animals.

# Setup
You'll need `Node.js`, which comes with `npm`. You can optionally use `yarn` as the package manager instead.

Once you have the package manager and the needed node.js binary, run `npm install` or `yarn install`


# Usage
Once the dependencies are installed, you can run the index file from a CLI:

    node src/index.js <number of accounts to generate>

By default, the script generates 100 accounts.

Output CSV will be in the root directory in a file called `users.csv`


# Additional Notes

- This script is not suitable for generating a large amount of records. If this is the case, you would probably want to stream the data using a gzip library to write a compressed file, which isn't supported by this script or the `csv-writer` library.
