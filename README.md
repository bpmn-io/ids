# ids

[![Build Status](https://github.com/bpmn-io/ids/actions/workflows/CI.yml/badge.svg)](https://github.com/bpmn-io/ids/actions/workflows/CI.yml)

A simple caching id generation utility.

## Usage

```javascript
import { Ids } from 'ids';

const ids = new Ids();

const next = ids.next(); // returns id

ids.claim('f71a81'); // claim id as already existing

ids.assigned('f71a81'); // true if id was already generated / claimed
```


## Get the library

Fetch it via [npm](http://npmjs.org):

```
npm install --save ids
```


## License

Use under the terms of the [MIT license](http://opensource.org/licenses/MIT).