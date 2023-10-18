const INTERNAL_SERVER_ERROR = 500;

const UrlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const PATTERN_EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/i;
const PATTERN_NAME = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,30}$/i;

module.exports = {
  INTERNAL_SERVER_ERROR,
  UrlRegex,
  PATTERN_EMAIL,
  PATTERN_NAME,
};
