raisejs
=======

```bash
npm install raisejs
```

```javascript
var raise = require('raisejs')
raise('Something bad happened')    // throw new Error('Something bad happened')
raise(MyError, 'Ouch!')            // throw new MyError('Ouch!')
raise(new MyError('Ouch!'))        // throw new MyError('Ouch!')
```

```javascript
var userId = req.param('id') || raise(BadRequest, 'Please specify ID')
```
