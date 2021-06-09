Nodejs imports and exports files as modules. We can specify what type of exporting system a package uses for its modules by looking into its package.json.


**COMMONJS**
```JavaScript
const obj = require('../dir/file.cjs');
obj.someExportedFunction();
```

**ESMODULE**
```JavaScript
import obj from '../dir/file.mjs';
obj.someExportedFunction()
```