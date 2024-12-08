
# OmniTensor SDK

OmniTensor SDK provides a robust set of TypeScript utilities for interacting with the OmniTensor decentralized AI platform. Developers can integrate AI models, perform blockchain operations and validate datasets seamlessly.

## Features

- Easy-to-use TypeScript interface for OmniTensor.
- Supports blockchain transactions and AI model interaction.
- Includes robust validation utilities and pre-configured tools.

## Installation

```bash
npm install omnitensor-sdk
```

## Usage

### Initialize Client
```typescript
import { OmniClient } from 'omnitensor-sdk';

const client = new OmniClient('https://api.omnitensor.io');
client.getBlock(10).then(block => console.log(block));
```

### Run AI Inference
```typescript
import { Inference } from 'omnitensor-sdk';

const inference = new Inference();
const result = inference.runInference('example-model', 'input data');
console.log(result);
```

## Development

### Build
```bash
npm run build
```

### Test
```bash
npm test
```

### Lint
```bash
npm run lint
```

## License

MIT License © OmniTensor
