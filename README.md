# js-avatar

A npm package to get avatars based on email and name.

# Installation

```bash
$ npm install js-avatar
```

# Dependencies

## Runtime

- Node 10+

## Development

- md5

# Usage

```javascript
// CommonJS
const { getAvatar } = require('js-avatar')
getAvatar(email) // your@email.com
// returns
// {
//   image: 'https://s.gravatar.com/avatar/67135a14d3ac4f1369633dd006d6efec3b?s=128',
//   initials: 'https://ui-avatars.com/api/?name=Shahbaz+Alam&background=random&size=128'
// }

getAvatar(email, name) // your@email.com, Full Name
// returns
// {
//   image: 'https://s.gravatar.com/avatar/67135a14d3ac4f1369633dd006d6efec3b?s=128',
//   initials: 'https://ui-avatars.com/api/?name=Full+Name&background=random&size=128'
// }

getAvatar(email, name, size) // your@email.com, Full Name, 200
// returns
// {
//   image: 'https://s.gravatar.com/avatar/67135a14d3ac4f1369633dd006d6efec3b?s=200',
//   initials: 'https://ui-avatars.com/api/?name=Full+Name&background=random&size=200'
// }
```
