/**
 * @returns {string}
 */
export const sqsBaseUrl = () =>
  `https://sqs.${process.env.AWS_ACCOUNT_REGION}.amazonaws.com/${process.env.AWS_ACCOUNT_ID}/`;

/**
 * Returns UTC datetime string
 *
 * @returns {string}
 */
export const getCurrentDateTime = () => {
  const date = new Date();

  return date.toISOString();
};
