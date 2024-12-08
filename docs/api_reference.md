# OmniTensor SDK API Reference

The OmniTensor SDK provides developers with the tools to interact with the OmniTensor decentralized AI infrastructure. Below are the detailed API descriptions for all core modules.

## Core API

### OmniClient
The `OmniClient` class is used to interact with the OmniTensor blockchain.

#### Methods:
- `constructor(endpoint: string)`
  - **Description**: Initializes the client with a given API endpoint.
  - **Parameters**:
    - `endpoint` (string): URL of the OmniTensor API endpoint.
  - **Example**:
    ```typescript
    const client = new OmniClient("https://api.omnitensor.io");
    ```

- `getBlock(height: number): Promise<Block>`
  - **Description**: Fetches details of a block by height.
  - **Parameters**:
    - `height` (number): Height of the block.
  - **Returns**: A `Promise` resolving to a `Block` object.
  - **Example**:
    ```typescript
    const block = await client.getBlock(100);
    console.log(block);
    ```

## AI Module

### Inference
The `Inference` class provides methods to run AI model inferences.

#### Methods:
- `runInference(model: string, input: string): Promise<string>`
  - **Description**: Runs inference using the specified model and input.
  - **Parameters**:
    - `model` (string): Name of the model to use for inference.
    - `input` (string): Input data for the model.
  - **Returns**: A `Promise` resolving to the inference result.
  - **Example**:
    ```typescript
    const result = await inference.runInference("LLM-1", "Hello AI");
    console.log(result);
    ```

## Utility Module

### Crypto
The `Crypto` utility contains cryptographic functions.

#### Methods:
- `hashData(data: string): string`
  - **Description**: Generates a SHA-256 hash of the input data.
  - **Parameters**:
    - `data` (string): Input string to hash.
  - **Returns**: Base64 encoded hash.
  - **Example**:
    ```typescript
    const hash = Crypto.hashData("Hello");
    console.log(hash);
    ```

## Examples
For usage examples, refer to the `examples` directory of the SDK.
