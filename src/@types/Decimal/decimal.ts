const { GraphQLScalarType, Kind } = require('graphql');

const NumberDecimalType = new GraphQLScalarType({
  name: 'NumberDecimal',
  description: 'Represents a decimal number string like "80.00"',
  serialize(value) {
    // Ensure the value is a string
    if (typeof value !== 'string') {
      throw new Error('NumberDecimal must be a string');
    }

    // Ensure the value matches the expected format
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      throw new Error('Invalid NumberDecimal format');
    }

    return value;
  },
  parseValue(value) {
    // Ensure the value is a string
    if (typeof value !== 'string') {
      throw new Error('NumberDecimal must be a string');
    }

    // Ensure the value matches the expected format
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      throw new Error('Invalid NumberDecimal format');
    }

    return value;
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new Error('NumberDecimal must be a string');
    }

    // Ensure the value matches the expected format
    if (!/^\d+(\.\d{1,2})?$/.test(ast.value)) {
      throw new Error('Invalid NumberDecimal format');
    }

    return ast.value;
  }
});

module.exports = NumberDecimalType;
