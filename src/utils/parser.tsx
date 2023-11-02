interface ParserProps {
  text: string | null | undefined,
}
export const findFramedWords = ({ text }: ParserProps) => {
  if (text !== null && text !== undefined) {
    const pattern = /\[\[(.*?)\]\]/g
    const results = [];
    let match;
    while ((match = pattern.exec(text)) !== null) {
      results.push(match[1])
    }
    return results
  }
}

interface createPromptProps {
  text: string | null | undefined,
  inputs: string[] | null | undefined,
}
export const createPrompt = ({ text, inputs }: createPromptProps) => {
  console.log('createPrompt', text, inputs)
}