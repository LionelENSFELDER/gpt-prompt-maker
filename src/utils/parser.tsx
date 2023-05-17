const parser = (text: string, pattern: RegExp) => {
  const result = text.match(pattern);
  return result;
}

export default parser;