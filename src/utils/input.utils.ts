const ONLY_LETTER_AND_SPACES = /^[A-Za-z\s]+$/;
const ONLY_UPPERCASE_LETTER_MAX_LENGTH_2 = /^[A-Z]{1,2}$/;
const ONLY_SPACES = /\s+$/;
const ONLY_NUMBERS_MAX_LENGTH_11 = /^\d{1,11}$/
const ACCEPT_ALL = /^.*$/;

export const isValidValue = (inputName: string, value: string) => {
  switch (inputName) {
    case 'name':
      return ONLY_LETTER_AND_SPACES.test(value);
    case 'email':
      return !ONLY_SPACES.test(value);
    case 'whatsapp':
      return ONLY_NUMBERS_MAX_LENGTH_11.test(value);
    case 'city':
      return ONLY_LETTER_AND_SPACES.test(value);
    case 'uf':
      return ONLY_UPPERCASE_LETTER_MAX_LENGTH_2.test(value);
    default:
      return ACCEPT_ALL.test(value);
  }
}