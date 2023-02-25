# Log Colorify Package

This NPM package allows you to print console log messages in different colors based on the condition specified.

## Installation

- To install this package, run the following command:

```js
`npm install log-colorify-package`;
```

## Usage

- Import the package in your JavaScript file:

```js
import { Log } from "log-colorify-package";
```

- To print a message with a specific color, use the following syntax:

```js
logColorify.<type>('Your message here');
```

- Here, `<type>` can be one of the following:

- danger
- warning
- success
- info
- dark
- light

## Example

```js
import { Log } from "log-colorify-package";

logColorify.danger("Oh no! Something went wrong.");
logColorify.warning("Warning: This action cannot be undone.");
logColorify.success(
  "Congratulations! Your payment has been processed successfully."
);
logColorify.info("Please read the terms and conditions before proceeding.");
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
