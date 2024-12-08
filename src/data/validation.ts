
import * as Joi from 'joi';

/**
 * ValidationError encapsulates errors encountered during validation.
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * DataValidator provides schema-based validation methods for OmniTensor SDK.
 */
export class DataValidator {
  /**
   * Validates a transaction object.
   * @param transaction - The transaction object to validate.
   * @returns The validated transaction.
   * @throws ValidationError if the transaction is invalid.
   */
  static validateTransaction(transaction: any): any {
    const schema = Joi.object({
      from: Joi.string().required().pattern(/^0x[a-fA-F0-9]{40}$/).messages({
        'string.pattern.base': 'The `from` field must be a valid Ethereum address.',
        'any.required': 'The `from` field is required.'
      }),
      to: Joi.string().required().pattern(/^0x[a-fA-F0-9]{40}$/).messages({
        'string.pattern.base': 'The `to` field must be a valid Ethereum address.',
        'any.required': 'The `to` field is required.'
      }),
      amount: Joi.number().required().positive().precision(18).messages({
        'number.positive': 'The `amount` must be a positive number.',
        'any.required': 'The `amount` field is required.'
      }),
      data: Joi.string().optional().max(1024).messages({
        'string.max': 'The `data` field must not exceed 1024 characters.'
      })
    });

    const { error, value } = schema.validate(transaction, { abortEarly: false });

    if (error) {
      throw new ValidationError(`Transaction validation failed: ${error.message}`);
    }

    return value;
  }

  /**
   * Validates a data set for AI model training.
   * @param dataset - The dataset to validate.
   * @returns The validated dataset.
   * @throws ValidationError if the dataset is invalid.
   */
  static validateDataset(dataset: any): any {
    const schema = Joi.array()
      .items(
        Joi.object({
          input: Joi.string().required().messages({
            'any.required': '`input` is required for each dataset entry.'
          }),
          label: Joi.string().required().messages({
            'any.required': '`label` is required for each dataset entry.'
          })
        })
      )
      .min(1)
      .messages({
        'array.min': 'The dataset must contain at least one entry.'
      });

    const { error, value } = schema.validate(dataset, { abortEarly: false });

    if (error) {
      throw new ValidationError(`Dataset validation failed: ${error.message}`);
    }

    return value;
  }
}
