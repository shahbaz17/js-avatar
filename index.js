var md5 = require('md5')

module.exports = {
  getAvatar: (email, name = 'Shahbaz Alam', size = 128) => {
    const avatar = {
      image: `https://s.gravatar.com/avatar/${md5(email)}3b?s=${size}`,
      initials: `https://ui-avatars.com/api/?name=${name.replace(
        /\s/g,
        '+'
      )}&background=random&size=${size}`,
    }

    return avatar
  },
}
