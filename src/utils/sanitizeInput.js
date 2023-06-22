/**
 *
 * @param {*} input
 * @description Uses regular expression to remove any HTML tags from input, then remove any charecters
 * that are commonly used in code injections.
 * @returns cleaned text
 */
export default function sanitizeInput(input) {
    let sanitizedText = input.replace(/<[^>]+>|[&<>"'\/=\\^[\]{}+(),]/g, "");
    return sanitizedText;
  }